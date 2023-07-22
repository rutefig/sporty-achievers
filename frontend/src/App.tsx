import "./App.css";
import { LandingPage } from "./LandingPage";
import { Routes, Route } from "react-router-dom";
import { Profile } from "./Profile";
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
