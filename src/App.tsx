import { useState } from "react";

export function App() {
  const [status, setStatus] = useState("waiting");

  return (
    <>
      <button
        onClick={() => {
          setStatus("loading");

          setTimeout(() => {
            window.open("https://example.com");

            setStatus("complete");
          }, 100);
        }}
      >
        Click me
      </button>

      <p>status: {status}</p>
    </>
  );
}
