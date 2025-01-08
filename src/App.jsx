import { Provider } from "react-redux";
import MainContainer from "./components/mainContainer";
import appStore from "./store/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <MainContainer />
      </Provider>
    </>
  );
}

export default App;
