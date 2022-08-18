import Button from "../components/button";
import { shuffle } from "../utils/utils";
import Image from "next/image";

export default function Pregunta({ pregunta, respuestas, image, handle = () => { console.log("handle")} }) {
  const answerShuffled = shuffle(respuestas.respuestas);
  console.log(pregunta)
  return (
    <div>
      <h2>{pregunta}</h2>
      <Image
        src={`/images/${image}`}
        alt={image}
        width={800}
        height={470}
        style={{ marginLeft: "16px" }}
      />
      {respuestas != null &&
        answerShuffled.map((respuesta, idx) => {
          return <Button key={idx} respuesta={respuesta} handle={handle} />
        })}

      <style jsx>{`
        h2 {
          text-align: center;
          color: black;
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
