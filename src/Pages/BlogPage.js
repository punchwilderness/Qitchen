import NavBar from "../components/navBar";
import Blog from "../components/Blog";
import HamBurgerMenu from "../components/HamBurgerMenu";

export default function BlogPage({ onHamBurgerMenu, isMenuNotOpen }) {
  return (
    <div>
      {isMenuNotOpen ? (
        <div className="all-container flex lg:flex-row sm:flex-col gap-x-4 gap-y-6">
          <div className="object-fill relative overflow-hidden lg:max-h-92vh xl:max-h-96vh rounded-xl lg:w-4/5 xl:w-1/2 md:max-h-120">
            <img src="/images/Blog-Page.webp" alt="Menu" className="relative" />
            <NavBar onHamBurgerMenu={onHamBurgerMenu} />
            <div className="flex sm:items-end sm:justify-center z-10 absolute sm:bottom-4 w-full lg:w-auto lg:bottom-14 lg:left-12">
              <h3 className="lg:bottom-12 lg:left-12  sm:text-6xl md:text-8xl xl:text-9xl font-Forum uppercase">
                blog
              </h3>
            </div>
          </div>
          <div
            className="flex flex-col rounded-lg border border-lightBlack md:p-20 sm:p-8 items-center 
          gap-y-14 lg:overflow-y-scroll scrollbar-hide lg:max-h-92vh xl:max-h-96vh xl:w-1/2 xl:px-40"
          >
            <div>
              <h3 className="uppercase text-4xl font-Forum">latest news</h3>
            </div>
            <Blog
              image="/images/BlogImages/Blog-1.webp"
              title="how qitchen redefines flavor harmony in every bite"
              description="Experience an orchestra of tastes as Qitchen's sushi unveils a symphony of perfectly balanced flavour."
              date="aug 31, 2023"
            />
            <Blog
              image="/images/BlogImages/Blog-2.webp"
              title="unveiling the mastery behind our culinary craftmanship"
              description="Explore the meticulous artistry and dedication that create Qitchen's renowned sushi perfection."
              date="jun 7, 2023"
            />
            <Blog
              image="/images/BlogImages/Blog-3.webp"
              title="journey through freshness exquisite sushi selection"
              description="Embark on a seafood adventure, guided by Qitchen's fresh and exquisite sushi creations from the sea."
              date="apr 15, 2023"
            />
            <Blog
              image="/images/BlogImages/Blog-4.webp"
              title="palate with qitchen's unsurpassed sushi delicacies"
              description="Discover the heights of gastronomic delight as Qitchen's sushi transports you to a new culinary realm."
              date="mar 19, 2023"
            />
            <Blog
              image="/images/BlogImages/Blog-5.webp"
              title="the qitchen experience beyond sushi"
              description="Immerse in Qitchen's passion for culinary excellence, where sushi is more than a dish-it's an experience"
              date="dec 28, 2022"
            />
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
