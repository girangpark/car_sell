import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./main";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./product";
import UploadPage from "./upload";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detailView/:p_id" element={<ProductPage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
