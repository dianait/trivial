export default function Counter({ correctCount, failsCount, finish }) {
  return (
    <>
      <p className="counter">{`🌙 ${correctCount}  🧥 ${failsCount} `}</p>
      <style jsx>{`
        p.counter {
          width: 100%;
          text-align: center;
          font-size: 2.8rem;
          font-weight: bold;
          cursor: help;
          with: 100%;
          margin-top: 0.1rem;
          padding-right: 1.8rem;
        }
      `}</style>
    </>
  );
}
