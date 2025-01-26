import { useEffect, useState, useRef } from "react";

import Video from "../components/video";
import Service from "../components/service";
import NavBar from "../components/navBar";
import HamBurgerMenu from "../components/HamBurgerMenu";
import Social from "../components/social";

export default function HomePage({ onHamBurgerMenu, isMenuNotOpen }) {
  const containerRef = useRef(null);
  const [isTall, setIsTall] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.offsetHeight;
      setIsTall(height <= 384); // Set your height threshold here
    }
  }, []);
  return (
    <div>
      {isMenuNotOpen ? (
        <div className="all-container flex lg:flex-row sm:flex-col gap-x-6 gap-y-6">
          <div
            className="lg:h-92vh xl:h-96vh md:h-120 sm:h-96 w-full"
            ref={containerRef}
          >
            <Video>
              <NavBar onHamBurgerMenu={onHamBurgerMenu} />
              {isTall ? "" : <Social />}
            </Video>
          </div>
          <div className="flex lg:flex-col md:flex-row sm:flex-col xl:gap-y-6 lg:gap-y-4 gap-x-5 gap-y-4 lg:w-2/5 lg:max-h-92vh xl:max-h-96vh">
            <div className="lg:h-3/12 w-full">
              <Service image="/images/menu.webp" title={"menu"} />
            </div>
            <div className="lg:h-3/12 w-full">
              <Service image="/images/reservation.webp" title={"reservation"} />
            </div>
            <div className="lg:h-3/12 w-full">
              <Service
                image="/images/ourRestaurant.webp"
                title={"our restaurent"}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <HamBurgerMenu onHamBurgerMenu={onHamBurgerMenu} />
        </div>
      )}
    </div>
  );
}
