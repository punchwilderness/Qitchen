import { Link } from "react-router-dom";

export default function Service({ image, title }) {
  return (
    <Link to={title === "our restaurent" ? "about" : title}>
      <div className="relative h-full w-full brightness-75 hover:brightness-100 transition ease-linear flex-1">
        <img
          src={image}
          alt=""
          className="h-full w-full rounded-3xl object-cover"
        />
        <div className="absolute -bottom-2 right-0 flex flex-row gap-3 bg-black p-3 pl-3 rounded-xl">
          <h6 className="z-10 text-md font-Forum uppercase">{title}</h6>
          <div className="bg-lighterBlack rounded-full w-7 h-6.5 border border-lightBlack">
            <img
              src="/images/Logo/arrow.svg"
              alt="arrow"
              className="relative top-2 left-2"
            ></img>
          </div>
        </div>
      </div>
    </Link>
  );
}
