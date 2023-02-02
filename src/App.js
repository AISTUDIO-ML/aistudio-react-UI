import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js"; 
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.js"; 
import "bootstrap/dist/js/bootstrap";
import $ from "jquery";
import "./components/style.css";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import SignUp from "./components/signup/SignUp";
import MoreSteps from "./components/signup/MoreSteps";
import PaymentDetails from "./components/signup/PaymentDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hosting from "./components/hosting/Hosting";
import Main from "./components/main/Main";
import Experiment01 from "./components/experiments/Experiment01";
import Experiment02 from "./components/experiments/Experiment02";
import Experiment03 from "./components/experiments/Experiment03";
import Model01 from "./components/model/Model01";
import Model02 from "./components/model/Model02";
import Model03 from "./components/model/Model03";

import ProjectDetails from "./components/project-details/ProjectDetails";


function App() {
  return (
    <>
    <div class="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/moreSteps" element={<MoreSteps />} />
          <Route path="/paymentDetails" element={<PaymentDetails />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/main" element={<Main />} />

          <Route path="/experiment01" element={<Experiment01 />} />
          <Route path="/experiment02" element={<Experiment02 />} />
          <Route path="/experiment03" element={<Experiment03 />} />

          <Route path="/model01" element={<Model01 />} />
          <Route path="/model02" element={<Model02 />} />
          <Route path="/model03" element={<Model03 />} />


          <Route path="/projectdetails" element={<ProjectDetails />} />



        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
