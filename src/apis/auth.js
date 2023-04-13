import axios from "axios";
import { saveAccessTokenToLocalStorage } from "../utils/accessTokenHandler";

export const requestSignup = async (userInfo) => {
  try {
    const signupRes = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/signup`,
      userInfo,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    return signupRes && signupRes.status === 201 ? "success" : "fail";
  } catch (err) {
    if (err.response.status === 400) {
      return "fail bad request";
    } else {
      console.log(err);
      return "fail";
    }
  }
};

export const requestSignin = async (userInfo) => {
  try {
    const signinRes = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/signin`,
      userInfo,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    saveAccessTokenToLocalStorage(signinRes.data.access_token);
    return signinRes && signinRes.status === 200 ? "success" : "fail";
  } catch (err) {
    console.log(err);
    return "fail";
  }
};
