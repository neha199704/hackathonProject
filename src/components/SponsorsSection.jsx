import sponsor1 from "../assets/sponsor1.svg";
import sponsor2 from "../assets/sponsor2.svg";
import sponsor3 from "../assets/sponsor3.svg";
import sponsor4 from "../assets/sponsor4.svg";
import sponsor5 from "../assets/sponsor5.svg";
import sponsor6 from "../assets/sponsor6.svg";

const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6];

const Sponsors = () => {
  return (
    <section className="flex justify-center bg-[#D9D9D9]">
      <div className="flex flex-wrap justify-center sm:justify-between gap-3 md:gap-6 lg:gap-10">
        {sponsors.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor}
            alt={`Sponsor ${index + 1}`}
            className="w-32 md:w-40 lg:w-40"
          />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
