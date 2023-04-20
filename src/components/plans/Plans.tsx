import QButton from "../../atoms/QButton/QButton";
import coming_soon_img from "../../assets/coming_soon.png";
import { BiCheckCircle } from "react-icons/bi";
import { setSignupModal } from "../../redux/slices/ModalSlices";
import { useAppDispatch } from "../../redux/store";

const Plans = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className=" main_content padding_main_content pt-16 pb-10 text-center">
        <h1 className="grad_text font-[700] xs:text-[32px] sm:text-[56px] xs:pb-4 sm:pb-0">
          Simple Plans. Simple Prices
        </h1>
        <p className="font-[600] xs:text-[18px] sm:text-[24px] text-[#686868] ">
          A flexible pricing structure that fits your needs - Get in touch to
          discuss pricing
        </p>
      </div>
      <div className="bg-[#F9FDFF]">
        <div className="main_content padding_main_content pb-16">
          <div className="pb-8 pt-16 flex items-stretch gap-x-36 gap-y-8 flex-wrap ">
            {planDetails.map((i: any, index: number) => (
              <div
                key={index}
                className={` rounded-md border w-[290px] ${
                  index % 2 != 0
                    ? "bg-[#0D47A1] text-[#fff]"
                    : "bg-[#fff] text-[#202020]"
                }`}
              >
                {!i?.comingSoon ? (
                  <div className=" h-full px-5 py-6 flex justify-between flex-col ">
                    <div className="">
                      <div
                        className={`pb-4 flex items-center justify-between  font-[600] `}
                      >
                        <p className="xs:text-[20px] sm:text-[24px]">
                          {i?.planTitle}
                        </p>
                        <p
                          className={`xs:text-[28px] sm:text-[32px] ${
                            i?.details ? "text-[#A8E0FC]" : "text-[#202020]"
                          }`}
                        >
                          {i?.paid ? "PAID" : "FREE"}
                        </p>
                      </div>
                      <div className="pr-10">
                        {i.details.map((details: any, inde: number) => (
                          <div className="pb-4 flex items-start justify-start">
                            <span className="pt-1 pr-1">
                              <BiCheckCircle />
                            </span>
                            <p className="leading-[22px] xs:text-[16px] sm:text-[18px]">
                              {details}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="">
                      <QButton
                        label="Explore now"
                        className="xs:text-[16px] sm:text-[24px]"
                        styles={{ width: "100%" }}
                        onClick={() => dispatch(setSignupModal(true))}
                      />
                    </div>{" "}
                  </div>
                ) : (
                  <div className="flex justify-between flex-col">
                    <div className="px-5 py-6 pt-10 text-center">
                      <p className="xs:text-[32px] sm:text-[48px] font-[700]">
                        {i?.planTitle}
                      </p>
                      <p className="pb-5 text-[#12B0FF] xs:text-[24px] sm:text-[32px] font-[700]">
                        {i?.paid && "PAID"}
                      </p>
                      <p className="pb-3 xs:text-[16px] sm:text-[20px] font-[400]">
                        Every thing in the advanced plan
                      </p>
                      <p className="text-[24px] font-[600]">Coming Soon</p>
                    </div>
                    <img
                      src={coming_soon_img}
                      alt=""
                      width={"100%"}
                      className="pt-44"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-[#686868] text-center font-[400] xs:text-[14px] sm:text-[20px] ">
            In case you have any questions or need any assistance, the team at
            Qqualifi will be happy to assist. You can get in touch with us
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
    paid: false,
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
    paid: true,
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
    paid: true,
    details: [],
  },
  // Premium: [false],
];

const planCost: any = {
  Basic: false,
  Advanced: true,
  Premium: true,
};
