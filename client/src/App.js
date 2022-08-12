import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import CreateRecipe from "./components/CreateRecipe";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/recipes/:id" element={<Detail />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/recipe" element={<CreateRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
