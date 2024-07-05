import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { FAQ } from "./components/FAQ";
import Quotes from './components/Quotes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <FAQ />
      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
