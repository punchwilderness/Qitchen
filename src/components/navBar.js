import qitchen from "../images/qitchen.svg";

export default function NavBar() {
  return (
    <div className="absolute flex flex-row bg-black top-12 left-12 justify-center items-center space-x-3 p-2.5 rounded-xl">
      <div className="ham-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="flex flex-row justify-center space-x-1 items-center text-sm tracking-wider">
        <div>
          <img src={qitchen} alt="qitchen"></img>
        </div>
        <div className="transition duration-1000 hover:bg-lighterBlack hover:border-1 border-lightBlack py-1.5 px-3.5 rounded-md">
          MENU
        </div>
        <div className="transition duration-500 hover:bg-lighterBlack hover:border-1 border-lightBlack py-1.5 px-3.5 rounded-md">
          ABOUT
        </div>
        <div className="btn-style transition duration-400 hover:brightness-110">
          BOOK A TABLE
        </div>
      </div>
    </div>
  );
}
