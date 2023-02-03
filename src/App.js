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
import DataConnection from "./components/data_connection/dataConnection";
import SelectDataStore from "./components/data_connection/selectDataStore";
import SelectDataUrl from "./components/data_connection/selectDataUrl";
import SelectAdvOption from "./components/data_connection/showAdvOpt";
import MainHeader from "./components/header/MainHeader";
import Advanceoption01 from "./components/advance-options/advanceoption01";
import Advanceoption02 from "./components/advance-options/advanceoption02";
import Advanceoption03 from "./components/advance-options/advanceoption03";
import Advanceoption04 from "./components/advance-options/advanceoption04";
import OverView from "./components/overview/overview";
import OverView01 from "./components/overview/overview01";
import OverView02 from "./components/overview/overview02";
import Statistics from "./components/statistics/statistics";
import StatisticsExpand from "./components/statistics/statistics_expand";
import ProjectUpdates from "./components/project-updates/updates";

function App() {
  return (
    <>
    <div class="container">
      <BrowserRouter>
      <MainHeader/>
        {/* <Header /> */}
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/moreSteps" element={<MoreSteps />} />
          <Route path="/paymentDetails" element={<PaymentDetails />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/main" element={<Main />} />
          <Route path="/dataConnection" element={<DataConnection />} />
          <Route path="/selectDataStore" element={<SelectDataStore />} />
          <Route path="/selectDataUrl" element={<SelectDataUrl/>} />
          <Route path="/showAdvOption" element={<SelectAdvOption/>} />
          <Route path="/advanceoption01" element={<Advanceoption01/>} />
          <Route path="/advanceoption02" element={<Advanceoption02/>} />
          <Route path="/advanceoption03" element={<Advanceoption03/>} />
          <Route path="/advanceoption04" element={<Advanceoption04/>} />
          <Route path="/overview" element={<OverView/>} />
          <Route path="/overview01" element={<OverView01/>} />
          <Route path="/overview02" element={<OverView02/>} />
          <Route path="/statistics" element={<Statistics/>} />
          <Route path="/statistics_expand" element={<StatisticsExpand/>} />
          <Route path="/projects_update" element={<ProjectUpdates/>} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
