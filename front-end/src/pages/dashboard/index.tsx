import { StyledDashboard, StyledFooter } from "./styles";
import Header from "../../components/Header";
import { FormRegisterContact } from "../../components/Form/RegisterContact";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { FormUpdateContact } from "../../components/Form/UpdateContact";
import {
  ContactContext,
  iListContactResponse,
} from "../../contexts/contactContext";
import { CardContact } from "../../components/Card";
function Dashboard() {
  const { user, GetClientbyToken } = useContext(UserContext);
  const {
    GetContactsById,
    listContact,
    edit,
    showModal,
    UpdateContacts,
    setShowCard,
    setListContact,
    showCard,
  } = useContext(ContactContext);
  const [showButton, setShowButton] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  useEffect(() => {
    GetClientbyToken();
    GetContactsById();

    /*  if (listContact.contact.length > 0) {
      setShowButton2(true);
    }
 */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deletar = () => {
    setListContact(listContact);
  };

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
            {showButton /* || listContact.contact.length > 0 */ ? (
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
      <StyledFooter></StyledFooter>
    </>
  );
}

export default Dashboard;
