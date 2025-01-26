import { useState, useEffect } from "react";

import MenuSection from "./MenuSection";

function Menu() {
  const [menuData, setMenuData] = useState([]);

  useEffect(function () {
    fetch("http://localhost:9000/menu")
      .then((res) => res.json())
      .then((data) => setMenuData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="border border-zinc-800 lg:p-32 sm:p-6 rounded-xl">
      <div>
        <div className="flex flex-row gap-x-4 justify-center text-center text-sm">
          <div className="border border-zinc-800 p-2 rounded-md">
            <a href="#Maki" className="uppercase">
              maki
            </a>
          </div>
          <div className="border border-zinc-800 p-2 rounded-md">
            <a href="#UraMaki" className="uppercase">
              uramaki
            </a>
          </div>
          <div className="border border-zinc-800 p-2 rounded-md">
            <a href="#SpecialRolls" className="uppercase">
              special rolls
            </a>
          </div>
        </div>
      </div>
      {menuData && menuData.length > 0 ? (
        menuData.map((category, index) => {
          const [categoryName, items] = Object.entries(category)[0];
          return (
            <MenuSection
              key={index}
              categoryName={categoryName}
              menuItems={items}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Menu;
