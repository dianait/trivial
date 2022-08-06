export default function button({ respuesta, handle }) {
  return (
    <>
      <button attr={respuesta.isCorrect.toString()} onClick={handle}>
        {respuesta.text}
      </button>
      <style jsx>{`
        button {
          background-color: #276c7f;
          color: white;
          border: 2px solid transparent;
          width: 100%;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          margin: 0.5rem;
        }
        button:hover {
          background-color: white;
          color: #276c7f;
          border: 2px solid #276c7f;
        }
      `}</style>
    </>
  );
}
