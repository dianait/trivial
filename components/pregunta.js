import Button from "../components/button";

export default function Pregunta({ pregunta, respuestas, image, handle }) {
  return (
    <>
      <h2>{pregunta}</h2>
      <img src={`/images/luimelia.jpeg`} width="100%" />
      {respuestas.respuestas.map((respuesta, idx) => {
        return <Button key={idx} respuesta={respuesta} handle={handle} />;
      })}
      <style jsx>{`
        h2 {
          margin-top: -1.5rem;
        }
      `}</style>
    </>
  );
}
