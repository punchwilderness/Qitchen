import { useState } from "react";

import NavBar from "../components/navBar";
import HamBurgerMenu from "../components/HamBurgerMenu";
import { useNavigate } from "react-router-dom";

export default function Reservation({ onHamBurgerMenu, isMenuNotOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guest: "",
    email: "",
    date: "",
    time: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    setFormData({
      name: "",
      phone: "",
      guest: "",
      email: "",
      date: "",
      time: "",
    });
    navigate("/");
  }

  return (
    <div>
      {isMenuNotOpen ? (
        <div className="all-container flex lg:flex-row sm:flex-col gap-x-4 gap-y-7">
          <div className="relative object-cover overflow-hidden lg:max-h-92vh rounded-xl xl:max-h-96vh xl:w-3/5 md:max-h-120 sm:max-h-86">
            <img
              src="/images/Reservation-Page.avif"
              alt="Menu"
              className="relative -top-32 w-full rounded-xl"
            />
            <NavBar onHamBurgerMenu={onHamBurgerMenu} />
            <div className="flex sm:items-end sm:justify-center z-10 absolute sm:bottom-4 sm:w-full lg:w-auto lg:bottom-10 lg:left-12">
              <h3 className="lg:bottom-12 lg:left-12  sm:text-6xl md:text-8xl xl:text-9xl font-Forum uppercase">
                book <br /> a table
              </h3>
            </div>
          </div>
          <div className="flex flex-col border border-lightBlack items-center lg:w-3/5 rounded-lg md:py-7 md:px-20 xl:pt-20 sm:px-6 sm:py-8">
            <div className="flex flex-col items-center text-center">
              <div>
                <h2 className="uppercase text-4xl font-Forum my-4">
                  reservation
                </h2>
              </div>
              <div>
                <p className="brightness-75 text-lg lg:px-10">
                  Secure your spot at Qitchen, where exceptional sushi and a
                  remarkable dining experience await.
                </p>
              </div>
            </div>
            <div className="mt-16 lg:w-full xl:w-2/3 sm:w-4/5">
              <form className="flex flex-col gap-y-7" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-lightBlack border border-lightBlack w-full h-14 rounded-lg p-5"
                    required
                  ></input>
                </div>
                <div>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="bg-lightBlack  border border-lightBlack w-full h-14 rounded-lg p-5"
                    required
                  ></input>
                </div>
                <div>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="bg-lightBlack  border border-lightBlack w-full h-14 rounded-lg p-5"
                    required
                  ></input>
                </div>
                <div className="flex md:flex-row sm:flex-col w-full md:justify-between items-center gap-y-7 gap-x-3">
                  <div className="sm:w-full">
                    <input
                      type="number"
                      name="guest"
                      value={formData.guest}
                      onChange={handleChange}
                      placeholder="1-10"
                      className="bg-lightBlack  border border-lightBlack h-14 sm:w-full rounded-lg p-5"
                      required
                    ></input>
                  </div>
                  <div className="sm:w-full">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="bg-lightBlack  border border-lightBlack h-14 sm:w-full rounded-lg p-5"
                      required
                    ></input>
                  </div>
                  <div className="sm:w-full">
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="bg-lightBlack  border border-lightBlack h-14 sm:w-full rounded-lg p-5 "
                      required
                    ></input>
                  </div>
                </div>
                <div className="bg-cream relative rounded-lg hover:bg-darkCream duration-300 ease-in-out">
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full h-14 uppercase text-black"
                  >
                    submit
                  </button>
                </div>
              </form>
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
