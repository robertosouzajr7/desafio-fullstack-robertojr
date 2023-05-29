import { StyledDashboard } from "../styles";
import { CardContact } from "../../../components/Card";
import Header from "../../../components/Header";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/userContext";
import { ContactContext } from "../../../contexts/contactContext";
import { FormUpdateContact } from "../../../components/Form/UpdateContact";
export function MyContactsPage() {
  const { GetClientbyToken } = useContext(UserContext);
  const { GetContactsById, showModal, setShowModal } =
    useContext(ContactContext);

  useEffect(() => {
    GetClientbyToken();
    GetContactsById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const id = localStorage.getItem("idContact");

  return (
    <>
      <Header />
      <StyledDashboard>
        <h2>Meus Contatos</h2>
        <CardContact />
        <button>Cadastrar novo Usuário</button>
        {showModal === true ? <FormUpdateContact /> : null}
      </StyledDashboard>
    </>
  );
}
