import { Footer, Homepage, Navbar } from "./components/index";
import './App.css'

function App() {
  return (
    <div className="w-screen">
      <Navbar />
      <Homepage />
      <Footer/>
    </div>
  );
}

export default App;
