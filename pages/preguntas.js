import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AppLayout from "../components/AppLayout";
import BannerWithImage from "../components/bannerWithImage";
import Error from "../components/error";
import Pregunta from "../components/pregunta";
import User from "../components/user";
import { useAuth } from "../utils/auth";
import { supabase } from "../utils/supabase";

export default function Preguntas({ lessons }) {
  const [questions] = useState(lessons);
  const [preview, setPreview] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const { user, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  });

  const save = async () => {
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
      {user && (
        <User
          userName={user.user_metadata.user_name}
          avatar={user.user_metadata.avatar_url}
          signout={signOut}
        />
      )}

      {questions.length === 0 && (
        <Error
          texto="¡Ups! Parece que el asturiano está cerrado y todavía no hay ninguna pregunta"
          boton="Añadir pregunta"
        />
      )}
      {questions.map((q, idx) => {
        return (
          <div
            key={idx}
            onClick={(event) => {
              setPreview(true);
              setCurrentQuestion(questions[idx]);
            }}
          >
            <p id={idx}>{q.pregunta}</p>
          </div>
        );
      })}
      {preview && (
        <section>
          <BannerWithImage
            handle={() => {
              setPreview(false);
            }}
            preview={preview}
          >
            <Pregunta
              pregunta={currentQuestion.pregunta}
              image={currentQuestion.imag ?? "./images/luimelia.jpeg"}
              respuestas={currentQuestion.respuestas}
              handle={() => {
                console.log("preview");
              }}
            />
            <button onClick={save}>Añadir pregunta</button>
          </BannerWithImage>
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
          margin: 0 auto;
          margin-bottom: 1rem;
        }
        h2 {
          text-align: center;
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
