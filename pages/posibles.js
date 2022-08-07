import { supabase } from "../utils/supabase";
import Pregunta from "../components/pregunta";
import AppLayout from "../components/AppLayout";
import { useState, useEffect } from "react";

export default function Home({ lessons }) {
  const [questions] = useState(lessons);
  const [idx, setIdx] = useState(0);
  const [question, setQuestion] = useState(lessons[idx]);

  useEffect(() => {
    setQuestion(questions[idx]);
  }, [idx, questions]);

  const handle = (evt) => {
    if (idx === questions.length - 1) {
      setIdx(0);
    } else {
      setIdx((prev) => prev + 1);
    }
  };

  return (
    <>
      <AppLayout>
        <Pregunta
          key={question.id}
          pregunta={question.pregunta}
          respuestas={question.respuestas}
          image={question.image}
        />
        <button onClick={handle}>SIGUIENTE</button>
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
  const { data: lessons } = await supabase
    .from("preguntas_posibles")
    .select("*");
  return {
    props: {
      lessons,
    },
  };
};
