import Video from "./components/video";
import Service from "./components/service";
import menuPhoto from "../src/images/menu.webp";
import reserve from "../src/images/reservation.webp";
import restaurent from "../src/images/ourRestaurant.webp";

export default function App() {
  return (
    <div className="container">
      <Video />
      <Service image={menuPhoto} title={"MENU"} />
      <Service image={reserve} title={"RESERVATION"} />
      <Service image={restaurent} title={"OUR RESTAURENT"} />
    </div>
  );
}
