import * as S from "./style";
import image1 from "../../assets/image 1.png";
import image2 from "../../assets/image 2.png";
import image3 from "../../assets/image 3.png";
import image4 from "../../assets/image 4.png";
import editButton from "../../assets/editButton.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.MainLayout>
        <S.Title>프로필 선택</S.Title>
        <S.ImgBox>
          <S.Image src={image1} onClick={() => navigate("/main")} />
          <S.Image src={image2} onClick={() => navigate("/main")} />
          <S.Image src={image3} onClick={() => navigate("/main")} />
          <S.Image src={image4} onClick={() => navigate("/main")} />
        </S.ImgBox>
        <S.Button src={editButton} />
      </S.MainLayout>
    </>
  );
};

export default Profile;
