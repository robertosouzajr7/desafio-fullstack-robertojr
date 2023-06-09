import { schemaCreateContact } from "../../../services/Validation/createUser.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledFormRegisterContact } from "./styles";
import { useContext } from "react";
import {
  ContactContext,
  iContactRequest,
} from "../../../contexts/contactContext";
import { useForm } from "react-hook-form";

export const FormRegisterContact = () => {
  const { CreateContact } = useContext(ContactContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iContactRequest>({ resolver: yupResolver(schemaCreateContact) });

  return (
    <StyledFormRegisterContact>
      <form onSubmit={handleSubmit(CreateContact)}>
        <input type="text" placeholder="Insira o nome" {...register("name")} />
        {errors.name?.message}
        <input
          type="text"
          placeholder="Insira o email"
          {...register("email")}
        />
        {errors.email?.message}
        <input
          type="text"
          placeholder="Insira o Telefone"
          {...register("phone")}
        />
        {errors.phone?.message}
        <button type="submit">Cadastrar</button>
      </form>
    </StyledFormRegisterContact>
  );
};
