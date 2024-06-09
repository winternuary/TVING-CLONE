import * as S from "./style";
import Logo from "../assets/Logo.svg";
import Member from "../assets/button1.png";
import Login from "../assets/button2.png";

const Header = () => {
  return (
    <S.HeaderLayout>
      <S.Logo src={Logo} />
      <S.ButtonBox>
        <S.Member src={Member} />
        <S.Login src={Login} />
      </S.ButtonBox>
    </S.HeaderLayout>
  );
};

export default Header;
