import "./dropDownMenu.css";
const DropDownMenu = (dropDownItems) => {
  let props = {
    dropDownItems: {
      items: ["Home2", "Home3", "Home4", "Home5"],
      titles: [
        {
          title: "Shop Layout",
          menu: "Left Sidebar",
        },
        {
          title: "Product Layout",
          menu: "Horizontal Thumbnail",
        },
        {
          title: "Product Types",
          menu: ["Simple product", "Variable product"],
        },
      ],
    },
  };
  return (
    <>
      <div className="dropDownMenu">
        {dropDownItems.items.map((item, index) => (
          <a key={index} href={item.link}>
            <li>{item.menu}</li>
          </a>
        ))}
      </div>
    </>
  );
};
export default DropDownMenu;
