
import './App.css';
import Contatos from './components/Contatos/Contatos';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Contatos />
      <Footer />
    </div>
  );
}

export default App;
