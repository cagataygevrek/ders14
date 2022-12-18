import React from "react";
import Todos from "./Todos";

function App() {
  const [sayac, sayacGuncelle] = React.useState(0);
  const [yapilacaklar, yapilacaklarGuncelle] = React.useState([]);

  const arttir = () => {
    sayacGuncelle((oncekiDeger) => oncekiDeger + 1);
  };

  const isEkle = React.useCallback(() => {
    yapilacaklarGuncelle((oncekiListe) => [
      ...oncekiListe,
      "Yeni yapılacak iş",
    ]);
  }, [yapilacaklar]);

  return (
    <>
      <Todos yapilacaklar={yapilacaklar} isEkle={isEkle} />

      <hr />

      <div>
        Sayaç: {sayac}
        <button onClick={arttir}>+</button>
      </div>
    </>
  );
}

export default App;
