import React from "react";
import Footer from "./atoms/Footer/Footer";
import Header from "./atoms/Header/Header";
import Homepage from "./components/homepage/Homepage";
import "./index.css";
// import Main from "./main";
import Main from "./Main";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
