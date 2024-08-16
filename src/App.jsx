import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Contact from "./components/Contact/Contact";
import Importance from "./components/Importance/Importance";
import Register from "./components/Forms/RegisterForm/Register";
import Login from "./components/Forms/LoginForm/Login";
import Blog from "./components/Blog/Blog";
import TipDetail from "./components/Blog/TipDetail";
import News from "./components/News/News";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="/inicio" element={<LandingPage />} />
        <Route path="/importancia" element={<Importance />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<TipDetail />} />
        <Route path="/noticias" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
