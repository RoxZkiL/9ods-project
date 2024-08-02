import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Importance from "./components/Importance/Importance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="/inicio" element={<LandingPage />} />
        <Route path="/importancia" element={<Importance />} />
      </Routes>
    </Router>
  );
}

export default App;
