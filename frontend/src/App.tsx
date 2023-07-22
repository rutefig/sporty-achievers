import "./App.css";
import { LandingPage } from "./LandingPage";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import  { Profile }  from "./Profile";
import { Layout } from "./Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>   
    </>
  );
}

export default App;
