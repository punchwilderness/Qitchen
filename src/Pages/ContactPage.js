import NavBar from "../components/navBar";
import OpenTiming from "../components/OpenTiming";
import HamBurgerMenu from "../components/HamBurgerMenu";

export default function ContactPage({ onHamBurgerMenu, isMenuNotOpen }) {
  return (
    <div>
      {isMenuNotOpen ? (
        <div className="all-container flex lg:flex-row sm:flex-col gap-x-4 gap-y-6">
          <div className=" overflow-hidden object-cover lg:max-h-92vh xl:max-h-96vh rounded-xl xl:w-3/5 relative md:max-h-50vh sm:max-h-86">
            <img
              src="/images/Contact-Page.avif"
              alt="Menu"
              className="relative -top-32 xl:w-full"
            />
            <NavBar onHamBurgerMenu={onHamBurgerMenu} />
            <div className="flex sm:items-end sm:justify-center z-10 absolute sm:bottom-4 sm:w-full lg:w-auto lg:bottom-14 lg:left-12">
              <h3 className="lg:bottom-12 lg:left-12  sm:text-6xl xl:text-9xl font-Forum uppercase">
                About
              </h3>
            </div>
          </div>
          <div className="flex flex-col relative lg:w-3/5 sm:w-full gap-y-8 lg:max-h-92vh xl:max-h-96vh">
            <div className="flex md:flex-row sm:flex-col gap-y-6 gap-x-6 h-1/2">
              <div className="flex flex-col border border-lightBlack p-8 rounded-lg lg:w-full xl:w-1/2 gap-y-2 h-full md:w-110vh">
                <div>
                  <h3 className="uppercase text-3xl text-center font-Forum lg:mb-3 xl:mb-64 md:mb-7">
                    opening <br></br> hours
                  </h3>
                </div>
                <OpenTiming day="Mon" time="16:00 - 22:30" />
                <OpenTiming day="Tue" time="16:00 - 22:30" />
                <OpenTiming day="Wed" time="16:00 - 22:30" />
                <OpenTiming day="Thr" time="16:00 - 22:30" />
                <OpenTiming day="Fri" time="16:00 - 22:30" />
                <OpenTiming day="Sat & Sun" time="16:00 - 22:30" />
              </div>
              <div className="max-w-90 sm:max-w-full xl:max-w-1/2 h-full">
                <div className="flex flex-col gap-y-4 h-full">
                  <div className="flex flex-row gap-x-4 w-full h-1/2 flex-grow relative">
                    <div>
                      <img
                        src="/images/Contact-Page.avif"
                        alt=""
                        className="w-120 h-full object-cover rounded-xl"
                      />
                    </div>
                    <div>
                      <img
                        src="/images/contact1.png"
                        alt=""
                        className="w-120 h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-x-4 w-full h-full flex-grow relative">
                    <div>
                      <img
                        src="/images/BlogImages/Blog-1.webp"
                        alt=""
                        className="w-120 h-full object-cover rounded-xl"
                      />
                    </div>
                    <div>
                      <img
                        src="/images/BlogImages/Blog-4.webp"
                        alt=""
                        className="w-120 h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row sm:flex-col gap-y-6 gap-x-6 h-1/2">
              <div className="relative w-full lg:max-h-72 xl:max-h-full md:max-h-full sm:max-h-80">
                <iframe
                  className="w-full lg:h-72 xl:h-full sm:h-80 rounded-lg"
                  title="map"
                  frameborder="0"
                  scrolling="yes"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Qitchen)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>

                <div className="absolute -bottom-2 right-0 flex flex-row gap-3 bg-black p-3 pl-3 rounded-xl">
                  <h6 className="z-10 text-md font-Forum uppercase">
                    show route
                  </h6>
                  <div className=" bg-lighterBlack rounded-full w-7 h-6.5 border border-lightBlack">
                    <img
                      src="/images/Logo/arrow.svg"
                      alt="arrow"
                      className="relative top-2 left-2"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="border border-lightBlack rounded-lg w-full">
                <div className="flex flex-col gap-y-7 lg:p-6 xl:p-12 h-full sm:p-10">
                  <div className="lg:mb-4 xl:mb-64 sm:mb-4">
                    <h3 className="uppercase text-3xl font-Forum text-center">
                      get in touch
                    </h3>
                  </div>
                  <div className="flex flex-row lg:gap-x-20 xl:gap-x-60 md:gap-x-7 sm:gap-x-11">
                    <h5 className="uppercase text-sm">address</h5>
                    <p className="text-right">
                      23 Greenfield Avenue, Prague 120 00
                    </p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h5 className="uppercase text-sm">phone</h5>
                    <p>+42 1234 567890</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h5 className="uppercase text-sm">email</h5>
                    <p>info@qitchen.com</p>
                  </div>
                </div>
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
