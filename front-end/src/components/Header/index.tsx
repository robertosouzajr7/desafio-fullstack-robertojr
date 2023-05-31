import { StyledHeader } from "./style";
import logo from "../../assets/logo-ico.png";
import { UserContext, iChildren } from "../../contexts/userContext";
import { useContext, useEffect, useState } from "react";
import { CgLogOff } from "react-icons/cg";

function Header() {
  const { routes, user } = useContext(UserContext);
  const [nome, setNome] = useState("");

  /* useEffect(() => {
    setNome(user.name);
    const nomeUser = nome[0].toUpperCase() + nome.slice(1);
    setNome(nomeUser);
  }, []); */

  const exit = () => {
    localStorage.removeItem("token");
    routes(`/`);
  };
  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="Logo" />
        <h2 onClick={() => routes(`/dashboard`)}>Dashboard</h2>
      </div>
      <nav>
        <ul>
          <p>seja bem vindo!</p>
          <li>
            <a href="#" onClick={exit}>
              <CgLogOff size={30} style={{ cursor: "pointer" }} />
              Sair
            </a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}

export default Header;
