import React, { useEffect, useState } from "react";
import { requestSignup } from "../../apis/auth";
import * as Styles from "./styles";
import { useRouter } from "../../utils/useRouter";
import { getAccessTokenFromLocalStorage } from "../../utils/accessTokenHandler";

export const Signup = () => {
  const { routeTo } = useRouter();

  //data
  const [errormessage, setErrormessage] = useState("");
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const checkValidity = () => {
    if (userInfo.email.length === 0) {
      setIsEmailValid(false);
      setErrormessage("");
    } else if (userInfo.email.includes("@")) {
      setIsEmailValid(true);
      setErrormessage("");
    } else {
      setIsEmailValid(false);
      setErrormessage("email형태 맞추시오");
    }

    if (userInfo.password && userInfo.password.length > 7) {
      setIsPasswordValid(true);
      setErrormessage("");
    } else {
      setIsPasswordValid(false);
      setErrormessage("password 8자이상");
    }
  };

  useEffect(() => {
    checkValidity();
  }, [userInfo]);

  const signupSubmitHandler = async (e) => {
    e.preventDefault();
    if (isEmailValid === true && isPasswordValid === true) {
      const signupResult = await requestSignup(userInfo);

      console.log(signupResult, "sdfdslfkjlkj");

      if (signupResult === "success") {
        routeTo("/signin");
      } else if (signupResult === "fail bad request") {
        //가입된 이메일을 사용할 경우 400을 받아서 이렇게 표시함.
        setErrormessage("이미 가입된 유저입니다.");
      } else {
        setErrormessage("유저 정보를 다시 한번 확인해주세요.");
      }
    }
  };

  useEffect(() => {
    const access_token = getAccessTokenFromLocalStorage();
    if (access_token) routeTo("/todo");
  }, []);

  return (
    <Styles.Container>
      <Styles.SignupWrapper>
        <Styles.MainTitle>SIGN UP</Styles.MainTitle>
        <Styles.InputBox>
          <Styles.Title>Email</Styles.Title>
          <Styles.MailInput
            data-testid="email-input"
            placeholder={"이메일을 입력하세요"}
            name="email"
            onChange={handleInput}
          />
        </Styles.InputBox>
        <Styles.InputBox>
          <Styles.Title>Password</Styles.Title>
          <Styles.PassInput
            data-testid="password-input"
            placeholder={"비밀번호를 입력하세요"}
            name="password"
            onChange={handleInput}
          />
        </Styles.InputBox>
        {errormessage}
        <Styles.SignupBtn
          data-testid="signup-button"
          // disabled={isEmailValid && isPasswordValid}
          onClick={signupSubmitHandler}
        >
          Sign Up
        </Styles.SignupBtn>
      </Styles.SignupWrapper>
    </Styles.Container>
  );
};
