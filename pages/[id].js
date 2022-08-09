import { supabase } from "../utils/supabase";
import AppLayout from "../components/AppLayout";
import Twitter from "../components/twitter";
import useTweet from "../hooks/useTweet";
import Link from "next/link";

export default function Resultado({ user, resultado }) {
  const tweet = useTweet(user);
  const { publicURL, error } = supabase.storage
    .from("images")
    .getPublicUrl(`${resultado.imagen}`);
  if (error) {
    console.log(error);
  }
  return (
    <>
      <AppLayout>
        <h3>
          <img className="userAvatar" src={user.avatar} />
          {user.userName}, has conseguido {user.puntuacion}
        </h3>
        <h1>{resultado.titulo}</h1>
        <img src={publicURL} width="100%" />
        <p>{resultado.texto}</p>
        <a href={tweet}>
          <Twitter />
          &nbsp;&nbsp; Compartir en twitter
        </a>
        <Link href="/">
          <a>Jugar otra vez</a>
        </Link>
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
  const data = await supabase
    .from("ranking")
    .select("*")
    .eq("userName", name)
    .single();

  const resultadoInfo = await supabase
    .from("resultados")
    .select("*")
    .eq("id", data.body.resultado)
    .single();
  return { user: data.body, resultado: resultadoInfo.body };
};
