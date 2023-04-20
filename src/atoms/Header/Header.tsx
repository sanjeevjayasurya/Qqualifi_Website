import React, { useState } from "react";
import main_logo from "../../assets/main_logo.png";
import QButton from "../QButton/QButton";
import { GrMenu } from "react-icons/gr";
import "./Header.css";
import { PathNames } from "../../routes/PathNames";
import { useNavigate } from "react-router";
import { setSignInModal, setSignupModal } from "../../redux/slices/ModalSlices";
import { useDispatch } from "react-redux";

const headerOptions = [
  {
    name: "Products",
    pathName: PathNames.PRODUCTS,
  },
  {
    name: "Plans",
    pathName: PathNames.PLANS,
  },
  {
    name: "About us",
    pathName: PathNames.ABOUT,
  },
];
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showMenuForMobileScreen, setShowMenuForMobileScreen] =
    useState<boolean>(false);

  const toggleMobileNavOptions = () => {
    setShowMenuForMobileScreen(!showMenuForMobileScreen);
  };

  return (
    <div
      className="min-w-screen py-5 sticky top-0 bg-[#fff]"
      style={{ zIndex: "1000" }}
    >
      <div className="">
        <div className="main_content padding_main_content flex  items-center justify-between ">
          <div className="" onClick={() => navigate(PathNames.HOME_PAGE)}>
            <img src={main_logo} alt="" width={150} />
          </div>
          <ul className="web_nav_options flex items-center flex-row ">
            {headerOptions.map((i, index: number) => (
              <li
                className="px-4 text-[20px] font-semibold cursor-pointer"
                onClick={() => navigate(i.pathName)}
              >
                {i?.name}
              </li>
            ))}
          </ul>
          <div className="web_nav_options">
            <QButton
              label="Request a Call Back"
              outlineVariant
              styles={{ marginRight: 10 }}
              onClick={() => dispatch(setSignupModal(true))}
            />
            <QButton
              label="Sign In"
              onClick={() => dispatch(setSignInModal(true))}
            />
          </div>
          <div className="mobile_nav ">
            <GrMenu className="" onClick={toggleMobileNavOptions} />
          </div>
        </div>
        <div className="mobile_nav w-screen">
          {showMenuForMobileScreen && (
            <>
              <ul className="">
                {headerOptions.map((i: any, index: number) => (
                  <li
                    className={`mobile_options !px-0 py-4 ${
                      index % 2 !== 0 ? "bg-[#F1FAFF]" : "bg-[#fff]"
                    }`}
                    onClick={() => navigate(i.pathName)}
                  >
                    <span className="main_content padding_main_content text-xl font-semibold cursor-pointer px-5">
                      {i?.name}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="main_content padding_main_content px-5  flex  flex-wrap items-center flex-wrap">
                <QButton
                  label="Request a Call Back"
                  outlineVariant
                  styles={{ marginRight: 10, marginBottom: 3 }}
                  onClick={() => dispatch(setSignupModal(true))}
                />
                <QButton
                  label="Sign In"
                  onClick={() => dispatch(setSignupModal(true))}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
