import React from "react";
import Footer from "./atoms/Footer/Footer";
import Header from "./atoms/Header/Header";
import Homepage from "./components/homepage/Homepage";
import CreateInstitutionModal from "./components/Modals/CreateInstitutionModal";
import OtpVerifyModal from "./components/Modals/OtpVerifyModal";
import SignInModal from "./components/Modals/SignInModal";
import SignUpModal from "./components/Modals/SignUpModal";
import "./index.css";
import Main from "./Main";
import { useAppSelector } from "./redux/store";

function App() {
  const SignUp = useAppSelector(({ modal }) => modal.signUpModal);
  const createInstitute = useAppSelector(
    ({ modal }) => modal.createInstitueModal
  );
  const signIn = useAppSelector(({ modal }) => modal.signInModal);
  const showOtpModal = useAppSelector(({ modal }) => modal.otpModal);

  return (
    <>
      <Header />
      <Main />
      <Footer />
      {SignUp && <SignUpModal />}
      {createInstitute && <CreateInstitutionModal />}
      {signIn && <SignInModal />}
      {showOtpModal && <OtpVerifyModal />}
    </>
  );
}

export default App;
