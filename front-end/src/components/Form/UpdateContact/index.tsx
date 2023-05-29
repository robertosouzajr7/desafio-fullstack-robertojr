import { schemaCreateContact } from "../../../services/Validation/createUser.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledFormRegisterContact } from "./styles";
import { useContext, useEffect, useState } from "react";
import {
  ContactContext,
  iContactRequest,
  iContactResponse,
} from "../../../contexts/contactContext";
import { useForm } from "react-hook-form";

export const FormUpdateContact = ({ id }: any) => {
  console.log(id);
  const {
    CreateContact,
    edit,
    showModal,
    contact,
    setContact,
    UpdateContacts,
    listContact,
  } = useContext(ContactContext);

  /* const newContact = listContact.contact.filter((contact: iContactRequest) => {
    return contact.client_id === id;
  });
  console.log(newContact);
 */
  /* const getContact = () => {
    const newContact = listContact.contact.filter(
      (contact: iContactRequest) => {
        return contact.client_id === id;
      }
    );
    console.log(newContact);
  };
  getContact(); */

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iContactRequest>({ resolver: yupResolver(schemaCreateContact) });

  useEffect(() => {
    const getContact = () => {
      const contanct = listContact.contact.filter(
        (item: iContactResponse) => item.id === id
      );
      console.log(contanct);
      setContact(contanct[0]);
    };
    getContact();
  }, [id, listContact]);

  const handleData = (data: any) => {
    console.log(data);
    UpdateContacts(data);
  };
  return (
    <>
      {showModal === true ? (
        <StyledFormRegisterContact>
          <form onSubmit={handleSubmit(handleData)}>
            <input
              type="text"
              placeholder={contact.name}
              {...register("name")}
            />
            {errors.name?.message}
            <input
              type="text"
              placeholder={contact.email}
              {...register("email")}
            />
            {errors.email?.message}
            <input
              type="text"
              placeholder={contact.phone}
              {...register("phone")}
            />
            {errors.phone?.message}
            <button type="submit">Cadastrar</button>
          </form>
        </StyledFormRegisterContact>
      ) : null}
    </>
  );
};
