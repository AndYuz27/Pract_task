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

      <Link to="/Pract_task" className="hdr_link">Account</Link>
      <Link to="/Pract_task/cat" className="hdr_link">Catalog</Link>
      <Link to="/Pract_task/psetup" className="hdr_link">Parse Settings</Link>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/Pract_task" element={<Home/>}/>
        <Route path="/Pract_task/cat" element={<Catalog/>}/>
        <Route path="/Pract_task/psetup" element={<ParserSetup/>}/>
        <Route path="/Pract_task/search" element={<Search/>}/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
