import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-dark bg-dark px-5 py-4 "
      style={{ width: "100vw" }}
    >
      <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
        Cadastrar Salas
      </Link>
      <Link
        style={{ textDecoration: "none", color: "#fff" }}
        to="/cadastrar-pessoas"
      >
        Cadastrar Pessoas
      </Link>
      <Link style={{ textDecoration: "none", color: "#fff" }} to="/vincular">
        Vincular
      </Link>
      <Link style={{ textDecoration: "none", color: "#fff" }} to="/buscar">
        Buscar
      </Link>
    </nav>
  );
};

export default NavBar;
