import React from "react";
import main_logo from "../../assets/main_logo.png";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import Q_logo from "../../assets/Q_logo.png";
import footer_logo from "../../assets/footer_logo.png";
import footer_indian_flag from "../../assets/footer_indian_flag.png";

const Footer = () => {
  return (
    <footer className="bg-[#000] text-[#fff] w-screen">
      <div className="main_content padding_main_content pt-12 pb-7">
        <div className="pb-12 flex xs:flex-col min-[775px]:flex-row justify-between text-[16px] font-[400] ">
          <div className="">
            <img
              src={footer_logo}
              alt="Qualifi"
              width="150px"
              className="pb-7 "
            />
            <p className="text-start pb-5">
              Bengaluru, Karnataka- 560078 <br /> reachus@qqualifi.com <br />{" "}
              (9 AM - 8 PM Everyday)
            </p>
            <div className="flex items-center ">
              <p className="pr-2 ">Made with love in India </p>
              <img
                src={footer_indian_flag}
                alt=""
                width="30px"
                className="rounded-full inline-block align-middle "
              />
            </div>
          </div>
          <div>
            <p className="xs:block min-[775px]:hidden pt-5">
              Privacy Policy | Terms and Condition
            </p>
            <div className="xs:hidden min-[775px]:block ">
              <p className="pb-8">Privacy Policy</p>
              <p>Terms and Condition</p>
            </div>
          </div>
          <div>
            <p className="pb-2  xs:pt-5 min-[775px]:pt-0">Follow us :</p>
            <ol className="mx-auto my-1">
              {footerSocialMedia.map((icon: any, index: number) => (
                <li className="inline-block p-1  mr-3 bg-[#fff] text-[#000] rounded-full cursor-pointer">
                  <a href={icon?.link} target="_blank" rel="noreferrer">
                    {icon.image}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <p className="text-[14px] font-[400]">
          Copyright Qqualifi Technologies 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const footerSocialMedia = [
  {
    image: <TiSocialFacebook style={{ fontSize: 20 }} />,
    link: "https://www.facebook.com/people/Qqualifi/100089354041280/",
    // imageName:facebook
  },
  {
    image: <AiOutlineTwitter />,
    link: "https://twitter.com/qquali5",
  },
  {
    image: <AiFillYoutube />,
    link: "https://www.youtube.com/@qqualifi",
  },
  {
    image: <RiInstagramFill />,
    link: "https://www.instagram.com/qqualifi/",
  },
  {
    image: <FaLinkedinIn />,
    link: "https://www.linkedin.com/company/qqualifi/",
  },
];
