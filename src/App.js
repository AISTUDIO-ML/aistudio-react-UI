import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.slim.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"; 
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
import Experiment01 from "./components/experiments/Experiment01";
import Experiment02 from "./components/experiments/Experiment02";
import Experiment03 from "./components/experiments/Experiment03";
import Model01 from "./components/model/Model01";
import Model02 from "./components/model/Model02";
import Model03 from "./components/model/Model03";
import ProjectDetails from "./components/project-details/ProjectDetails";
import MainLearnMore from "./components/data_connection/main-learn-more.component";


function App() {




  return (
    <>
    
    <div class="container">
      <BrowserRouter>        
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
          <Route path="/mainLearnMore" element={<MainLearnMore/>} />

          <Route path="/statistics" element={<Statistics/>} />
          <Route path="/statistics_expand" element={<StatisticsExpand/>} />

          <Route path="/advanceoption01" element={<Advanceoption01/>} />
          <Route path="/advanceoption02" element={<Advanceoption02/>} />
          <Route path="/advanceoption03" element={<Advanceoption03/>} />
          <Route path="/advanceoption04" element={<Advanceoption04/>} />

          <Route path="/projects_update" element={<ProjectUpdates/>} />
          <Route path="/projectdetails" element={<ProjectDetails />} />

          <Route path="/overview" element={<OverView/>} />
          <Route path="/overview01" element={<OverView01/>} />
          <Route path="/overview02" element={<OverView02/>} />


          <Route path="/experiment01" element={<Experiment01 />} />
          <Route path="/experiment02" element={<Experiment02 />} />
          <Route path="/experiment03" element={<Experiment03 />} />
          <Route path="/model01" element={<Model01 />} />
          <Route path="/model02" element={<Model02 />} />
          <Route path="/model03" element={<Model03 />} />





        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
