import React from "react";

const Modal = ({ children }: any) => {
  return (
    <div
      className="w-screen h-screen absolute inset-0 z-[999999999]  bg-[rgba(0,0,0,0.7)]"
      style={{ minHeight: "140vh" }}
    >
      <center>
        <div
          className="bg-[#fff] rounded-md w-max"
          style={{ margin: "40px auto" }}
        >
          {children}
        </div>
      </center>
    </div>
  );
};

export default Modal;
