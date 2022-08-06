import Image from "next/image";

export default function Feedback({ img, texto }) {
  return (
    <>
      <br />
      <Image
        src={`/gifs/${img}.gif`}
        width={"200px"}
        height={"200px"}
        alt={img}
      />
      <h3 dangerouslySetInnerHTML={{ __html: texto }} />
      <style jsx>{`
        h3 {
          text-align: center;
        }
      `}</style>
    </>
  );
}
