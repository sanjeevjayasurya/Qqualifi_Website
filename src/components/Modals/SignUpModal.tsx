import React, { useState } from "react";
import Modal from "../../atoms/Modal/Modal";
import QButton from "../../atoms/QButton/QButton";
import {
  setCreateInstitueModal,
  setSignupModal,
} from "../../redux/slices/ModalSlices";
import { useAppDispatch } from "../../redux/store";
import "./modal.css";
import { GrFormClose } from "react-icons/gr";

const SignUpModal = () => {
  const dispatch = useAppDispatch();

  const [roleValue, setRoleValue] = useState<any>("");
  const [mobileNumber, setMobileNumber] = useState<any>();
  const handleSelectedRole = (selectedRole: any) => {
    setRoleValue(selectedRole);
  };

  const closeModal = () => {
    dispatch(setSignupModal(false));
  };
  return (
    <Modal>
      <div className="px-4 pb-8">
        <div className="relative left-52 top-4">
          <GrFormClose
            className="text-2xl cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <h2 className="pb-5 font-[600] text-[18px]">Please add your details</h2>
        <div className="flex flex-col gap-y-5">
          <div>
            <label className="form_label">Your name</label>
            <input placeholder="Enter your name" className="form_input" />
          </div>
          <div>
            <label className="form_label">
              Name of your education institute:
            </label>
            <input
              placeholder="Enter your institute name"
              className="form_input"
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="mr-3">
              <label className="form_label">Your mobile number:</label>
              <input
                type="tel"
                placeholder="Mobile number"
                // value={`+91 ${mobileNumber}`}
                className="form_input"
              />
            </div>
            <div>
              <label className="form_label">City:</label>
              <input placeholder="Select city" className="form_input" />
            </div>
          </div>
          <div>
            <label className="form_label">Designation:</label>
            <select
              className="form_input pr-20"
              placeholder="Select role"
              value={roleValue}
            >
              {roles.map((item: any, index: number) => (
                <option
                  key={index}
                  onClick={() => {
                    handleSelectedRole(item.role);
                  }}
                >
                  {item.role}
                </option>
              ))}
            </select>
          </div>
          <div>
            <QButton
              label="Submit"
              onClick={() => {
                closeModal();
                dispatch(setCreateInstitueModal(true));
              }}
              styles={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SignUpModal;

const roles = [
  {
    role: "Teacher",
  },
  {
    role: "Student",
  },
  {
    role: "School Admin",
  },
  {
    role: "principal",
  },
  {
    role: "School Owner",
  },
];
