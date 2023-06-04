import { StyledFormRegisterContact } from "./styles";
import { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { UserContext } from "../../../contexts/userContext";

export const DeleteClient = () => {
  const { DeleteClientbyId, user, showModalDelete, setShowModalDelete } =
    useContext(UserContext);

  const handleData = () => {
    DeleteClientbyId(user.id);
  };
  return (
    <>
      {showModalDelete ? (
        <StyledFormRegisterContact>
          <div className="container">
            <AiFillCloseCircle
              className="btnClose"
              size={30}
              onClick={() => setShowModalDelete(!showModalDelete)}
            />
            <p>Tem certeza que deseja apagar sua conta?</p>
            <div className="divButton">
              <button type="button" onClick={handleData}>
                Sim
              </button>
              <button
                type="button"
                onClick={() => setShowModalDelete(!showModalDelete)}
              >
                Não
              </button>
            </div>
          </div>
        </StyledFormRegisterContact>
      ) : null}
    </>
  );
};
