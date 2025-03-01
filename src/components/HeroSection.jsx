import hackindiaLogo from "../assets/hackindiaLogo.png";
import bgVideo from "../assets/video.mp4";
import singularity from "../assets/singularity.svg";
import hackindia2025 from "../assets/hackindia2025.png";
import { useState } from "react";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full flex flex-col items-center  overflow-hidden text-center mb-[50px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover "
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navigation Bar with Logo */}
      <div className="relative z-10 flex items-center justify-between w-full px-6 sm:px-10 lg:px-16 py-4">
        {/* Logo */}
        <img
          className="h-10 sm:h-12"
          src={hackindiaLogo}
          alt="HackIndia Logo"
        />
        {/* Hamburger Menu (Mobile) */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        {/* Navigation Buttons */}
        <div className="flex gap-4 hidden lg:flex gap-4">
          {[
            "Overview",
            "Create Team",
            "Prizes & Sponsors",
            "FAQs",
            "Judging & Rules",
          ].map((item) => (
            <button
              key={item}
              className="relative inline-flex items-center justify-center text-white font-bold group px-6 py-3 transition-all duration-100"
              style={{ minWidth: "max-content" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 160 60"
                className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:fill-[#B026FF]"
                preserveAspectRatio="none"
              >
                <path
                  d="M55.2183 5.79534L55.3456 5.88201H55.4997H159V45.0939L140.271 51.7824H8.93774V0.5H47.4392L55.2183 5.79534Z"
                  fill="rgba(217, 217, 217, 0.05)"
                  stroke="#B026FF"
                ></path>

                <path
                  d="M2.35937 47.8035H0.35V52.65H5.54843V0.349998H0.35V35.6037L2.61222 37.9673L2.70937 38.0688V38.2093V47.4535V47.8035H2.35937Z"
                  stroke="#B026FF"
                  strokeWidth="0.7"
                  className="transition-all duration-300 group-hover:fill-[#B026FF]"
                ></path>
              </svg>

              {/* Text with Glow Effect on Hover */}
              <span
                className="relative z-10 px-4 transition-all duration-300"
                style={{
                  textShadow: "none",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.textShadow =
                    "rgba(255, 255, 255, 0.8) 0px 0px 5px, rgba(255, 255, 255, 0.6) 0px 0px 10px, rgba(255, 255, 255, 0.4) 0px 0px 15px")
                }
                onMouseLeave={(e) => (e.target.style.textShadow = "none")}
              >
                {item}
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-80 p-6 text-white flex flex-col items-center gap-4 lg:hidden z-50">
          {[
            "Overview",
            "Create Team",
            "Prizes & Sponsors",
            "FAQs",
            "Judging & Rules",
          ].map((item) => (
            <button
              key={item}
              className="text-lg font-bold"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center mt-8 w-full max-w-[90%]">
        <img
          src={singularity}
          alt="SingularityNET"
          className="mb-4 w-10/12 sm:w-auto"
        />
        <img
          src={hackindia2025}
          alt="HackIndia2025"
          className="mb-6 w-10/12 sm:w-auto"
        />

        <p className="sm:text-2xl md:text-[28px] font-bold leading-[42px] tracking-[0.1em] text-white border border-gray-300 px-4 py-2">
          India's Biggest Web3 & AI Hackathon
        </p>
        <div className="px-6 py-3 my-6 rounded-lg border border-[#D9D9D94D] bg-gradient-to-r from-[#6A1799] to-[#230833]">
          <p className="text-md sm:text-lg md:text-[22px] font-bold leading-[32.45px] tracking-[0.03em] text-center text-[#FFFFFF]">
            February 28 - September 28
          </p>
        </div>

        {/* Price, University, Students */}
        <div className="flex flex-wrap items-center sm:gap-6 justify-center space-x-6 text-white text-sm sm:text-lg">
          <p className="text-[25px] font-bold leading-[36.88px] tracking-[0.03em]">
            <span className="text-[#FF6A3D]">$150+</span> Price Pool
          </p>
          <span className="text-[30px] hidden md:block font-bold leading-[44.25px] tracking-[0.03em] text-white">
            |
          </span>
          <p className="text-[25px] font-bold leading-[36.88px] tracking-[0.03em]">
            <span className="text-[#FF6A3D]">150+</span> University
          </p>
          <span className="text-[30px] font-bold hidden md:block leading-[44.25px] tracking-[0.03em] text-white">
            |
          </span>
          <p className="text-[25px] font-bold leading-[36.88px] tracking-[0.03em]">
            <span className="text-[#FF6A3D]">25,000+</span> Students
          </p>
        </div>

        {/* Register Button */}
        <button className="relative mt-6 px-6 py-3 text-lg text-white font-bold group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="53"
            viewBox="0 0 150 53"
            fill="none"
            className="absolute top-0 left-0 group-hover:fill-[#B026FF] transition-all duration-300"
          >
            <path
              d="M55.2183 5.79534L55.3456 5.88201H55.4997H149.5V45.0939L139.271 51.7824H8.93774V0.5H47.4392L55.2183 5.79534Z"
              fill="#D9D9D9"
              fillOpacity="0.05"
              stroke="#B026FF"
            ></path>
            <path
              d="M2.35937 47.8035H0.35V52.65H5.54843V0.349998H0.35V35.6037L2.61222 37.9673L2.70937 38.0688V38.2093V47.4535V47.8035H2.35937Z"
              stroke="#B026FF"
              strokeWidth="0.7"
            ></path>
          </svg>

          {/* Text with Hover Shadow Effect */}
          <span
            className="relative z-10 transition-all duration-100"
            style={{ textShadow: "none" }}
            onMouseEnter={(e) =>
              (e.target.style.textShadow =
                "rgba(255, 255, 255, 0.8) 0px 0px 5px, rgba(255, 255, 255, 0.6) 0px 0px 10px, rgba(255, 255, 255, 0.4) 0px 0px 15px")
            }
            onMouseLeave={(e) => (e.target.style.textShadow = "none")}
          >
            Register Now
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
