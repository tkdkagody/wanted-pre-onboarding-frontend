import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignupWrapper = styled.div`
  padding: 2rem 2rem;
  width: 35rem;
  height: 40rem;
  border-radius: 10px;
  border: 1px solid #90a0b7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainTitle = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;
export const InputBox = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  font-size: 1.3rem;
  margin: 3rem 0 0.5rem 0;
`;

export const MailInput = styled.input`
  width: 100%;
  height: 4rem;
  border: none;
  border-bottom: 1px solid gainsboro;
  font-size: 1.5rem;
  color: #16171c;
`;

export const PassInput = styled.input`
  width: 100%;
  height: 4rem;
  border: none;
  border-bottom: 1px solid gainsboro;
  font-size: 1.5rem;
  color: #16171c;
`;

export const SignupBtn = styled.button`
  width: 100%;
  height: 4rem;
  cursor: pointer;
  border: 1px solid rgb(90, 90, 90);
  background-color: rgb(90, 90, 90);
  padding: 0.2rem 0.7rem;
  border-radius: 5px;
  transition: 0.3s;
  font-size: 0.8rem;
  color: white;
  white-space: nowrap;
  font-size: 1.5rem;
  margin-top: 5rem;
  &:hover {
    border: 1px solid rgb(210, 210, 210);
    background-color: white;
    color: rgb(66, 66, 66);
  }
`;
