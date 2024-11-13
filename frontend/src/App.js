import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import ForgotPassword from "./Login/ForgotPassword";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Content from "./Content/Content";
import MoviesDescbie from "./MoviesDescbie";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/content" element={<Content/>}/>
          <Route path="/Movie" element={<MoviesDescbie/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
