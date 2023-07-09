import Link from "next/link";

export default function Index() {
  return (
    <>
      <h3>
        ¿Crees saberlo de todo de nuestra pareja preferida?
        <br />
        ¡Demuéstralo!
      </h3>
      <br />
      <Link href="/trivial" >Empezar</Link>
      <img src="./images/luimeliaAsturiano.webp" />
      <style jsx>{`
        img {
          margin-top: 2rem;
          border-radius: 10px;
          box-shadow: 5px 5px 15px lightgrey;
        }
        h3 {
          margin-top: 2.5rem;
          text-align: center;
          margin-bottom: -1rem;
        }
      `}</style>
    </>
  );
}
