import { useState } from "react";

export default function Carousel({ slides = [] }) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextSlide() {
    setImageIndex((index) => {
      return index + 1;
    });
  }

  function showPrevSlide() {
    setImageIndex((index) => {
      return index - 1;
    });
  }

  return (
    <div className="xl:h-full xl:w-1/2 md:w-1/2">
      <div className="w-full h-full relative">
        <div className="flex flex-row lg:max-w-86 lg:max-h-52 xl:max-w-[39rem] xl:max-h-100 overflow-hidden">
          {slides.map((img, index) => {
            return (
              <img
                src={img}
                key={index}
                alt=""
                className={`object-cover img-slider-img duration-300 ease-in-out rounded-lg`}
                style={{ translate: `${-100 * imageIndex}%` }}
              />
            );
          })}
        </div>
        {imageIndex === 0 ? (
          ""
        ) : (
          <button
            className="absolute top-1/2 left-3 bg-black rounded-full w-6 opacity-35 hover:opacity-75"
            onClick={showPrevSlide}
          >
            &lt;
          </button>
        )}
        {imageIndex === slides.length - 1 ? (
          ""
        ) : (
          <button
            className="absolute top-1/2 right-3 bg-black rounded-full w-6 opacity-35 hover:opacity-75"
            onClick={showNextSlide}
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
}
