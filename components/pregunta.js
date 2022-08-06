import Image from "next/image";
import Button from "../components/button";

export default function Pregunta({ pregunta, respuestas, image, handle }) {
  return (
    <>
      <h2>{pregunta}</h2>
      <Image
        alt={image}
        src={`/images/${image}.jpeg`}
        width="400px"
        height="200px"
      />
      {respuestas.respuestas.map((respuesta, idx) => {
        return <Button key={idx} respuesta={respuesta} handle={handle} />;
      })}
    </>
  );
}
