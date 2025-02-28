import lightningImg from "../assets/lightningImg.svg";

const Stats = () => {
  return (
    <section className="py-10 bg-[radial-gradient(circle_at_20%_40%,_rgba(122,_34,_173,_0.3),_rgba(0,_0,_0,_0.9)_50%,_black)] flex flex-col lg:flex-row items-center justify-between px-30">
      <div className="relative flex flex-col justify-center text-white max-w-lg">
        <img
          src={lightningImg}
          alt="Lightning Effect"
          className="absolute -top-16 -left-30 w-44 opacity-80"
        />

        {/* Main Number */}
        <div
          className="text-[55px] leading-[75px] tracking-[6%] font-[400]"
          style={{
            fontFamily: "PROXON",
            textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)",
          }}
        >
          150+
        </div>

        {/* Subtext */}
        <span
          className="text-[24px] leading-[36px] tracking-[6%] font-[400] mt-2"
          style={{
            fontFamily: "PROXON",
            textShadow: "0px 4px 4px rgba(255, 255, 255, 0.5)",
          }}
        >
          Universities Participating
        </span>

        <div className="flex gap-10 mt-6">
          {[
            { value: "72+", label: "Judges" },
            { value: "21", label: "Hackathons" },
            { value: "36+", label: "Great Speakers" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-[40px] leading-[60px] tracking-[6%] font-[400]"
                style={{ fontFamily: "PROXON" }}
              >
                {stat.value}
              </div>
              <span
                className="text-[20px] leading-[30px] tracking-[6%] font-[400]"
                style={{ fontFamily: "PROXON" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - YouTube Video */}
      <div className="w-full max-w-xl mt-6 lg:mt-0">
        <iframe
          className="w-full aspect-video rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/gi1kkMbfNAE"
          title="HackIndia 2024 Finals"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Stats;
