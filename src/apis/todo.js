import axios from "axios";

export const createTodo = async (newTodo, access_token) => {
  try {
    const createTodoRes = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/todos`,
      { todo: newTodo },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    return createTodoRes && createTodoRes.status === 201
      ? "create success"
      : "create fail";
  } catch (err) {
    console.log(err);
    return "create fail";
  }
};

export const getTodos = async (token) => {
  try {
    const getTodoRes = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/todos`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return getTodoRes && getTodoRes.status === 200
      ? getTodoRes.data
      : "get fail";
  } catch (err) {
    console.log(err);
    return "get fail";
  }
};

export const deleteTodo = async (token, id) => {
  try {
    const deleteTodoRes = await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/todos/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return deleteTodoRes && deleteTodoRes.status === 204
      ? "delete success"
      : "delete fail";
  } catch (err) {
    console.log(err);
    alert("fail");
    return "delete fail";
  }
};

export const updateCheckBoxTodos = async (token, checkedId, checkedTodo) => {
  try {
    const updateCheckBoxTodosRes = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/todos/${checkedId}`,
      {
        todo: checkedTodo.todo,
        isCompleted: !checkedTodo.isCompleted,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return updateCheckBoxTodosRes.status === 200 ? "success" : "fail";
  } catch (err) {
    console.log(err);
    return "update fail";
  }
};

export const updateInputTodos = async (
  token,
  checkedId,
  editedInput,
  checkedTodo
) => {
  console.log(checkedId, editedInput, editedInput, checkedTodo);
  try {
    const updateInputTodos = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/todos/${checkedId}`,
      {
        todo: editedInput,
        isCompleted: checkedTodo.isCompleted,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return updateInputTodos.status === 200 ? "success" : "fail";
  } catch (err) {
    console.log(err);
    return "update fail";
  }
};
