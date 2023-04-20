import React, { useEffect, useState } from "react";
import QButton from "../../atoms/QButton/QButton";
import home_image from "../../assets/home_image.png";
import home_dashboard from "../../assets/home_dashboard.png";
import home_mobile_view from "../../assets/home_mobile_view.png";
import "./homePage.css";
import { setSignupModal } from "../../redux/slices/ModalSlices";
import { useAppDispatch } from "../../redux/store";
const Homepage = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="main_content padding_main_content mb-10  ">
      <div className="web_home_page">
        <div className=" pt-10 xs:whitespace-normal md:whitespace-nowrap xs: break-words md:break-all">
          <div className=" pb-5 font-[700]   xs:text-[32px] md:text-[3rem] text-[#000] leading-[62px]">
            <span className="grad_text ">Cloud-Based</span>
            <br /> integrated platform for <br />
            educational institutes
          </div>
          <div className=" pb-8 text-[#686868] font-semibold text-[24px] ">
            Digitize your Educational Institute with an intuitive and <br />
            modern SaaS integrated platform
          </div>
          <QButton
            label="Get Started"
            onClick={() => dispatch(setSignupModal(true))}
          />
          <div className="pt-10 pb-5 text-[#686868] text-base font-normal ">
            Check out the free Basic plan of the Qqualifi integrated platform*
          </div>
        </div>

        <div className="pt-1 home-img " style={{}}>
          <img
            src={home_dashboard}
            alt=""
            className="big_home_page_img w-[90%] h-[80%] "
            style={{
              maxWidth: "100%",
              boxShadow: "2px 2px 20px 6px rgba(0,0,0,0.1)",
              borderRadius: 15,
              position: "relative",
              right: "-70px",
              top: "20px",
            }}
          />
          <img
            src={home_mobile_view}
            alt=""
            className="small_home_page_img w-[20%] relative bottom-[150px] left-[25px]"
            style={{
              boxShadow: "2px 2px 20px 6px rgba(0,0,0,0.2)",
              borderRadius: 15,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
