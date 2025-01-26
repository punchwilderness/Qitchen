export default function Blog({ image, title, description, date }) {
  return (
    <div>
      <div className="flex md:flex-row sm:flex-col gap-x-7 items-center transform transition-transform duration-300 hover:scale-110">
        <div className="md:max-w-60 md:max-h-44">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <div>
            <h5 className="uppercase text-sm font-semibold p-1">{date}</h5>
          </div>
          <div className="text-2xl uppercase font-Forum pb-2 pr-2">{title}</div>
          <div>
            <p className="brightness-75">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
