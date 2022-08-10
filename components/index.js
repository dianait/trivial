import Login from "../components/login";

export default function Index({ handle }) {
  return (
    <>
      <h3>¿Crees saberlo de todo de nuestra pareja preferida? ¡Demuéstralo!</h3>
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
      `}</style>
    </>
  );
}
