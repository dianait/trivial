import { supabase } from "../utils/supabase";
import AppLayout from "../components/AppLayout";
import { useState } from "react";
import Pregunta from "../components/pregunta";
import { useAuth } from "../utils/auth";
import User from "../components/user";
import Login from "../components/login";
import Link from "next/link";

export default function Preguntas({ lessons }) {
  const [questions] = useState(lessons);
  const [preview, setPreview] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const { user, signOut, signIn } = useAuth();

  const save = async () => {
    // Delete question from possibles questions
    const { errorDelete } = await supabase
      .from("preguntas_posibles")
      .delete()
      .match({ id: currentQuestion.id });

    if (errorDelete) {
      console.log(errorDelete);
    }
    // Add question from final questions
    const { error } = await supabase
      .from("preguntas")
      .insert([currentQuestion]);

    if (error) {
      console.log(error);
    }
  };

  return (
    <AppLayout>
      {user ? (
        <User
          userName={user.user_metadata.user_name}
          avatar={user.user_metadata.avatar_url}
          signout={signOut}
        />
      ) : (
        <Login handle={signIn} />
      )}
      {questions.length === 0 && (
        <>
          <h2>¡Ups! El asturiano está cerrado y no hay preguntas</h2>
          <img src="./images/asturiano.webp" width="100%" />

          <Link href="/add">
            <a>Añadir pregunta</a>
          </Link>
        </>
      )}
      {questions.map((q, idx) => {
        return (
          <div
            key={idx}
            onClick={(event) => {
              setPreview(true);
              const idx = event.target.id;
              setCurrentQuestion(questions[idx]);
            }}
          >
            <p id={idx}>{q.pregunta}</p>
          </div>
        );
      })}
      {preview && (
        <section>
          <button onClick={save}>Añadir pregunta</button>
          <Pregunta
            pregunta={currentQuestion.pregunta}
            image={currentQuestion.image}
            respuestas={currentQuestion.respuestas}
            handle={() => {
              console.log("preview");
            }}
          />
        </section>
      )}

      <style jsx>{`
        section {
          position: fixed;
          bottom: 0;
        }
        div {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: start;
          align-content: center;
          align-items: center;
          font-size: 1.2rem;
          border: none;
          border-radius: 5px;
          border: 1px solid #ccc;
          padding: 0.2rem 1rem;
          margin: 0.3rem 0;
        }
        input {
        }
        button,
        a {
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
          margin-top: 1rem;
          cursor: pointer;
        }
      `}</style>
    </AppLayout>
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
