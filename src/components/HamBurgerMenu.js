import { Link } from "react-router-dom";

export default function HamBurgerMenu({ onHamBurgerMenu }) {
  return (
    <div className="pt-6 mt-6 mx-8 rounded-2xl bg-lightBlack xl:h-95vh sm:h-94vh">
      <div className="ham-menu-cross top-1 left-9" onClick={onHamBurgerMenu}>
        <span></span>
        <span></span>
      </div>
      <div className="flex flex-col justify-center items-center text-7xl font-Forum py-16 gap-y-6 h-full sm:text-6xl">
        <Link to="/menu">
          <div onClick={onHamBurgerMenu}>
            <p>
              <button className="uppercase hover:text-gold transition-colors ease-linear">
                menu
              </button>
            </p>
          </div>
        </Link>
        <Link to="/reservation">
          <div onClick={onHamBurgerMenu}>
            <p>
              <button className="uppercase hover:text-gold transition-colors ease-linear">
                reservation
              </button>
            </p>
          </div>
        </Link>
        <Link to="/about">
          <div onClick={onHamBurgerMenu}>
            <p>
              <button className="uppercase hover:text-gold transition-colors ease-linear">
                about
              </button>
            </p>
          </div>
        </Link>
        <Link to="/contact">
          <div onClick={onHamBurgerMenu}>
            <p>
              <button className="uppercase hover:text-gold transition-colors ease-linear">
                contact
              </button>
            </p>
          </div>
        </Link>
        <Link to="/blog">
          <div onClick={onHamBurgerMenu}>
            <p>
              <button className="uppercase hover:text-gold transition-colors ease-linear">
                blog
              </button>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
