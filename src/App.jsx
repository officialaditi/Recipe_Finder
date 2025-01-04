import { BrowserRouter, Route,Routes } from "react-router-dom";
import { HomeScreen } from "./Screens/HomeScreen";
import { Header } from "./components/Header";
import { SingleScreen } from "./Screens/SingleScreen";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/recipes/:id" element={<SingleScreen/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
