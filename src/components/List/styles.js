import styled from "styled-components";
export const List = styled.li`
  border: 1px solid gainsboro;
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Numbering = styled.div`
  height: 4rem;
  line-height: 4rem;
  font-size: 2rem;
`;

export const CheckBox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border-radius: 100%;
  border: 2px solid gainsboro;
  margin-right: 10px;

  &:checked {
    border: 2px solid #232323;
    &::before {
      content: "";
      display: block;
      width: 65%;
      height: 65%;
      margin: 21% auto;
      border-radius: 50%;
      background-color: #232323;
    }
  }

  &:hover {
    border: 2px solid #232323;
    opacity: 60%;
    &::before {
      content: "";
      display: block;
      width: 65%;
      height: 65%;
      margin: 21% auto;
      border-radius: 50%;
      background-color: #232323;
      opacity: 60%;
    }
  }
`;

export const TodoDiv = styled.div`
  width: 25rem;
  height: 4rem;
  border: 1px solid gainsboro;
  font-size: 1.5rem;
  line-height: 4rem;
  text-indent: 0.5rem;
`;

export const TodoInput = styled.input`
  width: 25rem;
  height: 4rem;
  border: 3px solid gainsboro;
  font-size: 1.5rem;
  line-height: 4rem;
  text-indent: 0.5rem;
`;

export const BtnWrapper = styled.label`
  width: 12rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Edit = styled.button`
  width: 5rem;
  height: 4rem;
`;
export const Delete = styled.button`
  width: 5rem;
  height: 4rem;
`;
