import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Contacto from "./components/Contacto/Contacto";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Inicio" />} />
        <Route path="/Inicio" element={<LandingPage />} />
        <Route path="/Contacto" element={<Contacto/>} />
      </Routes>
    </Router>
  );
}

export default App;
