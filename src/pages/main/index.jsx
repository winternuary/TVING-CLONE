import * as S from "./style";
import MainPage from "../../assets/mainpage.png";

const Main = () => {
  return (
    <>
      <S.MainLayout>
        <S.Photo src={MainPage} />
      </S.MainLayout>
    </>
  );
};
export default Main;
