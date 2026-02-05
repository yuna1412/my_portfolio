import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigate from "./components/Navigate";
import Footer from "./components/Footer";
import Template from "./pages/Template";
// import Top from "./pages/Top";
// import About from "./About";

export default function App() {
  return (
    <>
      <Header />
      <Navigate />
      
      <Routes>
        <Route path="/" element={<Template />} />
        {/* <Route path="/" element={<Top />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>

      <Footer />
    </>
  );
}


