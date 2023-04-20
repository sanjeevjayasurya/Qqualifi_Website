import React from "react";

const Modal = ({ children }: any) => {
  return (
    <div
      className="w-screen h-screen absolute right-0 left-0 top-0 bottom-10 z-[999999999]  bg-[rgba(0,0,0,0.7)]"
      style={{ maxHeight: "120vh" }}
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
