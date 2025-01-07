import React from "react";
import MenuIcon from "./icons/MenuIcon";
import Youtube from "./icons/Youtube";
import Searchbar from "./Searchbar";
import UserIcon from "./UserIcon";

const Header = () => {
  return (
    <div className="m-2 flex justify-between">
      <div className="flex items-center">
        <div className="h-6 w-6 mr-4">
          <MenuIcon />
        </div>
        <div className="h-10 w-10">
          <Youtube />
        </div>
      </div>
      <div className="max-w-sm w-full">
        <Searchbar />
      </div>
      <div>
        <UserIcon />
      </div>
    </div>
  );
};

export default Header;
