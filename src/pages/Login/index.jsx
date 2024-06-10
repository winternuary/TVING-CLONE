import * as S from "./style";
import { useState } from "react";
import Loginin from "../../assets/Loginin.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();
  return (
    <>
      <S.LoginLayout>
        <S.Text>TVING ID 로그인</S.Text>
        <S.InputBox>
          <S.Input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <S.Input
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <S.Loginin src={Loginin} onClick={() => navigate("/profile")} />
        </S.InputBox>
      </S.LoginLayout>
    </>
  );
};
export default Login;
