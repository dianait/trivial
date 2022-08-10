import Link from "next/link";
import Twitter from "./twitter";

export default function Index({ handle }) {
  return (
    <>
      <img src="./images/luimeliaAsturiano.webp" />
      <h3>¿Crees saberlo de todo de nuestra pareja preferida? ¡Demuéstralo!</h3>
      <button onClick={handle}>
        <Twitter />
        Login con Twitter
      </button>
      <section>
        <h3>
          👋 ¿Se te ocurre alguna pregunta? <br />
          Compartir es vivir
        </h3>
        <Link href="/add">
          <a>Añadir pregunta</a>
        </Link>
        <br />
        <br />
      </section>
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
          margin-top: 32px;
          cursor: pointer;
        }
        img {
          margin-top: 4rem;
        }
        h3 {
          text-align: center;
          margin-bottom: -1rem;
        }
        section {
          width: 100%;
          color: white;
          position: fixed;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #276c7f;
          animation-duration: 3s;
          animation-name: slidein;
        }
        a {
          display: flex;
          align-items: center;
          color: black;
          justify-content: space-around;
          background-color: white;
          width: 240px;
          height: 50px;
          font-size: 1.3rem;
          border-radius: 5px;
          margin-top: 32px;
          cursor: pointer;
        }

        @keyframes slidein {
          from {
            margin-bottom: -200px;
            width: 300%;
          }

          to {
            margin-bottom: 0%;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}