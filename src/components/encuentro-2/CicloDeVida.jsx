import { useState, useEffect } from "react";

const CicloDeVida = () => {
  // cuando se crea
  const [text1, setText1] = useState("");

  useEffect(() => {
    // cuando muta
    console.log("hola mundo");

    // cuando se destruye
    return () => console.log("me destruí");
  }, [text1]);

  return (
    <div>
      <input
        type="text"
        value={text1}
        onChange={(event) => {
          setText1(event.target.value);
        }}
      />
    </div>
  );
};
export default CicloDeVida;
