import Salir from "../components/salir";

export default function User({ userName, avatar, signout }) {
  return (
    <>
      <div>
        <img src={avatar} />
        <p className="userName">{`@${userName}`}</p>
        <button onClick={signout}>
          Salir <Salir />
        </button>
      </div>
      <style jsx>{`
        div {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        p.userName {
          font-size: 1.2rem;
          margin-left: 8px;
        }
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-left: 8px;
        }
        button {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background-color: transparent;
          width: 100px;
          border: 1px solid #ccc;
          height: 35px;
          font-size: 1.1rem;
          margin-left: 8px;
          cursor: pointer;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
}
