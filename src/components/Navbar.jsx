import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  console.log(appleImg);
  return (
    <header className="w-full flex items-center justify-between py-5 px-5 sm:px-10">
      <nav className="w-full flex screen-max-width">
        <img src={appleImg} width={14} height={18} alt="logo" />

        <div className="flex items-center justify-center flex-1 max-sm:hidden">
          {navLists.map((nav, i) => (
            <div
              className="text-gray text-sm hover:text-white transition-all cursor-pointer px-5"
              key={i}
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img height={18} width={18} alt="icon" src={searchImg} />
          <img height={18} width={18} alt="icon" src={bagImg} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
