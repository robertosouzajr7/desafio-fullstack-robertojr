import styled from "styled-components";

export const StyledDashboard = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 15px;
  gap: 5px;
  background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);

  .divModal {
    display: flex;
    position: absolute;
  }

  .divButton {
    display: flex;
    gap: 5px;
    width: max-content;

    .btnAllContacts {
      background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
      border: none;
      display: flex;
      border-radius: 10px;
      font-size: 16px;
      text-align: center;
      justify-content: center;
      justify-items: center;
      width: auto;
      color: white;
      padding: 10px;
      margin-top: 15px;
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px,
        rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px,
        rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
      :hover {
        background: black;
      }
    }
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  align-items: center;
  background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    .btnAllContacts {
      background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
      border: none;
      display: flex;
      border-radius: 10px;
      font-size: 16px;
      text-align: center;
      justify-content: right;
      color: white;
      padding: 10px;
      margin-top: 5rem;
      margin-right: 15rem;
      margin-bottom: 10%;
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px,
        rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px,
        rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
      :hover {
        background: black;
      }
    }
  }
`;
