import React, { useState } from "react";
import main_logo from "../../assets/main_logo.png";
import QButton from "../QButton/QButton";
import { GrMenu } from "react-icons/gr";
import "./Header.css";
import { PathNames } from "../../routes/PathNames";
import { useNavigate } from "react-router";
import { setSignInModal } from "../../redux/slices/ModalSlices";
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
    <nav
      className="py-4  px-20 flex  items-center sticky top-0 bg-[#fff] "
      style={{ zIndex: 9999 }}
    >
      {/* image */}
      <div className="flex-1/5 ">
        <img
          src={main_logo}
          alt=""
          className="cursor-pointer"
          onClick={() => navigate(PathNames.HOME_PAGE)}
        />
      </div>
      {/* options */}
      <div className=" basis-full float-right ">
        {/* app */}
        <div className="web_nav_options flex items-center justify-end gap-x-52">
          <div>
            <ul className="inline-block">
              {headerOptions.map((i: any, index: number) => (
                <li
                  key={index}
                  className="inline p-4 cursor-pointer"
                  onClick={() => navigate(i?.pathName)}
                >
                  {i?.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex ">
            <div className="pr-5">
              <QButton
                label="Request a Call back"
                // styles={{ marginLeft: "100px" }}
                outlineVariant
              />
            </div>
            <div>
              <QButton
                label="Sign In"
                onClick={() => {
                  dispatch(setSignInModal(true));
                }}
              />
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="mobile_nav ">
          <div
            className="mobile_toggle_icon float-right cursor-pointer"
            onClick={toggleMobileNavOptions}
          >
            <GrMenu />
          </div>
          {showMenuForMobileScreen && (
            <div className="mobile_nav_options w-full bg-[#fff] pb-8 border border-slate-400">
              <div className="">
                <ul>
                  {headerOptions.map((i: any, index: number) => (
                    <li
                      key={index}
                      className={`cursor-pointer ${
                        index % 2 !== 0 && "bg-[#F1FAFF]"
                      }`}
                      onClick={() => navigate(i?.pathName)}
                    >
                      <div className={`py-4 pl-20`}>{i?.name}</div>
                    </li>
                  ))}
                </ul>
                <div className="pl-20 flex">
                  <div className=" pr-10">
                    <QButton label={"Request a Call back"} outlineVariant />
                  </div>
                  <div className="">
                    <QButton
                      label={"Sign In"}
                      onClick={() => {
                        dispatch(setSignInModal(true));
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
