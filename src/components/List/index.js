import React, { useEffect, useRef, useState } from "react";
import { updateInputTodos } from "../../apis/todo";
import { getAccessTokenFromLocalStorage } from "../../utils/accessTokenHandler";
import * as Styles from "./styles";

export const List = ({
  todo,
  idx,
  checkBoxHandler,
  deleteTodoHandler,
  getTodoHandler,
}) => {
  const access_token = getAccessTokenFromLocalStorage();
  const [editedInput, setEditedInput] = useState(todo.todo);
  const [isEdit, setIsEdit] = useState(false);

  const changeTodotHandler = (e) => {
    e.preventDefault();
    setEditedInput(e.target.value);
  };

  const clickDeleteBtn = (id) => {
    deleteTodoHandler(id);
  };

  const clickUpdateBtn = async () => {
    const updateInputTodoRes = await updateInputTodos(
      access_token,
      todo.id,
      editedInput,
      todo
    );
    if (updateInputTodoRes === "success") setIsEdit(false);
    getTodoHandler();
  };

  return (
    <>
      {todo && (
        <Styles.List key={todo.id}>
          <Styles.InputWrapper>
            <Styles.Numbering>{idx + 1}.</Styles.Numbering>
            <Styles.CheckBox
              type={"checkbox"}
              checked={todo.isCompleted}
              onChange={() => checkBoxHandler(todo.id)}
              data-testid="new-todo-input"
            />
            {isEdit ? (
              <Styles.TodoInput
                type={"text"}
                autoComplete="off"
                value={editedInput}
                onChange={changeTodotHandler}
                data-testid="modify-input"
              />
            ) : (
              <Styles.TodoDiv>{editedInput}</Styles.TodoDiv>
            )}
          </Styles.InputWrapper>
          <Styles.BtnWrapper>
            {!isEdit ? (
              <Styles.Edit onClick={() => setIsEdit(true)}>수정</Styles.Edit>
            ) : (
              <Styles.Edit data-testid="submit-button" onClick={clickUpdateBtn}>
                제출
              </Styles.Edit>
            )}

            <Styles.Delete
              data-testid="cancel-button"
              onClick={() => clickDeleteBtn(todo.id)}
            >
              삭제
            </Styles.Delete>
          </Styles.BtnWrapper>
        </Styles.List>
      )}
    </>
  );
};
