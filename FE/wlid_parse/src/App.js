import './App.css';
import {Link, Route, Routes} from "react-router-dom"
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import ParserSetup from './pages/ParserSetup/ParserSetup';
import Search from './pages/Search/Search';
function App() {
  return (
    <div className="App">
{/* <h1>It's works</h1> */}
    <header>
      <div className='logo'>
      <Link to="/" className="hdr_link"><h2>WB-Parse</h2></Link>
      </div>
      <nav>

      <Link to="/" className="hdr_link">Account</Link>
      <Link to="/cat" className="hdr_link">Catalog</Link>
      <Link to="/psetup" className="hdr_link">Parse Settings</Link>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cat" element={<Catalog/>}/>
        <Route path="/psetup" element={<ParserSetup/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
