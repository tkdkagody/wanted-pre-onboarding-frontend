import React from "react";
import * as Styles from "./styles";

export const List = ({
  todo,
  idx,
  checkBoxHandler,
  deleteTodoHandler,
  getTodoHandler,
}) => {
  return (
    <>
      {todo && (
        <Styles.List key={todo.id}>
          <Styles.InputWrapper>
            <Styles.Numbering>{idx + 1}.</Styles.Numbering>
            <Styles.CheckBox
              type={"checkbox"}
              checked={todo.isCompleted}
              // onChange={() => check(todo.id)}
              onChange={checkBoxHandler}
              data-testid="new-todo-input"
            />
            <Styles.TodoDiv>{todo.todo}</Styles.TodoDiv>
            {/* <Styles.TodoInput type={"text"} /> */}
          </Styles.InputWrapper>
          <Styles.BtnWrapper>
            <Styles.Edit>수정</Styles.Edit>
            <Styles.Delete onClick={() => deleteTodoHandler(todo.id)}>
              삭제
            </Styles.Delete>
          </Styles.BtnWrapper>
        </Styles.List>
      )}
    </>
  );
};
