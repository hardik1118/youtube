import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import VideoContainer from "./components/VideoContainer";

function App() {
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
}

export default App;
