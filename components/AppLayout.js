import Head from "next/head";
import { Container } from "../styles/style";
import Image from "next/image";

export default function AppLayout({ children }) {
  return (
    <>
      <Container>
        <Head>
          <title>Trivial Luimelia 🥐</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <h1>TRIVIAL 🥐</h1>
          <Image
            alt={"logo Luimelia"}
            src={`/images/logo.png`}
            width="350px"
            height="63px"
          />
        </header>
        {children}
      </Container>
      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #276c7f;
          color: white;
          width: 120%;
          padding-bottom: 40px;
        }

        h1 {
          font-size: 2.6rem;
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
}
