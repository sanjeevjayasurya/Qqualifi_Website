import React from "react";
import Footer from "./atoms/Footer/Footer";
import Header from "./atoms/Header/Header";
import Homepage from "./components/homepage/Homepage";
import SignUpModal from "./components/Modals/SignUpModal";
import "./index.css";
// import Main from "./main";
import Main from "./Main";
import { useAppSelector } from "./redux/store";

function App() {
  const SignUp = useAppSelector(({ modal }) => modal.signUpModal);
  console.log("SignUp: ", SignUp);
  return (
    <>
      <Header />
      <Main />
      <Footer />
      {SignUp && <SignUpModal />}
    </>
  );
}

export default App;
