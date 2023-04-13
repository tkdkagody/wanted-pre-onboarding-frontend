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
    alert("fail");
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
    alert("fail");
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
