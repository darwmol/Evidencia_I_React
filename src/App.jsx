import {
  Routes,
  Route,
} from "react-router-dom";
import LandPage from "./Home";


import "./global.css";
function App() {
  return (
    <Routes>
    <Route path="/" element={<LandPage />} />
  </Routes>
  );
}
export default App;
