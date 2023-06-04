import { schemaUpdateClient } from "../../../services/Validation/createUser.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledFormRegisterContact } from "./styles";
import { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../contexts/userContext";
import { iFormRegisterUser } from "../Register";

export const FormUpdateClient = () => {
  const { UpdateClientbyId, user, setShowModalUpdate, showModalUpdate } =
    useContext(UserContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iFormRegisterUser>({ resolver: yupResolver(schemaUpdateClient) });

  const handleData = (data: iFormRegisterUser) => {
    UpdateClientbyId(data, user.id);
  };
  return (
    <>
      {showModalUpdate ? (
        <StyledFormRegisterContact>
          <form onSubmit={handleSubmit(handleData)}>
            <AiFillCloseCircle
              className="btnClose"
              onClick={() => setShowModalUpdate(!showModalUpdate)}
              size={30}
            />
            <input type="text" placeholder={user.name} {...register("name")} />
            {errors.name?.message}
            <input
              type="text"
              placeholder={user.email}
              {...register("email")}
            />
            {errors.email?.message}
            <input
              type="text"
              placeholder={user.phone}
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
