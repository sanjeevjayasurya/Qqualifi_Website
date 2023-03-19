import React from "react";
import main_logo from "../../assets/main_logo.png";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import Q_logo from "../../assets/Q_logo.png";
import main_logo_white from "../../assets/main_logo_white.png";

const Footer = () => {
  return (
    <footer className="bg-[#000] text-[#fff] text-xs font-light grid grid-cols-3 px-20 pt-12 pb-10">
      <div className="text-start ">
        <div className=" ">
          <img src={main_logo_white} alt="" className="inline" />
        </div>
        <div className="leading-5 pt-6">
          Bengaluru, Karnataka- 560078 <br />
          reachus@qqualifi.com
        </div>
        <p className="pt-4">
          Made with love in India<span>I</span>
        </p>
      </div>
      <div
        className="pl-[40%] text-start leading-7"
        style={{ fontWeight: 400, fontSize: 12 }}
      >
        <p className="">Privacy Policy</p>
        <p>Terms and Condition</p>
      </div>
      <div className=" pl-[40%] text-start ">
        <p className="pb-3" style={{ fontWeight: 600, fontSize: 14 }}>
          Follow us :
        </p>
        <ul className="">
          {footerSocialMedia.map((i, index: number) => (
            <li
              className="inline-block p-1 mr-1 bg-[#fff] text-[#000] rounded-full"
              key={index}
            >
              {i?.image}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-[10px] relative " style={{ bottom: "-30px" }}>
        Copyright Qqualifi Technologies 2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

const footerSocialMedia = [
  {
    image: <TiSocialFacebook />,
  },
  {
    image: <AiOutlineTwitter />,
  },
  {
    image: <AiFillYoutube />,
  },
  {
    image: <RiInstagramFill />,
  },
  {
    image: <FaLinkedinIn />,
  },
];
