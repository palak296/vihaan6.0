// import react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
// import pages
// import components

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-100 h-screen">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/about">
            <Route index element={<About />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
