import arrow from "../images/arrow.svg";

export default function Service({ image, title }) {
  return (
    <div>
      <div className="relative h-full">
        <img
          src={image}
          alt="menu"
          className="block w-full h-full rounded-3xl object-cover"
        />
        <div className="absolute -bottom-2 right-0 flex flex-row gap-3 bg-black p-3 pl-3 rounded-xl">
          <h6 className="z-10 text-md">{title}</h6>
          <div className=" bg-lighterBlack rounded-full w-7 h-6.5 border border-lightBlack">
            <img
              src={arrow}
              alt="arrow"
              className="relative top-2 left-2"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
