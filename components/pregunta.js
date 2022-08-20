import Button from "../components/button";
import { shuffle } from "../utils/utils";


export default function Pregunta({ pregunta, respuestas, user, image, handle = () => { console.log("handle")} }) {
  const answerShuffled = shuffle(respuestas.respuestas);
  console.log(pregunta)
  return (
    <div>

      <h2>{pregunta}</h2>
      {user && 
      <>
        <a href={`https://twitter.com/${user}`}>{` por @${user} 🙏`}</a>
      </>
      }
      <img  src={`./images/${image}`} width={"95%"} alt={image} style={{marginLeft: ".8rem"}}/>

      {respuestas != null &&
        answerShuffled.map((respuesta, idx) => {
          return <Button key={idx} respuesta={respuesta} handle={handle} />
        })}

      <style jsx>{`
        h2 {
          text-align: center;
          color: black;
        }
        div {
          margin-top: -3.5rem;
          border-radius: 4px;
          width: 100%;
          height: 100%;
          padding: 1rem;
        }
        img {
          border: 1px solid transparent;
          border-radius: 4px;
        }

        a {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background-color: orange;
          color: #4B3F3D;
          width: 240px;
          margin: 1rem auto;
          padding: .3rem 0;
          border-radius: 5px;
          font-size: 1.1rem;
          box-shadow: 0px 0px 5px lightblue;
        }
      `}</style>
    </div>
  );
}
