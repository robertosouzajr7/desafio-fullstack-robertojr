import { StyledDashboard, StyledFooter } from "./styles";
import Header from "../../components/Header";
import { FormRegisterContact } from "../../components/Form/RegisterContact";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { FormUpdateContact } from "../../components/Form/UpdateContact";
import { ContactContext } from "../../contexts/contactContext";
import { CardContact } from "../../components/Card";
import { FormUpdateClient } from "../../components/Form/UpdateClient";
import { DeleteClient } from "../../components/Form/DeleteClient";
import Account from "../../components/Account";
function Dashboard() {
  const {
    user,
    GetClientbyToken,
    showAccountModal,
    showModalUpdate,
    showModalDelete,
  } = useContext(UserContext);
  const { GetContactsById, showModal, setShowCard, showCard } =
    useContext(ContactContext);
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    GetClientbyToken();
    GetContactsById();
  }, []);

  return (
    <>
      <Header />
      {user.name ? (
        <StyledDashboard>
          <p>
            {user.name[0].toUpperCase() + user.name.slice(1)}, Para cadastrar um
            novo contato,
            <br /> você deve preencher os campos abaixo
          </p>
          <FormRegisterContact />
          <div className="divButton">
            <button
              onClick={() => GetContactsById()}
              onClickCapture={() => setShowButton(true)}
              className="btnAllContacts"
            >
              Ver todos os Contatos
            </button>
            {showButton ? (
              <button
                className="btnAllContacts"
                onClick={() => setShowCard(false)}
                onClickCapture={() => setTimeout(() => setShowButton(false))}
              >
                Fechar
              </button>
            ) : null}
          </div>
          {showCard === true ? <CardContact /> : null}
        </StyledDashboard>
      ) : null}
      {showModal ? (
        <FormUpdateContact id={localStorage.getItem("idContact")} />
      ) : null}
      {showAccountModal === true ? <Account /> : null}
      {showModalUpdate ? <FormUpdateClient /> : null}
      {showModalDelete ? <DeleteClient /> : null}

      <StyledFooter>
        <div id="app" data-root="/path/to/documentation">
          <p>Desenvolvido por Roberto Jr</p>
        </div>
      </StyledFooter>
    </>
  );
}

export default Dashboard;
