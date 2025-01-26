import NavBar from "../components/navBar";
import HamBurgerMenu from "../components/HamBurgerMenu";
import Carousel from "../components/Carousel";
import ReviewStars from "../components/ReviewStars";

const slides1 = [
  "/images/reservation.webp",
  "/images/CarouselImages/carousel1_1.avif",
  "/images/ourRestaurant.webp",
];
const slides2 = [
  "/images/CarouselImages/carousel2_1.avif",
  "/images/CarouselImages/carousel2_2.avif",
  "/images/CarouselImages/carousel2_3.avif",
];

export default function AboutPage({ isMenuNotOpen, onHamBurgerMenu }) {
  return (
    <div>
      {isMenuNotOpen ? (
        <div className="all-container flex lg:flex-row gap-x-4 gap-y-4 flex-col">
          <div className="lg:h-92vh xl:h-96vh xl:w-1/2 lg:w-3/5 rounded-xl relative ">
            <img
              src="/images/About-Page.avif"
              alt="Menu"
              className="lg:absolute object-cover h-full w-full sm:rounded-lg"
            />
            <NavBar onHamBurgerMenu={onHamBurgerMenu} />
            <div className="flex sm:items-end sm:justify-center z-10 absolute sm:bottom-4 sm:w-full lg:w-auto lg:bottom-14 lg:left-12">
              <h3 className="lg:bottom-12 lg:left-12  sm:text-6xl xl:text-9xl font-Forum uppercase">
                About
              </h3>
            </div>
          </div>
          <div className="flex flex-col lg:w-3/5 xl:w-1/2 gap-y-7">
            <div className="flex md:flex-row sm:flex-col gap-5 lg:h-52 xl:h-full w-full">
              <div className="border border-lightBlack rounded-lg lg:w-1/2 md:w-1/2">
                <h3 className="uppercase text-4xl pt-7 pb-3 pl-4 font-Forum">
                  Sushi Artistry Redefined
                </h3>
                <p className="brightness-75 pl-4 xl:mt-56 lg:mt-0 md:mt-32">
                  Where culinary craftsmanship meets modern elegance. Indulge in
                  the finest sushi, expertly curated to elevate your dining
                  experience.
                </p>
              </div>
              <Carousel slides={slides1} />
            </div>
            <div className="flex md:flex-row sm:flex-col md:max-h-44 lg:max-w-3xl xl:max-w-7xl gap-x-3 gap-y-4">
              <ReviewStars title="tip advisor" knownFor="best sushi" />
              <ReviewStars title="michelin guide" knownFor="quality food" />
              <ReviewStars title="start dining" knownFor="cool vibe" />
            </div>
            <div className="flex md:flex-row sm:flex-col gap-x-6 gap-y-6 lg:h-52 xl:h-full w-full">
              <Carousel slides={slides2} />
              <div className="lg:w-96 xl:w-1/2 border border-lightBlack rounded-lg h-full md:w-1/2">
                <h3 className="uppercase text-4xl pt-7 pb-3 pl-4 font-Forum text-center">
                  Our Story
                </h3>
                <p className="brightness-75 pl-4 xl:mt-56 lg:mt-0 md:mt-32 md:mb-14">
                  Founded with a passion for culinary excellence, Qitchen's
                  journey began in the heart of Prague. Over years, it evolved
                  into a haven for sushi enthusiasts, celebrated for its artful
                  mastery and devotion to redefining gastronomy.
                </p>
              </div>
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
