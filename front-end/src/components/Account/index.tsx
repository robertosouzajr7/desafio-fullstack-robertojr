import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { StyledContainer } from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
function Account() {
  const {
    user,
    setShowModalUpdate,
    showModalUpdate,
    setShowModalDelete,
    showAccountModal,
    setShowAccountModal,
  } = useContext(UserContext);

  const HandleClick = () => {
    setShowModalUpdate(!showModalUpdate);
  };

  return (
    <StyledContainer>
      <div className="container">
        <AiFillCloseCircle
          className="btnClose"
          size={30}
          onClick={() => setShowAccountModal(!showAccountModal)}
        />
        <h2>Minha Conta</h2>
        <p>Nome: {user.name}</p>
        <p>e-mail: {user.email}</p>
        <p>Telefone: {user.phone}</p>
        <div className="divButtons">
          <button onClick={HandleClick}>Editar Cadastro</button>
          <button onClick={() => setShowModalDelete(true)}>
            Deletar conta
          </button>
        </div>
      </div>
    </StyledContainer>
  );
}

export default Account;
