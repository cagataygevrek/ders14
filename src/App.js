import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sablon from "./sayfalar/Sablon";
import Anasayfa from "./sayfalar/Anasayfa";
import Hakkimizda from "./sayfalar/Hakkimizda";
import Iletisim from "./sayfalar/Iletisim";
import Sayfayok from "./sayfalar/Sayfayok";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sablon />}>
          <Route index element={<Anasayfa />} />
          <Route path='blogs' element={<Hakkimizda />} />
          <Route path='contact' element={<Iletisim />} />
          <Route path='*' element={<Sayfayok />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
