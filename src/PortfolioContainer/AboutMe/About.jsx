import React from "react";
import "./About.css";
import LineArrow from "../../assets/Home/LineArrow.png";
import nishantAboutMePic from "../../assets/Home/aboutMePic.jpeg";
import Aos from "aos";

const About = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 1100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div className="container-fluid" id="about" data-aos="fade-in">
        <h1 className="mainContainer-heading">About Me</h1>
        <h6 className="mainContainer-subHeading">Why Choose Me ?</h6>
        <div className="lineArrow">
          <img src={LineArrow} style={{ width: "260px" }} alt="" />
        </div>

        <div className="row">
          <div className="col-md-9 col-col-12 mx-auto">
            <div className="aboutMeDiv">
              <div className="imgDiv">
                <img src={nishantAboutMePic} alt="" />
              </div>
              <div className="textContent">
                <div className="firstContent">
                  <p>
                    Skilled full stack web developer with expertise in making
                    real time website.use trending technologies to make faster
                    websites, handle backend data, works with live project.
                    Eager to bring experience in web Development to help the
                    company.
                  </p>
                </div>
                <div className="secondContent">
                  <h6> Here are a Few Highlights :</h6>
                  <li> Full Stack web developer</li>
                  <li> 2 Star codder at Codechef.</li>
                  <li> Good rank at Codeforces</li>
                  <li> Good rank at Leetcode</li>
                  <li> Managing database</li>
                </div>
                <div className="aboutMe-options">
                  <a href="#contact" className="btn primary-btn">
                    Hire Me
                  </a>
                  <a
                    href="Nishant_Argade_Resume.pdf"
                    download="Nishant_Argade_Resume.pdf"
                  >
                    <button className="btn highlighted-btn">Get Resume</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
