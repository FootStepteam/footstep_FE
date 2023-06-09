import Footer from "../components/common/footer/Footer";
import HeaderContainer from "../components/common/header/HeaderContainer";
import PasswordEdit from "../components/profileEdit/passwordEdit/PasswordEdit";
import { useRequireAuth } from "../hooks/useRequireAuth";

const PasswordEditPage = () => {
  useRequireAuth();

  return (
    <>
      <HeaderContainer />
      <PasswordEdit />
      <Footer />
    </>
  );
};

export default PasswordEditPage;
