import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Importance from "./components/Importance/Importance";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/importancia" element={<Importance />} />
      </Routes>
    </Router>
  );
}

export default App;
