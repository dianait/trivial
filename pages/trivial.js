import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AppLayout from "../components/AppLayout";
import Banner from "../components/banner";
import Counter from "../components/counter";
import Pregunta from "../components/pregunta";
import User from "../components/user";
import { useAuth } from "../utils/auth";
import { supabase } from "../utils/supabase";
import { getPercent, getTextResult, shuffle } from "../utils/utils";

export default function Home({ lessons }) {
  const [questions] = useState(shuffle(lessons));
  const [idx, setIdx] = useState(0);
  const [question, setQuestion] = useState(lessons[idx]);
  const [fails, setFails] = useState(0);
  const [corrects, setCorrects] = useState(0);
  const { user, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  });

  const insertRanking = async () => {
    const ranking = createRanking()
    const { error } = await supabase.from('ranking').upsert(ranking)
    if (error) console.log(error);
  };

  const createRanking = () => {
    return {
      id: +Date.now(),
      userName: `@${user.user_metadata.user_name}`,
      puntuacion: `${corrects}/${questions.length}`,
      avatar: user.user_metadata.avatar_url,
      resultado: getTextResult(getPercent(corrects, questions.length)),
    };
  };

  useEffect(() => {
    if (idx === questions.length) {
      insertRanking();
      router.replace(`/@${user.user_metadata.user_name}`);
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
          {user && (
            <User
              userName={user.user_metadata.user_name}
              avatar={user.user_metadata.avatar_url}
              signout={signOut}
            />
          )}
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
          <Banner />
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
