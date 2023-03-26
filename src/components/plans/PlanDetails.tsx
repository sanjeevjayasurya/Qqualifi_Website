import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import QButton from "../../atoms/QButton/QButton";
import coming_soon from "../../assets/coming_soon.png";

interface planDetailsProps {
  planType: string;
  planCost: boolean;
  details: string[];
  comingSoon: boolean;
}
const PlanDetails = (props: planDetailsProps) => {
  const { planType, planCost, details, comingSoon } = props;
  console.log("comingSoon: ", comingSoon, planType);
  return (
    <div className="relative">
      <div className="px-4 py-5 pb-2 font-semibold text-2xl flex items-center justify-between">
        <div className="">{planType}</div>
        <div className={`${!details && "text-[#A8E0FC]"}`}>
          {!planCost ? "FREE" : "PAID"}
        </div>
      </div>
      {!comingSoon &&
        details?.map((i: string | boolean, index: number) => (
          <div className="" key={index}>
            <div className="flex items-baseline">
              <BiCheckCircle className="" />
              <span className="pl-3 text-lg font-light">{i}</span>
            </div>
          </div>
        ))}
      {!comingSoon ? (
        <div className="absolute bottom-0">
          <QButton label="Explore now" />
        </div>
      ) : (
        <div className="">
          <div>Every thing in the advanced plan</div>
          <div>Coming Soon</div>
          {/* <img
            src={coming_soon}
            alt=""
            // width={"70%"}
            height={"100%"}
            className="absolute"
            style={{ top: 71 }}
          /> */}
        </div>
      )}
    </div>
  );
};

export default PlanDetails;
