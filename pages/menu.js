import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AppLayout from "../components/AppLayout";
import User from "../components/user";
import { useAuth } from "../utils/auth";

export default function Menu() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  });
  return (
    <AppLayout>
      {user && (
        <User
          userName={user.user_metadata.user_name}
          avatar={user.user_metadata.avatar_url}
          signout={signOut}
        />
      )}

      <section>
        <Link href={"/trivial"}>
          <a>Jugar</a>
        </Link>
        <Link href={"/add"}>
          <a>Añadir pregunta</a>
        </Link>
        <img src="./images/luimeliaAsturiano.webp" />
        <style jsx>{`
          section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            align-content: center;
          }
          a {
            display: flex;
            align-items: center;
            justify-content: space-around;
            background-color: #276c7f;
            color: white;
            width: 240px;
            height: 50px;
            font-size: 1.2rem;
            border: none;
            border-radius: 5px;
            margin-top: 32px;
            cursor: pointer;
          }
          img {
            margin-top: 2rem;
            border-radius: 10px;
            box-shadow: 5px 5px 15px lightgrey;
          }
        `}</style>
      </section>
    </AppLayout>
  );
}
