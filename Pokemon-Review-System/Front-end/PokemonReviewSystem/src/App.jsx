import { Route, Routes } from "react-router-dom";
import Navbar from './Page/Navbar';
import Home from './Page/Home';
import Contact from "./Page/Contact";
import About from "./Page/About";

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
