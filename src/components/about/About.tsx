import React from "react";
import about_image from "../../assets/about_image.png";
import about_thread_image from "../../assets/about_thread_image.png";
const About = () => {
  return (
    <div className=" flex flex-col">
      <div>
        <center
          className="text-5xl font-black"
          // style={{ lineHeight: "60px" }}
        >
          <h1 className="text-[#202020]">
            Unlock the power of <br />
            <span className="text-[#0D47A1]">educational innovation!</span>
          </h1>
          <div className="relative">
            <img
              src={about_image}
              alt=""
              width="80%"
              height="50%"
              style={{
                objectFit: "contain",
                objectPosition: "center",
                position: "relative",
                zIndex: 999,
                //   background: "pink",
              }}
            />
            <img
              src={about_thread_image}
              alt=""
              width="50%"
              height="50%"
              className="absolute top-0 "
              style={{
                objectFit: "contain",
                objectPosition: "center",
                left: "20%",
                zIndex: 10,
                //   background: "pink",
              }}
            />
          </div>
        </center>
        {/* <div className="" style={{ padding: "10px auto" }}>
          
        </div> */}
      </div>
      <div className=" bg-[#F8FCFE]">
        <div className="py-6 px-20">
          <h2 className="pb-8 font-bold text-3xl text-[#000]">Who we are</h2>
          <div
            className="text-[#686868]"
            style={{ fontWeight: 400, fontSize: 14 }}
          >
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
