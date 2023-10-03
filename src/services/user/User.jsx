import { Routes, Route } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Home from "../../routes/home/Home";

const User = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default User;
