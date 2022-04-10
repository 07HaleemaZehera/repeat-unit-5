import "./App.css";
import { Routes, Route } from "react-router-dom";
import First from "./Pages/First";
import Second from "./Pages/Second";
import Home from "./Pages/Home";
import Users from "./Pages/Users"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/registration/one" element={<First />}></Route>
      <Route path="/registration/two" element={<Second />}></Route>
      <Route path="/users" element={<Users/>}></Route>
    </Routes>
  );
}
export default App;
