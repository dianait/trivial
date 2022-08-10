import Twitter from "./twitter";

export default function Login({ handle }) {
  return (
    <button onClick={handle}>
      <Twitter />
      Login con Twitter
    </button>
  );
}
