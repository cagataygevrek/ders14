import React from "react";
import C1 from "./C1";

function App() {
  const [yazi, yaziGuncelle] = React.useState("");

  return (
    <div className='App'>
      Merhaba!
      <input
        type='text'
        value={yazi}
        onChange={(olay) => {
          yaziGuncelle(olay.target.value);
        }}
      />
      <C1 />
    </div>
  );
}

export default App;
