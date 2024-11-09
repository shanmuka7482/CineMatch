import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./Login/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
