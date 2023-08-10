import NavBar from "./components/NavBar";
import './App.css';
import LandingPage from "./components/LandingPage";
import { Provider } from "react";
import { store } from "./features/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <LandingPage />
      </div>
    </Provider>
  );
}

export default App;
