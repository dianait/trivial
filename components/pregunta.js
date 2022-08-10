import Button from "../components/button";
import { shuffle } from "../utils/utils";

export default function Pregunta({ pregunta, respuestas, image, handle }) {
  const answerShuffled = shuffle(respuestas.respuestas);
  return (
    <div>
      <h2>{pregunta}</h2>
      <img src={image} width="100%" object-fit="cover" />
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
