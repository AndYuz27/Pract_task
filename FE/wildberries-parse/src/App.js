import './App.css';
import {Link, Route, Routes} from "react-router-dom"
import Home from './pages/Home/Home';
function App() {
  return (
    <div className="App">
{/* <h1>It's works</h1> */}
    <header>
      <div className='logo'>
        <h2>WB-Parse</h2>
      </div>
      <nav>

      <Link to="/" className="hdr_link">Account</Link>
      <Link to="/" className="hdr_link">Catalog</Link>
      <Link to="/" className="hdr_link">Parse Settings</Link>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
