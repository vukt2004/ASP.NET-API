import { Route, Routes } from "react-router-dom";
import Navbar from './Page/Navbar';
import Home from './Page/Home';

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />}/>
      </Route>
    </Routes>
  )
}

export default App
