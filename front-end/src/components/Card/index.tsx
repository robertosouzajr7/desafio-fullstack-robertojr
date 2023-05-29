import { StyledCardContact, StyledUl } from "./style";
import { useContext, useEffect } from "react";
import {
  ContactContext,
  iContactResponse,
} from "../../contexts/contactContext";
import { FormRegisterContact } from "../Form/RegisterContact";
import { FormUpdateContact } from "../Form/UpdateContact";
import { UserContext } from "../../contexts/userContext";

export function CardContact() {
  const {
    listContact,
    edit,
    setEdit,
    GetContactsById,
    UpdateContacts,
    setShowModal,
    showModal,
    DeleteContact,
  } = useContext(ContactContext);
  const { GetClientbyToken } = useContext(UserContext);

  const GetId = (id: string) => {
    console.log(id);
    localStorage.setItem("idContact", id);
    setShowModal(true);
  };

  return (
    <>
      {listContact ? (
        <StyledUl>
          {listContact.contact.map((data: any) => (
            <StyledCardContact>
              <li key={data.id}>
                <h3>{data.name}</h3>
                <p>{data.phone}</p>
                <p>{data.email}</p>
                <div className="buttonEdit">
                  <button onClick={() => GetId(data.id)}>editar</button>
                  <button onClick={() => DeleteContact(data.id)}>
                    deletar
                  </button>
                </div>
              </li>
            </StyledCardContact>
          ))}
          {showModal === true ? (
            <FormUpdateContact id={localStorage.getItem("idContact")} />
          ) : null}
        </StyledUl>
      ) : null}
    </>
  );
}
