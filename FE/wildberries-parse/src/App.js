import './App.css';
import {Link, Route, Routes} from "react-router-dom"
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
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
      <Link to="/" className="hdr_link">Parse Settings</Link>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cat" element={<Catalog/>}/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
