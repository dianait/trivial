import Login from "./loginButton";

export default function Index({ handle }) {
  return (
    <>
      <h3>
        ¿Crees saberlo de todo de nuestra pareja preferida?
        <br />
        Inicia sesion con twitter y ¡Demuéstralo!{" "}
      </h3>
      <Login handle={handle} />
      <img src="./images/luimeliaAsturiano.webp" />
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
          cursor: pointer;
        }
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
