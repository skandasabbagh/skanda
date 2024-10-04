import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import AboutPage from "./pages/aboutPage";
import ProjectsPage from "./pages/projectsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
