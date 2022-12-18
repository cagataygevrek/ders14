import React from "react";

function App() {
  const [yazi, yaziGuncelle] = React.useState("");
  const sayac = React.useRef(0); // sayac.current = 0

  function sayacGuncelle() {
    sayac.current = sayac.current + 5;
    console.log(sayac.current);
  }

  return (
    <>
      <input
        type='text'
        value={yazi}
        onChange={(e) => yaziGuncelle(e.target.value)}
      />

      <button onClick={sayacGuncelle}>Güncelle</button>
    </>
  );
}

export default App;
