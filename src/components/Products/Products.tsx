import React from "react";
import product_image from "../../assets/product_image.png";

const Products = () => {
  return (
    <div className=" py-5  bg-[#fff]">
      <div className="  ">
        <div className="main_content  padding_main_content flex items-center justify-between lg:flex-row max-[1180px]:flex-col lg:text-start max-[1180px]:text-center md:whitespace-nowrap xs:whitespace-normal">
          <h1
            className="text-[56px] font-[700] leading-[72px]"
            // style={{ whiteSpace: "nowrap" }}
          >
            <span className="grad_text">One platform for </span> <br />
            all your educational <br /> institute needs
          </h1>
          <img
            src={product_image}
            // width="500px"
            className="relative lg:w-[500px] max-[1180px]:w-[400px] top-10"
          />
        </div>
        <div className="min-w-screen bg-[#F8FCFE]">
          <div className="pt-12 py-16 main_content  padding_main_content ">
            <h2 className="pb-5 font-[600]  md:text-[32px] xs:text-[24px]">
              Products
            </h2>
            <section className="md:text-[18px] xs:text-[1rem] font-[400] text-[#686868] flex flex-col gap-y-4">
              <p className="">
                The Qqualifi platform is designed to help educational institutes
                manage all day-to-day activities, including administrative
                tasks, teaching, Classroom, student attendance, student
                information, fees management, Assessment etc. Using the
                platform, institutes can streamline operations and improve
                efficiency.
              </p>
              <p>
                Imagine an all-in-one platform that could manage all the
                day-to-day activities of your educational institution— from
                administrative tasks and teaching to fees management and student
                attendance. Well, imagine no more! The SaaS-based Qqualifi
                platform can do just that.
              </p>
              <p>
                Built with busy educators in mind, this intuitive platform
                streamlines all of your institution's processes, making life
                easier for everyone involved. From the administrator who needs
                to keep track of student information and fees, to the teacher
                who needs to manage classroom activities, to the student who
                wants to check their attendance record, Qqualifi has it all
                covered.
              </p>
              <p>
                Sounds too good to be true, right? But that's exactly what the
                Qqualifi platform can do for you. It's a secure, cloud-based
                platform that helps educational institutes streamline their
                operations and improve their efficiency.
              </p>
              <p>
                What's more, the Qqualifi platform is SaaS-based, which means it
                can be accessed from anywhere in the world. So whether you're in
                the office or on the go, you can always stay in control of your
                institution.
              </p>
              <p>
                The platform is cloud-based and SaaS-based, so it can be
                accessed from anywhere and anytime. It is also modular, so
                institutes can choose the modules that best suit their needs.
                And it is user-friendly, so institutes don't need any special IT
                skills or knowledge to use it.
              </p>
              <p>
                With the Qqualifi platform, institutes can manage their entire
                institution with ease and efficiency.
              </p>
            </section>
          </div>
        </div>
        <div>
          <div className="pt-12 py-16 main_content  padding_main_content ">
            <h2 className="pb-5 font-[600] md:text-[32px] xs:text-[24px]">
              How does the Qqualifi SaaS-based integrated platform help?
            </h2>
            <section className="md:text-[18px] xs:text-[1rem] font-[400] text-[#686868] flex flex-col gap-y-4">
              <p>
                First and foremost, Qqualifi helps institutes save time and
                money. It automates many time-consuming and manual tasks,
                freeing up staff time to focus on more important activities.
                Additionally, Qqualifi is an affordable solution that doesn't
                require institutes to purchase and maintain any hardware or
                software.
              </p>
              <p>
                Qqualifi also helps institutes manage their data better. With
                all data centralized in one place, administrators can easily
                generate reports and track progress over time. This data can
                also be used to identify trends and improve institutional
                processes.
              </p>
              <p>
                Most importantly, Qqualifi is a user-friendly platform that is
                easy to learn and use. Staff and students will be able to
                navigate it with ease, allowing them to get the most out of its
                features and benefits.Qqualifi is designed to help you
                revolutionize your school through data-driven decision making.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
