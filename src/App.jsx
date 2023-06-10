import { About, Advertise, Contact, Footer, Homepage, Navbar, Privacy, Terms } from "./components/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          {/* <Route path="/" element={<Homepage />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
