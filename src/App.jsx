import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Homepage, GonzaloRinconGutierrez, Page404 } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/museo-arqueologico-gonzalo-rincon-guitierrez"
            element={<GonzaloRinconGutierrez />}
          />
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
