import { Link, Outlet } from "react-router-dom";

function Sablon() {
  return (
    <>
      <header className='container'>
        <nav className='navbar navbar-expand-lg bg-light'>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <div className='navbar-nav'>
              <Link className='nav-link active' to='/'>
                Ana sayfa
              </Link>
              <Link className='nav-link' to='/hakkimizda'>
                Hakkımızda
              </Link>
              <Link className='nav-link' to='/iletisim'>
                İletişim
              </Link>
              <Link className='nav-link' to='/kampanyalar'>
                Kampanyalar
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className='container'>
        <Outlet />
      </main>
    </>
  );
}

export default Sablon;
