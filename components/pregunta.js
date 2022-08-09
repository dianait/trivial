import Button from "../components/button";
import { supabase } from "../utils/supabase";

export default function Pregunta({ pregunta, respuestas, image, handle }) {
  function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  const answerShuffled = shuffle(respuestas.respuestas);

  const { publicURL, error } = supabase.storage
    .from("images")
    .getPublicUrl(`${image}`);

  if (error) {
    console.log(error);
  }
  return (
    <div>
      <h2>{pregunta}</h2>
      <img src={publicURL} width="100%" object-fit="cover" />
      {respuestas != null &&
        answerShuffled.map((respuesta, idx) => {
          return <Button key={idx} respuesta={respuesta} handle={handle} />;
        })}

      <style jsx>{`
        h2 {
          text-align: center;
        }
        div {
          margin-top: -3.5rem;
          border-radius: 4px;
          width: 100%;
          height: 100%;
          padding: 1rem;
        }
        img {
          border: 1px solid transparent;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
