import Menu from "../components/Menu";
import NavBar from "../components/navBar";
import HamBurgerMenu from "../components/HamBurgerMenu";

export default function MenuPage({ onHamBurgerMenu, isMenuNotOpen }) {
  return (
    <div>
      {isMenuNotOpen ? (
        <div>
          <div className="flex lg:all-container sm:p-4 sm:flex-col sm:gap-y-5 lg:flex-row gap-x-4 lg:h-screen">
            <div className="overflow-hidden lg:h-full sm:h-50vh rounded-xl lg:w-1/2 relative z-10">
              <img
                src="/images/Menu-page.avif"
                alt="Menu"
                className="absolute w-full h-full object-cover brightness-75"
              />
              <NavBar onHamBurgerMenu={onHamBurgerMenu} />
              <div className="flex sm:items-end sm:justify-center z-10 absolute sm:bottom-4 sm:w-full lg:w-auto lg:bottom-14 lg:left-12">
                <h3 className="lg:bottom-12 lg:left-12  sm:text-6xl xl:text-9xl font-Forum uppercase">
                  Menu
                </h3>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-full overflow-y-auto scrollbar-hide z-10">
              <Menu />
            </div>
          </div>
        </div>
      ) : (
        <HamBurgerMenu onHamBurgerMenu={onHamBurgerMenu} />
      )}
    </div>
  );
}
