import React from "react";

function Todos({ yapilacaklar, isEkle }) {
  console.log("Todos render oldu..");

  return (
    <>
      <h2>Yapılacak işlerim</h2>

      {yapilacaklar.map((isAdi, index) => {
        return <p key={index}>{isAdi}</p>;
      })}

      <button onClick={isEkle}>İş Ekle</button>
    </>
  );
}

export default React.memo(Todos);
