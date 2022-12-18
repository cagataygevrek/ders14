import React from "react";

function App() {
  const [degisken1, degisken1Guncelle] = React.useState(1);
  const [degisken2, degisken2Guncelle] = React.useState(5);
  const [degisken3, degisken3Guncelle] = React.useState(1);

  const ozelDeger = React.useMemo(() => {
    return uzunSurenIslem(degisken2);
  }, [degisken2]);

  function uzunSurenIslem(sayi) {
    let cikti = sayi * sayi;
    let zaman = new Date().getSeconds();
    return cikti + "-" + zaman;
  }

  function besArttir() {
    degisken3Guncelle((oncekiDeger) => oncekiDeger + 5);
  }

  return (
    <div className='App'>
      Merhaba!
      <hr />
      Değişken 3: {degisken3}
      <hr />
      Özel değer: {ozelDeger}
      <hr />
      <button onClick={besArttir}>Değişken 3'ü 5 arttır</button>
    </div>
  );
}

export default App;
