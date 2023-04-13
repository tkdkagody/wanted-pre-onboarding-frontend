import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListWrapper = styled.div`
  padding: 2rem 2rem;
  width: 50rem;
  height: auto;
  min-height: 50rem;
  border-radius: 10px;
  border: 1px solid #90a0b7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.div`
  font-size: 4rem;
`;

export const AddBox = styled.div`
  height: 5rem;
  margin-top: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Add = styled.button`
  width: 8rem;
  height: 4rem;
  margin-left: 2rem;
`;

export const TodoBox = styled.ul`
  margin-top: 4rem;
  width: 100%;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

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
