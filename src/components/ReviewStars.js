export default function ReviewStars({ title, knownFor }) {
  return (
    <div className="w-full h-full border border-lightBlack rounded-lg">
      <div className="flex flex-col w-full h-full lg:p-8 justify-center items-center gap-y-3 text-center sm:p-4">
        <div className="flex flex-row">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src="/images/Logo/star.svg"
              alt="star"
              className="w-5 h-5"
            />
          ))}
        </div>
        <div>
          <h3 className="text-2xl uppercase font-Forum">{title}</h3>
        </div>
        <div>
          <p className="uppercase brightness-75">{knownFor}</p>
        </div>
      </div>
    </div>
  );
}
