// import sushiSensation from "../video/sushi-sensation.mp4";

export default function Video({ children }) {
  return (
    <div className="relative h-full w-full">
      <video
        src="/sushi-sensation.mp4"
        autoPlay
        loop
        muted
        className="rounded-2xl object-cover h-full w-full brightness-90"
      ></video>
      <div className="flex sm:items-center sm:justify-center z-10 absolute sm:bottom-4 sm:w-full lg:w-auto lg:bottom-8 lg:left-12">
        <h3 className="lg:bottom-12 lg:left-12  sm:text-7xl lg:text-8xl xl:text-9xl font-Forum uppercase lg:text-left sm:text-center">
          sushi <br /> sensation
        </h3>
      </div>
      {children} {/* NavBar as children taken from the home*/}
    </div>
  );
}
