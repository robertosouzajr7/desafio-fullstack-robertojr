import { StyledCardContact, StyledUl } from "./style";
import { useContext } from "react";
import {
  ContactContext,
  iContactResponse,
} from "../../contexts/contactContext";
import { FormUpdateContact } from "../Form/UpdateContact";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineWhatsApp } from "react-icons/ai";

export function CardContact() {
  const { listContact, setShowModal, DeleteContact } =
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
          {listContact.contact.map((data: iContactResponse) => (
            <StyledCardContact>
              <li key={data.id}>
                <h3>
                  <RxAvatar />
                  {data.name[0].toUpperCase() + data.name.slice(1)}
                </h3>
                <p>
                  <MdLocalPhone />
                  {data.phone}
                  <AiOutlineWhatsApp />
                </p>
                <p>
                  <MdEmail />
                  {data.email}
                </p>
                <div className="buttonEdit">
                  <button type="button" onClick={() => GetId(data.id)}>
                    editar
                  </button>
                  <button type="button" onClick={() => DeleteContact(data.id)}>
                    deletar
                  </button>
                </div>
              </li>
            </StyledCardContact>
          ))}
        </StyledUl>
      ) : null}
    </>
  );
}
