import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { FAQ } from "./components/FAQ";
import Goals from "./components/Goals";
import Quotes from "./components/Quotes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <FAQ />
      <Goals />
      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
