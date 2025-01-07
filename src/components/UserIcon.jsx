import React from "react";

const UserIcon = () => {
  return (
    <div className="flex items-center border w-full rounded-l-full rounded-r-full p-2">
      <img
        className="h-6 w-6 mr-2"
        src="https://img.icons8.com/ios/50/user--v1.png"
        alt="user icon"
      />
      Sign In
    </div>
  );
};

export default UserIcon;
