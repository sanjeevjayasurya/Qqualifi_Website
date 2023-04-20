import React from "react";
import about_illustartion from "../../assets/about_illustartion.png";

const About = () => {
  const backgroundImage = {};
  return (
    <div>
      <div className="main_content padding_main_content relative min-h-full">
        <div
          className="min-h-[80vh] min-w-[100%]"
          style={{
            backgroundImage: `url(${about_illustartion})`,
            // minHeight: "100px",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="xs:text-[32px] sm:text-[56px] font-[700] md:leading-[72px] sm:leading-[72px] xs:leading-[37.3px] text-center sm:whitespace-nowrap xs:whitespace-normal relative top-16">
            Unlock the power of <br />{" "}
            <span className="grad_text">educational innovation!</span>
          </h1>
        </div>
      </div>
      <div className="bg-[#F8FCFE]">
        <div className="py-12 main_content padding_main_content">
          <h2 className="pb-4 font-[600] md:text-[32px] xs:text-[24px]">
            Who we are
          </h2>
          <section className="md:text-[16px] xs:text-[16px] font-[400] text-[#686868]">
            <p className="pb-4">
              Qqualifi is an education-infrastructure SaaS company digitizing
              the education system.It is our mission to build a cutting-edge
              platform for educators and learners. As an early stage startup in
              the education-infrastructure space, we’re aiming to solve these
              issues faced by current education platforms.
            </p>
            <p className="pb-4">
              In addition Qqualifi is also focused on creating an infrastructure
              that supports the growth of the educational sector. We are
              developing a platform that will provide educators with the
              resources and insights to better understand their students’ needs
              and to create a more effective learning environment.
            </p>
            <p className="pb-4">
              Qqualifi is committed to providing a modern, secure, and reliable
              platform that is designed to fit the needs of each user. Our team
              is comprised of experienced industry professionals that are
              dedicated to making the education system more accessible and
              effective.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
