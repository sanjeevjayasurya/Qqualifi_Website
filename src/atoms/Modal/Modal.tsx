import React from "react";

const Modal = ({ children }: any) => {
  return (
    <div
      className="w-screen h-screen fixed right-0 left-0 top-0 bottom-0 z-[999999999] bg-[rgba(0,0,0,0.7)]"
    >
      <center className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="bg-[#fff] rounded-md w-full max-w-[400px]"
        >
          {children}
        </div>
      </center>
    </div>
  );
};

export default Modal;
