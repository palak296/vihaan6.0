// import react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Events from "./pages/events";
import Communities from "./pages/communities";
import Profile from "./pages/profile";
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
          <Route path="/communities">
            <Route index element={<Communities />} />
          </Route>{" "}
          <Route path="/events">
            <Route index element={<Events />} />
          </Route>{" "}
          <Route path="/profile">
            <Route index element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
