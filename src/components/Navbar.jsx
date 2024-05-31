import { Link } from "react-router-dom";


const Navegacion = () =>{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active text-light" aria-current="page" to="/"><span>🏠</span> Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-light" to="/contacto"><span>📱</span> Contacto</Link>
        </li>
      </ul>
      <span className="navbar-text text-light">
        Happy Cake <span>🍰</span>
      </span>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navegacion