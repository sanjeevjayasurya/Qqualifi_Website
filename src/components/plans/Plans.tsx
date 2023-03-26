import React from "react";
import plan_cart from "../../assets/plan_cart.png";
import QButton from "../../atoms/QButton/QButton";
import PlanDetails from "./PlanDetails";
import coming_soon_img from "../../assets/coming_soon.png";
import { BiCheckCircle } from "react-icons/bi";
import "./plans.css";
const Plans = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <div className="px-20 flex items-center justify-center gap-x-40">
          <div className="pt-10">
            <div className="text-5xl font-bold leading-tight color-[#202020] text-start ">
              Simple Plans.
              <br /> Simple Prices
            </div>
            <div className="mt-10 text-[#686868] font-medium">
              A flexible pricing structure that fits your needs - Get <br /> in
              touch to discuss pricing
            </div>
          </div>
          <div className="">
            <img src={plan_cart} alt="" width={"80%"} height={"70%"} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center plans pt-20 px-20 bg-[#F9FDFF] ">
          <div className="flex gap-x-10">
            {planDetails.map((i: any, index: number) => (
              <div
                className={`pt-5 pb-10 relative rounded-md basis-80 border border-slate-300 ${
                  index % 2 !== 0
                    ? "bg-[#0D47A1] text-[#fff]"
                    : "bg-[#fff] text-[#202020]"
                }`}
                key={index}
              >
                {!i.comingSoon ? (
                  <div className="px-4">
                    <div className=" plan_card_heading flex justify-between">
                      <div>{i.planTitle}</div>
                      <div
                        className={`${
                          i?.purchase ? "text-[#A8E0FC]" : "text-[#000]"
                        }`}
                      >
                        {i?.purchase ? "PAID" : "FREE"}
                      </div>
                    </div>
                    <ul>
                      {i.details.map((item: string, itemIndex: number) => (
                        <li
                          className={`line_detail mb-3 flex items-start `}
                          key={itemIndex}
                        >
                          <BiCheckCircle className="mt-1" />
                          <div className="plan_detail_key_points">{item}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <>
                    <center className="pt-8">
                      <div className="plan_card_heading">
                        <div>Premium</div>
                        <div className="text-[#12B0FF]">PAID</div>
                      </div>

                      <div className="py-3 font-[400] text-[20px]">
                        Every thing in the advanced plan
                      </div>
                      <div className="font-[600] text-[24px]">Coming soon</div>
                    </center>
                    <div>
                      <img
                        src={coming_soon_img}
                        alt=""
                        width={"100%"}
                        height={"100%"}
                        style={{
                          objectFit: "contain",
                          position: "relative",
                          top: "2.5rem",
                        }}
                      />
                    </div>
                  </>
                )}
                <div className="absolute bottom-8  w-full">
                  {!i.comingSoon && (
                    <center>
                      <QButton label="Explore now" styles={{ width: "80%" }} />
                    </center>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="description ">
            In case you have any questions or need any assistance, the team at
            Qqualifi will be happy to assist. You can get in touch with us{" "}
            {/* <br /> */}
            through the website or by email:{" "}
            <span className="text-[#0081C1]">reachus@qqualifi.com</span> and we
            will be more than happy to assist you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
const planDetails: any = [
  {
    planTitle: "Basic",
    comingSoon: false,
    purchase: false,
    details: [
      "Student’s Profile ",
      "Staff and Teachers Profile",
      "Academic Calendar",
      "Events",
      "Time Table",
      "Single Admin Access",
      "Classroom Management",
      "Classroom Attendance",
      "Alumni",
    ],
  },
  {
    planTitle: "Advanced",
    comingSoon: false,
    purchase: true,
    details: [
      "Everything in the basic plan transportation",
      "Exam planner",
      "Home work and assessment",
      "Cafeteria management permission",
      "Custom reports",
      "Admission management",
      "Library",
      "Visitor management",
      "Student health record",
      "Report card",
      "Certificates",
      "Lesson planning",
      "Insightful statistics for management",
      "System logos",
      "Role based access",
      "Payment gateway integration",
      "Android and ios app",
    ],
  },
  {
    planTitle: "Premium",
    comingSoon: true,
    purchase: true,
    details: [],
  },
  // Premium: [false],
];

const planCost: any = {
  Basic: false,
  Advanced: true,
  Premium: true,
};

// {Object.keys(planDetails).map((i: any, index: number) => (
//   <div
//     key={i}
//     className={`flex flex-col basis-80 border border-slate-300 rounded-md ${
//       index % 2 !== 0
//         ? "bg-[#0D47A1] text-[#fff]"
//         : "bg-[none] text-[#000]"
//     }`}
//   >
//     <PlanDetails
//       details={planDetails[i]}
//       planType={i}
//       planCost={planCost[i]}
//       comingSoon={!planDetails[i][0] ? true : false}
//     />
//   </div>
// ))}
