import styled from "styled-components";

export const ContainerContact = styled.section`
  margin-top: 30px;
`;
export const StyledContact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    flex: 1;
  }
  @media (max-width: 900px) {
    margin-top: 30px;
  }
`;
export const LeftContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .title {
    text-align: center;
  }
  @media (max-width: 650px) {
    align-items: center;
    text-align: center;
  }
`;
export const RightContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (max-width: 650px) {
    width: 100%;
  }
`;
export const FormGroup = styled.div`
  display: flex;
  font-size: var(--small-text);
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color};
  gap: 10px;
  input,
  textarea {
    font-size: calc(var(--small-text) - 2px);
    padding: 5px 10px;
    width: 50%;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.sideBackground};
    outline: none;
    border: 1px solid ${({ theme }) => theme.line};
    transition: box-shadow 0.3s ease;
  }
  textarea:focus,
  input:focus {
    box-shadow: 1px 0 10px ${({ theme }) => theme.shadowProject};
  }
  textarea {
    height: 100px;
    resize: none;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    input,
    textarea {
      width: 100%;
    }
  }
`;
export const SubmitBtn = styled.div`
  display: flex;
  justify-content: end;
  width: 90%;
  @media (max-width: 650px) {
    width: 100%;
  }
  button {
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.sideBackground};
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 3px;
    font-size: var(--small-text);
    height: 38px;
    overflow-y: hidden;
  }

  svg {
    font-size: var(--normal-text);
  }
  button div {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
    gap: 10px;
  }
  button:hover div {
    transform: translateY(calc(-50% - 5px));
  }
`;

export const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--normal-text);
  color: ${({ theme }) => theme.color};
`;
