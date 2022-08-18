import Image from "next/image";
import Link from "next/link";

export default function Feedback({ img, texto }) {
  return (
    <>
      <br />
      <Image
        src={`/gifs/${img}.gif`}
        width={"200px"}
        height={"200px"}
        alt={img}
      />
      <h3 dangerouslySetInnerHTML={{ __html: texto }} />
      <Link href="/">
        <a>Inicio</a>
      </Link>
      <style jsx>{`
        h3 {
          text-align: center;
        }
        a {
          text-align: center;
          display: block;
          background-color: #276c7f;
          color: white;
          border: 2px solid transparent;
          width: 200px;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          margin: 0.5rem;
        }
      `}</style>
    </>
  );
}
