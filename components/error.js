import Link from "next/link";

export default function Error({ texto, boton }) {
  return (
    <>
      <img src="./images/asturiano.png" width="100%" />
      <h2>{texto}</h2>
      <Link href="/">
        <a>{boton}</a>
      </Link>
      <style jsx>{`
        img {
          margin-top: 4rem;
        }
        button,
        a {
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
          margin-top: 1rem;
          cursor: pointer;
        }
        h2 {
          text-align: center;
        }
      `}</style>
    </>
  );
}
