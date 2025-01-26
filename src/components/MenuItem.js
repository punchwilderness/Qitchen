function MenuItem({ image, name, price, description, eco }) {
  return (
    <div className="flex md:flex-row sm:flex-col gap-x-5 pb-6">
      <img src={image} alt="" className="md:w-1/5 sm:w-full"></img>

      <div className="flex flex-col pt-2">
        <div className="flex flex-row items-baseline gap-x-3">
          <h3 className="font-Forum text-2xl uppercase">{name}</h3>
          <img src={eco} alt="" />
          <div className="flex flex-1 border border-dashed h-0"></div>
          <h5>{price}</h5>
        </div>
        <p className="brightness-75">{description}</p>
      </div>
    </div>
  );
}

export default MenuItem;
