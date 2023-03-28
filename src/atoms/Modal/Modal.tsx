import React from "react";
import { GrFormClose } from "react-icons/gr";

const Modal = ({ children }: any) => {
  return (
    <div className="w-screen h-screen absolute inset-0 z-[999999999]  bg-[rgba(0,0,0,0.7)]">
      <center>
        <div
          className="bg-[#fff] rounded-md w-max"
          style={{ margin: "40px auto" }}
        >
          <div className="relative left-52 top-4">
            <GrFormClose className="text-2xl" />
          </div>
          {children}
        </div>
      </center>
    </div>
  );
};

export default Modal;
