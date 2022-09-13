import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Apps from './Components/Home/Apps/Apps';
import Career from "./Components/Home/Career/Career";
import Contract from "./Components/Home/Contract/Contract";
import Coures from './Components/Home/Courses/Coures';
import HireForm from './Components/Home/HireForm/HireForm';
import Home from './Components/Home/Home';
import Navbar from "./Components/Home/NavBar/Navbar";

function App() {
  return (
    <div>
    <Router>
      <Navbar></Navbar>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="home" element={<Home />} />
         <Route path="apps" element={<Apps />} />
         <Route path="courses" element={<Coures />} />
         <Route path="hireForm" element={<HireForm />} />
         <Route path="contract" element={<Contract />} />
         <Route path="career" element={<Career />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
