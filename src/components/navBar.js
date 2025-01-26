import { NavLink } from "react-router-dom";

export default function NavBar({ onHamBurgerMenu }) {
  return (
    <div className="absolute flex flex-row bg-black top-12 lg:left-12 md:left-1/5 sm:left-1/10 justify-center items-center space-x-3 p-2.5 rounded-xl">
      <div className="ham-menu" onClick={onHamBurgerMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="flex flex-row justify-center space-x-1 items-center text-sm tracking-wider">
        <NavLink to="/">
          <div>
            <img src="/images/Logo/qitchen.svg" alt="qitchen"></img>
          </div>
        </NavLink>
        <NavLink to="/menu">
          <div className="sm:hidden md:block transition duration-1000 hover:bg-lighterBlack hover:border-1 border-lightBlack py-1.5 px-3.5 rounded-md">
            MENU
          </div>
        </NavLink>
        <NavLink to="/about">
          <div className="sm:hidden md:block transition duration-500 hover:bg-lighterBlack hover:border-1 border-lightBlack py-1.5 px-3.5 rounded-md">
            ABOUT
          </div>
        </NavLink>
        <NavLink to="/reservation">
          <div className="btn-style transition duration-400 hover:brightness-110">
            BOOK A TABLE
          </div>
        </NavLink>
      </div>
    </div>
  );
}
