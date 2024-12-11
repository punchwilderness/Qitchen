import insta from "../images/insta.svg";
import faceBook from "../images/faceBook.svg";
import twitter from "../images/twitter.svg";

export default function Social() {
  return (
    <div className="flex flex-row gap-3 absolute -bottom-4 -right-4 bg-black rounded-2xl p-3">
      <div>
        <div className="border-1 border-lighterBlack w-8 h-8 rounded-full hover:border-lightBlack">
          <img
            src={insta}
            alt="instagram"
            className="relative top-1.5 left-1.5"
          ></img>
        </div>
      </div>
      <div>
        <div className="border-1 border-lighterBlack w-8 h-8 rounded-full hover:border-lightBlack">
          <img
            src={faceBook}
            alt="faceBook"
            className="relative top-1.5 -right-1.5"
          ></img>
        </div>
      </div>
      <div>
        <div className="border-1 border-lighterBlack w-8 h-8 rounded-full hover:border-lightBlack">
          <img
            src={twitter}
            alt="twitter"
            className="relative top-1.5 left-1.5"
          ></img>
        </div>
      </div>
    </div>
  );
}
