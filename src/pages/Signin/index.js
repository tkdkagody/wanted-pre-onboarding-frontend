import React, { useEffect, useState } from "react";
import { requestSignin } from "../../apis/auth";
import * as Styles from "./styles";
import { useRouter } from "../../utils/useRouter";
import { getAccessTokenFromLocalStorage } from "../../utils/accessTokenHandler";

export const Signin = () => {
  const { routeTo } = useRouter();

  //data
  const [errormessage, setErrormessage] = useState("");
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    e.preventDefault();
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const signupSubmitHandler = async (e) => {
    e.preventDefault();

    const signinResult = await requestSignin(userInfo);
    if (signinResult === "fail") {
      alert("로그인 실패 ! 정보 확인필요");
      return;
    }
    routeTo("/todo");
  };

  useEffect(() => {
    const access_token = getAccessTokenFromLocalStorage();
    if (access_token) routeTo("/todo");
  }, []);

  return (
    <Styles.Container>
      <Styles.SignupWrapper>
        <Styles.MainTitle>SIGN IN</Styles.MainTitle>
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
          data-testid="signin-button"
          // disabled={isEmailValid && isPasswordValid}
          onClick={signupSubmitHandler}
        >
          Sign Up
        </Styles.SignupBtn>
      </Styles.SignupWrapper>
    </Styles.Container>
  );
};
