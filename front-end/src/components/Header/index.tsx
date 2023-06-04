import { StyledHeader } from "./style";
import logo from "../../assets/logo-ico.png";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";
import { CgLogOff } from "react-icons/cg";
import { VscAccount } from "react-icons/vsc";

function Header() {
  const { routes, showAccountModal, setShowAccountModal } =
    useContext(UserContext);

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
              <CgLogOff size={40} style={{ cursor: "pointer" }} title="Sair" />
            </a>
          </li>
          <li>
            <VscAccount
              style={{ cursor: "pointer" }}
              onClick={() => setShowAccountModal(!showAccountModal)}
              size={30}
              title="Minha Conta"
            ></VscAccount>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}

export default Header;
