import React, { useCallback, useEffect, useRef, useState } from "react";
import * as Styles from "./styles";
import { useRouter } from "../../utils/useRouter";
import { getAccessTokenFromLocalStorage } from "../../utils/accessTokenHandler";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateCheckBoxTodos,
  updateInputTodos,
} from "../../apis/todo";
import { List } from "../../components/List";

export const Todo = () => {
  const { routeTo } = useRouter();
  //data
  const access_token = getAccessTokenFromLocalStorage();
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState();
  const newTodoRef = useRef();
  const [isReadyToEdit, setIsReadyToEdit] = useState(false);

  const changeInputHandler = (e) => {
    e.preventDefault();
    setNewTodo(e.target.value);
  };

  const deleteTodoHandler = async (id) => {
    const deleteTodoRes = await deleteTodo(access_token, id);
    if (deleteTodoRes === "delete success");
    getTodoHandler();
  };

  const createTodoHandler = async () => {
    if (newTodo.length > 0) {
      const createTodoRes = await createTodo(newTodo, access_token);
      if (createTodoRes === "create success") setNewTodo("");
    }
    newTodoRef.current.focus();
    setNewTodo("");
    getTodoHandler();
  };

  const getTodoHandler = async () => {
    const getTodoRes = await getTodos(access_token);
    if (getTodoRes !== "fail") {
      setTodoList(getTodoRes);
    }
  };

  const updateInputTodo = async (checkedId) => {
    console.log(checkedId);
    // setIsReadyToEdit(true);
    // const checkedTodo = todoList.filter((todo) => todo.id === checkedId)[0];
    // const updateTodoRes = await updateCheckBoxTodos(
    //   access_token,
    //   checkedId,
    //   checkedTodo
    // );
    // if (updateTodoRes === "success")
    //   setTodoList(
    //     todoList.map((todo) =>
    //       todo.id === checkedId ? { ...todo, isCompleted: true } : todo
    //     )
    //   );
    // getTodoHandler();
  };

  const checkBoxHandler = async (checkedId) => {
    const checkedTodo = todoList.filter((todo) => todo.id === checkedId)[0];
    const updateTodoRes = await updateCheckBoxTodos(
      access_token,
      checkedId,
      checkedTodo
    );

    if (updateTodoRes === "success")
      setTodoList(
        todoList.map((todo) =>
          todo.id === checkedId ? { ...todo, isCompleted: true } : todo
        )
      );

    getTodoHandler();
  };

  useEffect(() => {
    if (!access_token) routeTo("/signin");
    getTodoHandler();
    newTodoRef.current.focus();
  }, []);

  const pressKeyHandler = (e) => {
    if (e.key === "Enter") {
      createTodoHandler();
    }
  };

  return (
    <Styles.Container>
      <Styles.ListWrapper>
        <Styles.Title>TODO</Styles.Title>
        <Styles.AddBox>
          <Styles.InputWrapper>
            <Styles.TodoInput
              ref={newTodoRef}
              type={"text"}
              data-testid="new-todo-input"
              name={"newTodo"}
              value={newTodo}
              autoComplete="off"
              placeholder="새로운 할일을 입력하세요"
              onChange={changeInputHandler}
              onKeyPress={pressKeyHandler}
            />
          </Styles.InputWrapper>
          <Styles.Add
            data-testid="new-todo-add-button"
            onClick={createTodoHandler}
          >
            리스트 추가
          </Styles.Add>
        </Styles.AddBox>

        <Styles.TodoBox>
          {todoList?.map((todo, idx) => {
            return (
              <List
                key={todo.id}
                todo={todo}
                idx={idx}
                updateInputTodo={updateInputTodo}
                checkBoxHandler={checkBoxHandler}
                deleteTodoHandler={deleteTodoHandler}
                getTodoHandler={getTodoHandler}
              />
            );
          })}
        </Styles.TodoBox>
      </Styles.ListWrapper>
    </Styles.Container>
  );
};
