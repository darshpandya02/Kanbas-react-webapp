import logo from "./logo.svg";
import "./App.css";
import Kanbas from "./Kanbas";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { Link } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div>
        {/* <Link to="/Hello">Hello World</Link><br />
        <Link to="/Labs">Labs</Link><br />
        <Link to="/Kanbas">Kanbas</Link><br /> */}
        <Routes>
          <Route path="/" element={<Navigate to="/Kanbas" />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
        {/* <HelloWorld />
        <Labs />
        <Kanbas /> */}
      </div>
    </HashRouter>
  );
}

export default App;
