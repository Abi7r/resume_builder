import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import ResumeGenertaor from "./pages/ResumeGenerator";
import History from "./pages/History";
import LandingPage from "./pages/LandingPage";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="/resume-generator" element={<ResumeGenertaor />} />
        <Route path="/history" element={<History />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
