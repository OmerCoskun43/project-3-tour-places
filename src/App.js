import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { data } from "./helper/data";

function App() {
  return (
    <div className="App text-center">
      <Navbar />
      <Header />

      <Main />
    </div>
  );
}

export default App;
