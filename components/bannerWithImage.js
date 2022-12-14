export default function BannerWithImage({ children, handle, preview }) {
  return (
    <>
      {preview && (
        <section>
          <span
            onClick={() => {
              handle();
            }}
          >
            ❌
          </span>
          {children}
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
              z-index: 1000;
            }
            section {
              left: 0;
              color: white;
              max-width: 100%;
              position: fixed;
              bottom: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              animation-duration: 3s;
              animation-name: slidein;
              border: 1px solid #ccc;
              padding-top: 64px;
              border-radius: 5px;
            }
            @keyframes slidein {
              from {
                margin-bottom: -400px;
              }

              to {
                margin-bottom: 0%;
              }
            }
          `}</style>
        </section>
      )}
    </>
  );
}
