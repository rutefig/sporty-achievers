import "./App.css";
import { LandingPage } from "./LandingPage";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import  Profile  from "./Profile";

function App() {
  return (
    <>
      <Routes>
          <Route index element={<LandingPage />} />
          <Route path="profile" element={<Profile />} />
      </Routes>    </>
  );
}

export default App;
