import React from "react";
import Header from "./header";
import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-16">
        <Header />
      </div>
      <div className="max-w-52 w-full h-full fixed left-0 top-16">
        <Sidebar />
      </div>
      <div className="border mt-16 ml-52 w-full h-full ">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
