import logo from "../assets/logo.svg";
import border from "../assets/border.svg";
import line from "../assets/line.svg";

const Navbar = () => {
  return (
    <div>
      <div
        className="flex justify-between items-center px-8 py-4 border-b border-purple-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <img src={logo} alt="logo" />

        <button>
          <img src={border} alt="" />
        </button>
      </div>
      <img src={line} />
    </div>
  );
};

export default Navbar;
