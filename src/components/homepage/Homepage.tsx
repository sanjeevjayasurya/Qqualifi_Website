import React from "react";
import QButton from "../../atoms/QButton/QButton";
import home_image from "../../assets/home_image.png";
import "./homePage.css";
import { setSignupModal } from "../../redux/slices/ModalSlices";
import { useAppDispatch } from "../../redux/store";
const Homepage = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="">
      <div className="px-20 pb-8 pt-10 flex items-center justify-center gap-x-10 w-full h-full bg-[#fff]">
        <div className=" whitespace-nowrap left_content  h-full">
          <div className="">
            <h1
              className="text-[#0D47A1] "
              style={{ lineHeight: "60px", fontWeight: 700, fontSize: 48 }}
            >
              Cloud-based <br />{" "}
              <span className="text-[#454545]">
                integrated platform for <br />
                educational institutes
              </span>
            </h1>
          </div>
          <p
            className="pt-6 text-[#686868] leading-7"
            style={{ fontWeight: 600, fontSize: 18 }}
          >
            Digitize your Educational Institute with an intuitive and <br />{" "}
            modern SaaS integrated platform
          </p>
          <div className="pt-6 pb-12">
            <QButton
              label="Get Started"
              onClick={() => dispatch(setSignupModal(true))}
            />
          </div>
          <p style={{ color: "#686868", fontSize: 12, fontWeight: 400 }}>
            Check out the free Basic plan of the Qqualifi integrated platform*
          </p>
        </div>
        <div className="right_content">
          <div>
            <img src={home_image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
