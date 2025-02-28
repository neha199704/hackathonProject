import sponsor1 from "../assets/sponsor1.svg";
import sponsor2 from "../assets/sponsor2.svg";
import sponsor3 from "../assets/sponsor3.svg";
import sponsor4 from "../assets/sponsor4.svg";
import sponsor5 from "../assets/sponsor5.svg";
import sponsor6 from "../assets/sponsor6.svg";

const Sponsors = () => {
  return (
    <section className="flex justify-center   bg-[#D9D9D9]">
      <div className="flex flex-wrap justify-center sm:justify-between gap-3 md:gap-6 lg:gap-10">
        <img className="w-32 md:w-40 lg:w-40" src={sponsor1} alt="Sponsor 1" />
        <img className="w-32 md:w-40 lg:w-40" src={sponsor2} alt="Sponsor 2" />
        <img className="w-32 md:w-40 lg:w-40" src={sponsor3} alt="Sponsor 3" />
        <img className="w-32 md:w-40 lg:w-40" src={sponsor4} alt="Sponsor 4" />
        <img className="w-32 md:w-40 lg:w-40" src={sponsor5} alt="Sponsor 5" />
        <img className="w-32 md:w-40 lg:w-40" src={sponsor6} alt="Sponsor 6" />
      </div>
    </section>
  );
};

export default Sponsors;
