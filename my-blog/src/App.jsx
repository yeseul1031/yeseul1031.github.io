import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Study from './components/pages/Study';
import About from './components/pages/About';
import Wallet from './components/pages/Wallet';
function App() {
    return (<div className="app-root">
      <Header />
      <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/study" element={<Study />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/wallet" element={<Wallet />}/>
      </Routes>
      </div>
      <Footer />
      </div>);
}
export default App;
