import styled from "styled-components";
export const List = styled.li`
  border: 1px solid gainsboro;
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const InputWrapper = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Numbering = styled.div`
  height: 4rem;
  line-height: 4rem;
  font-size: 2rem;
`;

export const CheckBox = styled.input`
  width: 1.5rem;
  margin-right: 1rem;
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
  border: 1px solid gainsboro;
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
