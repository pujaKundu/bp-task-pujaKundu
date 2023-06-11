import { About, Advertise, Affiliate, Contact, FAQ, Footer, Homepage, Navbar, NotFound, Privacy, Terms } from "./components/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="w-[98.6vw]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
