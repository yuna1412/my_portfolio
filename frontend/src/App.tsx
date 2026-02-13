import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Navigate from "./components/layout/Navigate";
import Footer from "./components/layout/Footer";
// import Template from "./pages/Template";
import Top from "./pages/top/Page";
import Projects from "./pages/projects/Page";
import Log from "./pages/log/Page";
import Profile from "./pages/profile/Page";
import ProjectsDetail from "./pages/projects/detail/Page";

export default function App() {
  return (
    <>
      <Header />
      <Navigate />
      
      <Routes>
        {/* <Route path="/" element={<Template />} /> */}
        <Route path="/" element={<Top />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/detail" element={<ProjectsDetail />} />
        <Route path="/log" element={<Log />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </>
  );
}


