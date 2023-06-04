import styled from "styled-components";

export const StyledCardContact = styled.div`
  text-align: left;
  justify-content: center;
  justify-items: center;
  align-items: center;
  display: flex;
  color: black;
  gap: 10px;
  border-radius: 10px;
  //box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
  padding: 10px;
  height: 50px;
  border: 1px solid black;

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const StyledUl = styled.ul`
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
  }

  li {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-around;
    justify-items: space-around;
    padding: 10px;
    border-radius: 4px;

    .buttonEdit {
      margin: 5px;
      justify-content: center;
      align-items: center;
      justify-items: center;
      display: flex;
      flex-direction: row;
      button {
        background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
        border: none;
        border-radius: 10px;
        font-size: 16px;
        text-align: left;
        color: white;
        padding: 10px;
        margin: 15px;
        :hover {
          background: black;
        }
      }
    }

    @media (max-width: 780px) {
      display: flex;
      flex-direction: column;
      width: auto;
    }

    h3 {
      display: flex;
      align-items: flex-end;
      padding: 5px;
      gap: 5px;
    }
    p {
      display: flex;
      align-items: flex-end;
      padding: 5px;
      gap: 5px;
    }
  }
`;
