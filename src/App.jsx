import React from "react";
import Home from "./pages/Home";
import FeaturesPage from "./pages/FeaturesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
          <Route path="features" element={<FeaturesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
