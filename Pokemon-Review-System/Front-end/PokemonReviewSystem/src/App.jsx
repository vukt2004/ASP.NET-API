import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./page/Navbar";
import Home from "./Page/Home";
import Contact from "./page/Contact";
import About from "./page/About";
import ErrorPage from "./Page/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
