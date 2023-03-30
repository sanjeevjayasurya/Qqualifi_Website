import React, { useState } from "react";
import Modal from "../../atoms/Modal/Modal";
import { GrFormClose } from "react-icons/gr";
import QButton from "../../atoms/QButton/QButton";
import { setCreateInstitueModal } from "../../redux/slices/ModalSlices";
import { useAppDispatch } from "../../redux/store";

const CreateInstitutionModal = () => {
  const dispatch = useAppDispatch();

  const [selectBoard, setSelectBoard] = useState<any>();

  const closeModal = () => {
    dispatch(setCreateInstitueModal(false));
  };

  return (
    <Modal>
      <div className="relative px-4 pb-8" style={{ width: 450 }}>
        <div className="relative left-[194px] top-4">
          <GrFormClose
            className="text-2xl cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <h2 className="pb-5 font-[600] text-[18px]">Please add your details</h2>
        <div
          className="flex flex-col gap-y-3"
          style={{ maxHeight: 350, overflowY: "scroll" }}
        >
          <div>
            <label className="form_label">Your name</label>
            <input
              className="form_input"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="form_label">Username</label>
            <input
              className="form_input"
              type="text"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="form_label">
              Name of your education institute
            </label>
            <input
              className="form_input"
              type="text"
              placeholder="Enter your institute name"
            />
          </div>
          <div className="flex items-center gap-x-4">
            <div className="w-2/4">
              <label className="form_label">Board</label>
              <select
                className="form_input"
                placeholder="Select board"
                value={selectBoard}
              >
                {board.map((item: any, index: number) => (
                  <option
                    key={index}
                    onClick={() => setSelectBoard(item?.name)}
                  >
                    {item?.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="form_label">Pincode</label>
              <input
                className="form_input"
                type="text"
                placeholder="Enter pincode"
              />
            </div>
          </div>
          <div>
            <label className="form_label">Academic year</label>
            <div className="flex items-center gap-x-4">
              <div className="w-2/4">
                <label className="form_label">Start date</label>
                <input className="form_input" type="date" />
              </div>
              <div className="w-2/4">
                <label className="form_label">End Date</label>
                <input className="form_input" type="date" />
              </div>
            </div>
          </div>
          <div>
            <label className="form_label">Email id</label>
            <input
              type="email"
              className="form_input"
              placeholder="Enter email id"
            />
          </div>
        </div>
        <div
          className="py-2 absolute -bottom-10 right-0 left-0 zIndex-40 bg-[#fff]"
          style={{ boxShadow: "0px -2px 6px 0px rgba(0,0,0,0.3)" }}
        >
          <QButton label={"Create an institute"} onClick={closeModal} />
        </div>
      </div>
    </Modal>
  );
};

export default CreateInstitutionModal;

const board = [
  {
    name: "SSC",
  },
  {
    name: "CBSE",
  },
  {
    name: "ICSE",
  },
];
