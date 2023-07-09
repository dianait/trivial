import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AppLayout from "../components/AppLayout";
import Counter from "../components/counter";
import Pregunta from "../components/pregunta";
import { supabase } from "../utils/supabase";
import { getPercent, getTextResult, shuffle } from "../utils/utils";

export default function Home({ lessons }) {
  const [questions] = useState(shuffle(lessons));
  const [idx, setIdx] = useState(0);
  const [question, setQuestion] = useState(lessons[idx]);
  const [fails, setFails] = useState(0);
  const [corrects, setCorrects] = useState(0);
  const router = useRouter();

  const insertRanking = async () => {
    const ranking = createRanking()
    const { error } = await supabase.from('ranking').upsert(ranking)
    if (error) console.log(error);
  };

  const createRanking = () => {
    return {
      id: +Date.now(),
      userName: `@dianait`,
      puntuacion: `${corrects}/${questions.length}`,
      resultado: getTextResult(getPercent(corrects, questions.length)),
    };
  };

  useEffect(() => {
    if (idx === questions.length) {
      insertRanking();
      let resultado = getTextResult(getPercent(corrects, questions.length))
      router.replace(`${resultado}`);
    } else {
      setQuestion(questions[idx]);
    }
  }, [idx]);

  const handle = (evt) => {
    const isCorrect = evt.target.attributes.attr.value;
    if (isCorrect === "true") {
      setCorrects((prev) => prev + 1);
    } else {
      setFails((prev) => prev + 1);
    }
    setIdx((prev) => prev + 1);
  };

  return (
    <>
      <AppLayout>
        <>
          <Counter correctCount={corrects} failsCount={fails} />
          {idx < questions.length && (
            <Pregunta
              key={question.id}
              pregunta={question.pregunta}
              respuestas={question.respuestas}
              image={question.image}
              user={question.user}
              handle={handle}
            />
          )}
        </>
      </AppLayout>
      <style jsx>{`
        button {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background-color: #2b8cc9;
          color: white;
          width: 240px;
          height: 50px;
          font-size: 1.2rem;
          border: none;
          border-radius: 5px;
          margin-top: 32px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export const getStaticProps = async () => {
  const { data: lessons } = await supabase.from("preguntas").select("*");
  return {
    props: {
      lessons,
    },
  };
};
