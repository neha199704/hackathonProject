const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-center md:justify-around items-center text-center py-6 px-4 bg-[radial-gradient(circle_at_20%_40%,_rgba(122,_34,_173,_0.3),_rgba(0,_0,_0,_0.9)_50%,_black)] border-t border-gray-700 text-white space-y-4 md:space-y-0 p-4 pb-10 mb-0 max-sm:mb-[50px]">
      <p className="text-sm md:text-base">Copyright © 2024 DcodeBlock</p>

      {/* Links */}
      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
        <a href="#" className="hover:text-white text-sm md:text-base">
          Help Center
        </a>
        <span className="text-white  md:block">|</span>
        <a href="#" className="hover:text-white text-sm md:text-base">
          Terms and Conditions
        </a>
        <span className="text-white  md:block">|</span>
        <a href="#" className="hover:text-white text-sm md:text-base">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
