import { Route, Routes } from "react-router-dom";
import Navbar from './page/Navbar';
import Home from './page/Home';
import Contact from "./page/Contact";
import About from "./page/About";

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
      </Route>
    </Routes>
  )
}

export default App
