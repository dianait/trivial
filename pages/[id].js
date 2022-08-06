import { supabase } from "../utils/supabase";
import Counter from "../components/counter";
import User from "../components/user";
import AppLayout from "../components/AppLayout";
import Twitter from "../components/twitter";

export default function Resultado({ user }) {
  console.log(user.puntuacion);
  return (
    <>
      <AppLayout>
        <div>
          <img className="userAvatar" src={user.avatar} />
          <h2>¡Enhorabuena {user.userName}! </h2>
        </div>
        <h3>Has conseguido {user.puntuacion}</h3>
        <h1>{`🥐 ${user.personaje} `}</h1>
        <img src="./images/luimelia.jpeg" width="100%" />
        <p>{user.texto}</p>
        <button>
          <Twitter />
          Compartir en twitter
        </button>
        <button>Jugar otra vez</button>
      </AppLayout>
      <style jsx>{`
        button {
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
          margin-top: 8px;
          cursor: pointer;
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
          margin-top: 0.2rem;
        }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "@dianait_" } }, { params: { id: "@lerhus" } }],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  console.log(params.id);
  const { data: user } = await supabase
    .from("ranking")
    .select("*")
    .eq("userName", params.id)
    .single();
  return {
    props: {
      user,
    },
  };
}
