import Link from 'next/link'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Julio Iglesias</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href='/'>
                <a className="nav-link">Inicio</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href='/contacto'>
                <a className="nav-link">Contacto</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href='/about'>
                <a className="nav-link">About</a>
              </Link>
            </li>

          </ul>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"/>

    </nav>

  );

}

export default Navbar;
