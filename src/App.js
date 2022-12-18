import React from "react";

function App() {
  let eleman1 = React.useRef(); //eleman1.current =

  function yaziGuncelle() {
    eleman1.current.textContent = "İkinci yazı";
  }

  return (
    <div className='App'>
      <p ref={eleman1}>İlk yazı</p>

      <button onClick={yaziGuncelle}>Güncelle</button>
    </div>
  );
}

export default App;
