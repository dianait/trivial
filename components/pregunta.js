import Button from "../components/button";
import { supabase } from "../utils/supabase";

export default function Pregunta({ pregunta, respuestas, image, handle }) {
  const { publicURL, error } = supabase.storage
    .from("images")
    .getPublicUrl(`${image}`);

  if (error) {
    console.log(error);
  }
  return (
    <div>
      <h2>{pregunta}</h2>
      <img src={publicURL} width="100%" />
      {respuestas != null &&
        respuestas.respuestas.map((respuesta, idx) => {
          return <Button key={idx} respuesta={respuesta} handle={handle} />;
        })}

      <style jsx>{`
        h2 {
          text-align: center;
        }
        div {
          border-radius: 4px;
          width: 100%;
          height: 100%;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
}
