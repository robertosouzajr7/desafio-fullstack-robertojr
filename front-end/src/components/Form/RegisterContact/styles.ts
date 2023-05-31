import styled from "styled-components";

export const StyledFormRegisterContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 600px;
  width: 100%;

  form {
    text-align: left;
    display: flex;
    flex-direction: column;
    min-width: 200px;
    max-width: 600px;
    width: 100%;
    color: black;
    gap: 10px;
    border-radius: 10px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
    margin-top: 20px;
    margin: 10px;
    padding: 25px;
    input {
      border-radius: 10px;
      height: 30px;
      border: none;
      padding-left: 15px;
      ::placeholder {
        padding: 15px;
      }
    }

    button {
      background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
      border: none;
      border-radius: 10px;
      font-size: 16px;
      text-align: center;
      color: white;
      padding: 10px;
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px,
        rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px,
        rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
      :hover {
        background: black;
      }
    }
  }
`;
