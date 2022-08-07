import { supabase } from "../utils/supabase";
import Pregunta from "../components/pregunta";
import Login from "../components/login";
import AppLayout from "../components/AppLayout";
import { useState, useEffect } from "react";
import Counter from "../components/counter";
import { useAuth } from "../utils/auth";
import Twitter from "../components/twitter";
import User from "../components/user";

export default function Home({ lessons }) {
  const [questions] = useState(lessons);
  const [idx, setIdx] = useState(0);
  const [question, setQuestion] = useState(lessons[idx]);
  const [fails, setFails] = useState(0);
  const [corrects, setCorrects] = useState(0);
  const { user, signOut, signIn } = useAuth();
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    setQuestion(questions[idx]);
    if (idx === questions.length) {
      setFinish(true);
    }
  }, [idx, questions]);

  const handle = (evt) => {
    const isCorrect = evt.target.attributes.attr.value;
    console.log(isCorrect);
    if (isCorrect === "true") {
      setCorrects(corrects + 1);
    } else {
      setFails(fails + 1);
    }
    setIdx((prev) => prev + 1);
  };

  console.log(idx);
  return (
    <>
      <AppLayout>
        {user ? (
          <>
            <User
              userName={user.user_metadata.user_name}
              avatar={user.user_metadata.avatar_url}
              signout={signOut}
            />
            <Counter
              correctCount={corrects}
              failsCount={fails}
              finish={finish}
            />
            {finish ? (
              <>
                <h1>¡Hemos terminado!</h1>
                <button>
                  <Twitter />
                  Compartir en twitter
                </button>
              </>
            ) : (
              <>
                <Pregunta
                  key={question.id}
                  pregunta={question.pregunta}
                  respuestas={question.respuestas}
                  image={question.image}
                  handle={handle}
                />
              </>
            )}
          </>
        ) : (
          <Login handle={signIn} />
        )}
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
