import { useState } from "react";
export default function Banner() {
  const [hide, setHide] = useState(true);
  return (
    <>
      {hide && (
        <section>
          <span
            onClick={() => {
              setHide(false);
            }}
          >
            ❌
          </span>
          <h3>
            👋 ¿Se te ocurre alguna pregunta? <br />
            Compartir es vivir
          </h3>
          <a href="/add">Añadir pregunta</a>
          <br />
          <br />
          <style jsx>{`
            span {
              position: absolute;
              top: 3px;
              right: 16px;
              font-size: 1.3rem;
              padding-top: 16px;
              cursor: pointer;
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
        </section>
      )}
    </>
  );
}
