import { schemaCreateContact } from "../../../services/Validation/createUser.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledFormRegisterContact } from "./styles";
import { useContext, useEffect } from "react";
import {
  ContactContext,
  iContactRequest,
  iContactResponse,
} from "../../../contexts/contactContext";
import { useForm } from "react-hook-form";

export const FormUpdateContact = ({ id }: any) => {
  const { showModal, contact, setContact, UpdateContacts, listContact } =
    useContext(ContactContext);

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
      setContact(contanct[0]);
    };
    getContact();
  }, [id, listContact]);

  const handleData = (data: any) => {
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
            <button type="submit">Atualizar</button>
          </form>
        </StyledFormRegisterContact>
      ) : null}
    </>
  );
};
