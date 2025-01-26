import MenuItem from "./MenuItem";

function MenuSection({ categoryName, menuItems }) {
  return (
    <div id={categoryName} className="flex flex-col items-center gap-y-3">
      <div className="block text-4xl pb-10 pt-14 font-Forum uppercase">
        <span>{categoryName}</span>
      </div>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          image={item.image}
          name={item.name}
          price={item.price}
          description={item.description}
          eco={item.eco}
        />
      ))}
    </div>
  );
}

export default MenuSection;
