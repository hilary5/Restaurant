import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import WithSubnavigation from "./components/NavBar";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div>
      <WithSubnavigation />
      <Routes>
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Sign-in" element={<LoginForm />} />
        <Route path="/Sign-Up" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
