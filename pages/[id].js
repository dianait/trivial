import AppLayout from "../components/AppLayout";
import Error from "../components/error";
import Twitter from "../components/twitter";
import useTweet from "../hooks/useTweet";
import { supabase } from "../utils/supabase";

export default function Resultado({ data }) {
  return (
    <>
      <AppLayout>
        {data ? (
          <>
            <h3>
              <img className="userAvatar" src={data.avatar} />
              {data.userName}, has conseguido {data.puntuacion}
            </h3>
            <h1>{data.resultado.titulo}</h1>
            <img src={data.resultado.imagen} width="100%" />
            <p>{data.resultado.texto}</p>
            <a href={useTweet(data)}>
              <Twitter />
              &nbsp;&nbsp; Compartir en twitter
            </a>
          </>
        ) : (
          <Error
            texto="¡Ups! Parece que el asturiano está cerrado y todavía no has jugado ¿A qué estás esperando?"
            boton="Jugar"
          />
        )}
      </AppLayout>
      <style jsx>{`
        button,
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          align-content: center;
          background-color: #2b8cc9;
          color: white;
          width: 260px;
          height: 50px;
          font-size: 1.2rem;
          border: none;
          border-radius: 5px;
          margin-top: 8px;
          cursor: pointer;
        }
        h3 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
        }

        img.userAvatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 8px;
        }
        div {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: -16px;
        }
        h1 {
          margin-top: 0rem;
          font-size: 2rem;
        }
        p {
          font-size: 1.3rem;
          line-height: 1.7rem;
        }
      `}</style>
    </>
  );
}

Resultado.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const name = query.id;
  const raw = await supabase
    .from("ranking")
    .select(`userName,puntuacion, avatar, resultado(imagen, texto, titulo)`)
    .eq("userName", name)
    .single();
  return { data: raw.body };
};
