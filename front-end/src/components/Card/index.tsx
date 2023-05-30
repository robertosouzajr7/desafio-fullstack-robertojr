import { StyledCardContact, StyledUl } from "./style";
import { useContext } from "react";
import { ContactContext } from "../../contexts/contactContext";
import { FormUpdateContact } from "../Form/UpdateContact";
import { MdEmail } from "react-icons/md";

export function CardContact() {
  const { listContact, setShowModal, showModal, DeleteContact } =
    useContext(ContactContext);

  const GetId = (id: string) => {
    localStorage.setItem("idContact", id);
    setShowModal(true);
    <FormUpdateContact id={localStorage.getItem("idContact")} />;
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
                <p>
                  <MdEmail />
                  {data.email}
                </p>
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
