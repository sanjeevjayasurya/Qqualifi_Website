import React, { useState } from "react";
import Modal from "../../atoms/Modal/Modal";
import { GrFormClose } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import QButton from "../../atoms/QButton/QButton";
import OTPInput from "react-otp-input";
import { useAppDispatch } from "../../redux/store";
import { setOtpModal } from "../../redux/slices/ModalSlices";

const OtpVerifyModal = () => {
  const dispatch = useAppDispatch();

  const [OTP, setOTP] = useState<any>();

  const handleOtpNumber = (digit: any) => {
    if (Number(digit)) {
      setOTP(digit);
    }
  };

  const handleCloseModal = () => {
    dispatch(setOtpModal(false));
  };
  return (
    <Modal>
      <div className="px-5 pb-8">
        <div className="relative left-56 top-2">
          <GrFormClose
            className="text-2xl cursor-pointer"
            onClick={handleCloseModal}
          />
        </div>
        <h2 className="pb-6 font-[600] text-[20px]">Get Started</h2>
        <div>
          <p className="pb-4 px-4 text-sm font-medium">
            Enter the 6 digit OTP send via SMS on ur phone (+91 9842XXXXXX)
          </p>
          <p className="pb-6 text-md font-semimedium">One time Password</p>
        </div>
        <div className="px-5 pb-5">
          <OTPInput
            onChange={(e) => handleOtpNumber(e)}
            value={OTP}
            containerStyle={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            inputStyle={{
              border: "1px solid #A3A3A3",
              borderRadius: 10,
              width: 50,
              height: 50,
              color: "#000",
            }}
            numInputs={6}
            renderSeparator={<span></span>}
            renderInput={(props: any) => <input {...props} />}
          />
        </div>
        <div className="pb-8">
          <p className="text-lg font-[400] text-[#000]">
            Did not receive?{" "}
            <span className="font-bold text-[#12B0FF]">Resend</span>
          </p>
        </div>
        <div className="pb-10">
          <QButton
            label="Verify"
            styles={{ width: "100%" }}
            onClick={handleCloseModal}
          />
        </div>
        <div className="signin_button_divider pb-5">
          <span className="px-6 text-[#686868] text-[24px] font-[400]">Or</span>
        </div>
        <div>
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
    </Modal>
  );
};

export default OtpVerifyModal;
