import React from "react";
import Modal from "../../atoms/Modal/Modal";
import { GrFormClose } from "react-icons/gr";
import QButton from "../../atoms/QButton/QButton";
import { FcGoogle } from "react-icons/fc";
import "./modal.css";
import { setOtpModal, setSignInModal } from "../../redux/slices/ModalSlices";
import { useAppDispatch } from "../../redux/store";
const SignInModal = () => {
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(setSignInModal(false));
  };
  return (
    <Modal>
      <div className="px-4 pb-8">
        <div className="relative left-48 top-2">
          <GrFormClose
            className="text-2xl cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <h2 className="pb-5 font-[600] text-[18px]">Get Started</h2>
        <div>
          <div className="pb-4">
            <label className="form_label">Your Mobile Number:</label>
            <input
              className="form_input"
              type="text"
              placeholder="Enter mobile number"
            />
          </div>
          <div className="pb-8 px-3">
            <p className="font-medium text-[12px] text-[#454545]">
              By continuing, your agree to our{" "}
              <span className="text-[#12B0FF]">Terms of Service</span> and{" "}
              <span className="text-[#12B0FF]">Privacy Policy</span>.
            </p>
          </div>
          <div className="pb-11">
            <QButton
              label="Send OTP"
              onClick={() => {
                dispatch(setSignInModal(false));
                dispatch(setOtpModal(true));
              }}
              styles={{
                background: "#DDDDDD",
                width: "100%",
                fontSize: 24,
                fontWeight: 700,
              }}
            />
          </div>

          <div className="signin_button_divider pb-5">
            <span className="px-6 text-[#686868] text-[24px] font-[400]">
              Or
            </span>
          </div>
          <div className="">
            <FcGoogle
              className="relative bg-[#fff] rounded-full p-1"
              style={{
                top: 37,
                right: 90,
                fontSize: "28px",
                fontWeight: 700,
              }}
            />

            <QButton
              label={`Continue with Google`}
              styles={{
                background: "#0D47A1",
                width: "100%",
                fontSize: "16px",
                fontWeight: 700,
                padding: "10px",
                paddingLeft: 40,
              }}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SignInModal;
