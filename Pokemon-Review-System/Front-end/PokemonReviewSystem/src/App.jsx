import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./page/Navbar";
import Home from "./page/Home";
import Contact from "./page/Contact";
import About from "./page/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
