import { supabase } from "../utils/supabase";
import AppLayout from "../components/AppLayout";
import Feedback from "../components/feedback";
import { useState } from "react";
import Pregunta from "../components/pregunta";

const fb = {
  ok: {
    img: "si",
    texto:
      "Marcelino ha tomado nota de tu pregunta. <br /> Pronto la añadirá al menu del Asturiano <br /> ¡Muchas gracias!",
  },
  ko: {
    img: "no",
    texto:
      "Parace que Sara anda cerca <br /> No se ha podido guardar tu pregunta <br /> Inténtalo de nuevo más tarde",
  },
};

export default function Add() {
  const [hide, setHide] = useState(false);
  const [preview, setPreview] = useState(false);
  const [feedback, setFeedback] = useState(fb.ok);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [imageName, setImageName] = useState("");

  const uploadPhoto = async (event) => {
    event.preventDefault();
    if (event.currentTarget.files && event.currentTarget.files[0]) {
      const avatarFile = event.currentTarget.files[0];

      const imageName = avatarFile.name;
      const { data, error } = await supabase.storage
        .from("images")
        .upload(imageName, avatarFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) console.log(error);
      else {
        console.log(data);
        setImageName(imageName);
        console.log(imageName);
        console.log(`Se ha guardado la imagen ${imageName} correctamente`);
      }
    }
  };

  const saveQuestion = async (evt) => {
    evt.preventDefault();
    const { pregunta, correcta, incorrecta1, incorrecta2 } =
      evt.target.elements;
    const newQuestion = {
      id: +Date.now(),
      pregunta: pregunta.value,
      respuestas: {
        respuestas: [
          { text: correcta.value, isCorrect: true },
          { text: incorrecta1.value, isCorrect: false },
          { text: incorrecta2.value, isCorrect: false },
        ],
      },
      image: imageName,
    };
    console.log(newQuestion);
    setCurrentQuestion(newQuestion);
    setPreview(!preview);
  };

  const confirm = async (evt) => {
    const { error } = await supabase
      .from("preguntas_posibles")
      .insert([currentQuestion]);

    if (error) {
      setFeedback(fb.ko);
    }
    setHide(true);
    setPreview(false);
  };

  return (
    <>
      <AppLayout>
        {hide ? <Feedback {...feedback} /> : null}
        {preview && (
          <>
            <Pregunta
              pregunta={currentQuestion.pregunta}
              image={imageName}
              respuestas={currentQuestion.respuestas}
              handle={() => {
                console.log("preview");
              }}
            />
            <button type="button" onClick={confirm}>
              Guardar
            </button>
          </>
        )}
        {!preview & !hide && (
          <>
            <h1>Añade una pregunta</h1>
            <form onSubmit={saveQuestion}>
              <input
                type="text"
                name="pregunta"
                placeholder="Pregunta"
                // required
              />
              <input
                className="correcta"
                type="text"
                name="correcta"
                placeholder="Respuesta correcta"
                // required
              />
              <input
                className="incorrecta"
                type="text"
                name="incorrecta1"
                placeholder="Respuesta incorrecta"
                // required
              />
              <input
                className="incorrecta"
                type="text"
                name="incorrecta2"
                placeholder="Respuesta incorrecta"
                // required
              />
              <input
                type="file"
                name="image"
                placeholder="Imagen"
                onChange={uploadPhoto}
              />
              <button type="submit">Ver preview</button>
            </form>
          </>
        )}
      </AppLayout>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
        input {
          font-size: 1.4rem;
          margin: 8px;
          width: 100%;
          height: 60px;
          border-radius: 4px;
          border: 1px solid #ccc;
          padding: 8px;
        }
        button {
          background-color: #276c7f;
          color: white;
          border: 2px solid transparent;
          width: 200px;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          margin: 0.5rem;
        }
        button:hover {
          background-color: white;
          color: #276c7f;
          border: 2px solid #276c7f;
        }

        input.correcta {
          border: 4px solid green;
        }
        input.incorrecta {
          border: 4px solid red;
        }
      `}</style>
    </>
  );
}
