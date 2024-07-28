import React from "react";
import Logo from "../Images/logo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  const navSection = [
    { title: "Cancel", link: "/cancel" },
    { title: "Cart", link: "/cart" },
    { title: "Category", link: "/category" },
    { title: "Favorite", link: "/favorite" },
    { title: "NotFound", link: "/notfound" },
    { title: "Orders", link: "/orders" },
    { title: "Product", link: "/product" },
    { title: "Profile", link: "/profile" },
    { title: "Success", link: "/success" },
  ];
  return (
    <div className=" max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0">
      <img src={Logo} alt="logo" className="w-44 " />
      <div className="flex items-center gap-x-6">
        {navSection.map((item) => (
          <Link
            to={item?.link}
            className="text-xs text-wider uppercase font-bold hover:text-green-500"
            key={item?.title}
          >
            {item?.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
