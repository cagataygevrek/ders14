import { Link } from "react-router-dom";

function Sayfayok() {
  return (
    <section>
      <h1>404</h1>
      <p>Aradığınız sayfaya ulaşılamadı!</p>
      <Link to='/'>⬅ Ana sayfaya dön</Link>
    </section>
  );
}

export default Sayfayok;
