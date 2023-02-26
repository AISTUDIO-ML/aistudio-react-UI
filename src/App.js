import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.slim.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import "./components/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Dashboard } from "./pages";

import {
  Login,
  Header,
  SignUp,
  MoreSteps,
  PaymentDetails,
  Hosting,
  Main,
  DataConnection,
  SelectDataStore,
  SelectDataUrl,
  ShowAdvOpt,
  Advanceoption01,
  SelectAdvOption,
  MainLearnMore,
  Statistics,
  StatisticsExpand,
  Advanceoption02,
  Advanceoption03,
  Advanceoption04,
  ProjectUpdates,
  ProjectDetails,
  OverView,
  OverView01,
  OverView02,
  Experiment01,
  Experiment02,
  Experiment03,
  Model01,
  Model02,
  Model03,
} from "./components";

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

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/dataConnection" element={<DataConnection />} />
            <Route path="/selectDataStore" element={<SelectDataStore />} />
            <Route path="/selectDataUrl" element={<SelectDataUrl />} />
            <Route path="/showAdvOption" element={<SelectAdvOption />} />
            <Route path="/mainLearnMore" element={<MainLearnMore />} />

            <Route path="/statistics" element={<Statistics />} />
            <Route path="/statistics_expand" element={<StatisticsExpand />} />

            <Route path="/advanceoption01" element={<Advanceoption01 />} />
            <Route path="/advanceoption02" element={<Advanceoption02 />} />
            <Route path="/advanceoption03" element={<Advanceoption03 />} />
            <Route path="/advanceoption04" element={<Advanceoption04 />} />

            <Route path="/projects_update" element={<ProjectUpdates />} />
            <Route path="/projectdetails" element={<ProjectDetails />} />

            <Route path="/overview" element={<OverView />} />
            <Route path="/overview01" element={<OverView01 />} />
            <Route path="/overview02" element={<OverView02 />} />

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
