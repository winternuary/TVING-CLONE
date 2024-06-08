import * as S from "./style";
import LoginBtn from "../../assets/LoginBtn.png";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.StartLayout>
        <S.Text>티빙 오리지널부터</S.Text>
        <S.Text>드라마, 예능, 영화, KBO리그까지!</S.Text>
        <S.Text>무제한으로 스트리밍해 보세요</S.Text>
        <S.LoginBtn src={LoginBtn} onClick={() => navigate("/login")} />
      </S.StartLayout>
    </>
  );
};
export default Start;
