import sushiSensation from "../video/sushi-sensation.mp4";
import NavBar from "./navBar";
import Social from "./social";

export default function Video() {
  return (
    <div className="row-span-3 relative">
      <video
        src={sushiSensation}
        autoPlay
        loop
        muted
        className="rounded-2xl object-fill h-full"
      ></video>
      <div>
        <div className="absolute bottom-8 left-16 z-10 text-8.5xl leading-none">
          SUSHI <br />
          SENSATION
        </div>
      </div>
      <NavBar />
      <Social />
    </div>
  );
}
