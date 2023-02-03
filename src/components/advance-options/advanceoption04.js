import React from "react";
import { Link } from "react-router-dom";
import dot1 from '../assets/images/dot1.png';
import dot2 from '../assets/images/dot2.png';
import worker from '../assets/images/worker.png';
import worker01 from '../assets/images/worker_01.png';
import status from '../assets/images/status.png';
import status01 from '../assets/images/status_01.png';
import tickmark from '../assets/images/tickmark.png';
import icnTgleLft from '../assets/images/icn_tgle_lft.png';
import icnInfo01 from '../assets/images/icn_info_01.png';
import MainHeader from "../header/MainHeader";

function Advanceoption04() {

  return (
    <><MainHeader/>
    <section className="advance-option">
    <div className="row">
      <div className="col col-md-8 col-lg-9 main-section">
        <a href="#" className="back"><i className="fa fa-angle-left"></i> Back</a>
        <br/><br/><br/>
        <h5>Advanced Options</h5>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Partitioning</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="smart-tab" data-bs-toggle="tab" href="#smart" role="tab" aria-controls="smart" aria-selected="false">Smart Downsampling</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="feature-tab" data-bs-toggle="tab" href="#feature" role="tab" aria-controls="feature" aria-selected="false">Feature Consraints</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link active" id="additional-tab" data-bs-toggle="tab" href="#additional" role="tab" aria-controls="additional" aria-selected="false">Additional</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
            <h5>Select partitioning method:</h5>
            <ul className="nav nav-pills mbw-3 mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" id="pills-random-tab" data-bs-toggle="pill" href="#pills-random" role="tab" aria-controls="pills-random" aria-selected="true">Random</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="pills-partition-tab" data-bs-toggle="pill" href="#pills-partition" role="tab" aria-controls="pills-partition" aria-selected="false">Partition Feature</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="pills-group-tab" data-bs-toggle="pill" href="#pills-group" role="tab" aria-controls="pills-group" aria-selected="false">Group</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="pills-date-tab" data-bs-toggle="pill" href="#pills-date" role="tab" aria-controls="pills-date" aria-selected="false">Date/Time</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="pills-stratified-tab" data-bs-toggle="pill" href="#pills-stratified" role="tab" aria-controls="pills-stratified" aria-selected="false">Stratified</a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-random" role="tabpanel" aria-labelledby="pills-random-tab">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
              </div>
              <div className="tab-pane fade" id="pills-partition" role="tabpanel" aria-labelledby="pills-partition-tab">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
              </div>
              <div className="tab-pane fade" id="pills-group" role="tabpanel" aria-labelledby="pills-group-tab">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
              </div>
              <div className="tab-pane fade" id="pills-date" role="tabpanel" aria-labelledby="pills-date-tab">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
              </div>
              <div className="tab-pane fade" id="pills-stratified" role="tabpanel" aria-labelledby="pills-stratified-tab">
                <p>Rows are assigned in a way that ensures similar target distribution across each partition.</p>
              </div>
            </div>

            <h5>Run models using:</h5>
            <ul className="nav nav-pills mbw-2 mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" id="pills-cross-tab" data-bs-toggle="pill" href="#pills-cross" role="tab" aria-controls="pills-cross" aria-selected="true">Cross-validation</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="pills-train-tab" data-bs-toggle="pill" href="#pills-train" role="tab" aria-controls="pills-train" aria-selected="false">Train-Validation-Holdout</a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-cross" role="tabpanel" aria-labelledby="pills-cross-tab">
                <div className="row">
                  <div className="col">
                    <h5>Number of cross-validation (CV) folds:</h5>
                    <p>The number of CV folds defined<br/> between 2 - 50.</p>
                    <div className="box">
                      <h6>5</h6>
                      <div className="progress">
                        <div className="progress-bar bg-vlot" role="progressbar" style={{width: "15%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="50"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <h5>Holdout percentage:</h5>
                    <p>The percentage of data allocated to the holdout set -- must be between 0% - 98%.</p>
                    <div className="box">
                      <h6>20</h6>
                      <div className="progress">
                        <div className="progress-bar bg-pch" role="progressbar" style={{width: "30%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="50"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="box holdout">
                      <span><img src={dot1} alt=""/> CV Folds</span> &nbsp; <span>
                        <img src={dot2} alt=""/> Holdout</span>
                      <div className="progress">
                        <div className="progress-bar bg-vlot" role="progressbar" style={{width: "20%" , marginRight:"5px"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="20"></div>
                        <div className="progress-bar bg-vlot" role="progressbar" style={{width: "20%" , marginRight:"5px"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="20"></div>
                        <div className="progress-bar bg-vlot" role="progressbar" style={{width: "20%" , marginRight:"5px"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="20"></div>
                        <div className="progress-bar bg-vlot" role="progressbar" style={{width: "20%" , marginRight:"5px"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="20"></div>
                        <div className="progress-bar bg-pch" role="progressbar"  style={{width: "20%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="20"></div>
                      </div>
                      <div className="percent">
                          <span className="float-left">0%</span> 50% <span className="float-right">100%</span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-train" role="tabpanel" aria-labelledby="pills-train-tab">
                <p>Train-Validation-Holdout</p>
              </div>
            </div>

          </div>
          <div className="tab-pane fade" id="smart" role="tabpanel" aria-labelledby="smart-tab">
            <h5><img src={icnTgleLft} alt=""/> Downsample Data</h5>
            <p>For classNameification or zero-inflated regression problems this will allow you to downsample the majority className in order to build faster models with similar accuracy.</p>
            <br/>

            <h5>Run models using:</h5>
            <ul className="nav nav-pills mbw-2 mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" id="pills-explore-tab" data-bs-toggle="pill" href="#pills-explore" role="tab" aria-controls="pills-explore" aria-selected="true">Explore</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="pills-trainVH-tab" data-bs-toggle="pill" href="#pills-trainVH" role="tab" aria-controls="pills-trainVH" aria-selected="false">Train-Validation-Holdout</a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-explore" role="tabpanel" aria-labelledby="pills-explore-tab">
                <div className="row">
                  <div className="col col-md-6">
                    <br/><br/>
                    <h5>Majority className downsampling percentage:</h5>
                    <p>This must be between 66% - 100%.</p>
                    <div className="box">
                      <h6>100</h6>
                      <div className="progress">
                        <div className="progress-bar bg-vlot" role="progressbar" style={{width: "25%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="50"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="box holdout">
                      <span><img src={dot1} alt=""/> CV Folds</span> &nbsp; <span>
                        <img src={dot2} alt=""/> Holdout</span>
                      <div className="progress">
                        <div className="progress-bar bg-vlot" role="progressbar" style={{width: "20%", marginRight:"5px"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="20"></div>
                        <div className="progress-bar bg-vlot" role="progressbar" style={{width: "20%", marginRight:"5px"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="20"></div>
                        <div className="progress-bar bg-vlot" role="progressbar" style={{width: "10%", marginRight:"0px"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="10"></div>
                        <div className="progress-bar bg-pch" role="progressbar" style={{width: "10%" , marginLeft:"-5px", marginRight:"5px"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="10"></div>
                        <div className="progress-bar bg-pch" role="progressbar" style={{width: "20%", marginRight:"5px"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="20"></div>
                        <div className="progress-bar bg-pch" role="progressbar" style={{width: "20%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="20"></div>
                      </div>
                      <div className="percent">
                          <span className="float-left">0%</span> 50% <span className="float-right">100%</span>
                        </div>
                    </div>
                  </div>
                  <div className="col-12 result">
                    <br/>
                    <h5>Result of downsampling for 10,000 total nonmissing rows:</h5>
                    <p>Minority rows 9 999 (of original 7 777)</p>
                    <p>Minority rows 9 999 (of original 7 777)</p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-trainVH" role="tabpanel" aria-labelledby="pills-trainVH-tab">
                <p>Train-Validation-Holdout</p>
              </div>
            </div>

          </div>
          <div className="tab-pane fade" id="feature" role="tabpanel" aria-labelledby="feature-tab">
            <h5>Feature Consraints</h5>
          </div>
          <div className="tab-pane fade show active" id="additional" role="tabpanel" aria-labelledby="additional-tab">
            <h5>Optimization Metric</h5>
            <p>The optimization metric determines how your models are scored</p>
            <form>
              <div className="row">
                <div className="form-group col-md-7 recom">
                  <select className="form-control">
                    <option>LogLoss (Accuracy)</option>
                  </select>
                  <span>recommended</span>
                </div>
              </div>
            </form>
            <p><img src={icnInfo01} alt=""/> Logarithmic Loss:  Measures the inaccuracy of predicted probabilities</p><br/>
            <hr/>
            <br/>
            <div className="automation">
              <h5>Automation Settings</h5>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" checked/>
                <label className="custom-control-label" for="customCheck1">Search for interactions 
                <img src={icnInfo01} alt=""/></label>
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck2" checked/>
                <label className="custom-control-label" for="customCheck2">Create blenders from top models 
                <img src={icnInfo01} alt=""/></label>
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                <label className="custom-control-label" for="customCheck3">Include only SHAP-supported blueprints
                 <img src={icnInfo01} alt=""/></label><br/>
                <span>* This option cannot be used if’Create blenders from<br/> top models’ is checked.</span>
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck4" checked/>
                <label className="custom-control-label" for="customCheck4">Recommend and prepare a model for deployment <img src={icnInfo01} alt=""/></label>
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck5"/>
                <label className="custom-control-label" for="customCheck5">Include blenders when recommending a model <img src={icnInfo01} alt=""/></label>
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck6"/>
                <label className="custom-control-label" for="customCheck6">Use accuracy-optimized metablueprint (these models are EXTREMELY SLOW!) <img src={icnInfo01} alt=""/></label>
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck7" checked/>
                <label className="custom-control-label" for="customCheck7">Include scaleout models 
                <img src={icnInfo01} alt=""/></label>
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck8" checked/>
                <label className="custom-control-label" for="customCheck8">Run Autopilot on feature list with  target leakage removed <img src={icnInfo01} alt=""/></label>
              </div>
            </div>
            <br/>
            <hr/>
            <br/>

            <h5>Optimization Metric</h5>
            <form>
              <div className="row">
                <div className="form-group col-md-7 recom">
                  <input className="form-control" type="text" placeholder="Default" required/>
                </div>
              </div>
            </form>
            <p className="note"><img src={icnInfo01} alt=""/> Because this dataset has fewer than 50 000 rows,<br/> &nbsp; &nbsp;  Autopilot will automatically compute cross-validation scores.</p>
            <br/>
            <hr/>
            <br/>

            <h5>Upper-bound running time <img src={icnInfo01} alt=""/></h5>
            <form>
              <div className="row">
                <div className="form-group col-md-7 recom">
                  <input className="form-control" type="text" placeholder="3" required/>
                </div>
              </div>
            </form>
            <br/>
            <hr/>
            <br/>

            <h5>Positive className Assigment</h5>
            <p style={{fontSize: "16px"}}>Select the positive className to use for the target feature readmitted.</p>
            <div className="custom-control custom-radio custom-spc">
              <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
              <label className="custom-control-label" for="customRadio1">False</label>
            </div>
            <div className="custom-control custom-radio custom-spc">
              <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" checked/>
              <label className="custom-control-label" for="customRadio2">True</label>
            </div>
            <br/>
            <hr/>
            <br/>

            <h5>Weight</h5>
            <p style={{fontSize: "16px"}}>Differentially weight some observations when calculating error metrics.</p>
            <form>
              <div className="row">
                <div className="form-group col-md-7 recom">
                  <input className="form-control" type="text" placeholder="Begin typing to choose feature"/>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
      <div className="col col-md-4 col-lg-3 sidebar bdr-lft">
        <div className="col-12 worker">
          <h6><img src={worker} alt="" className="float-left stat"/>
            <img src={worker01} alt="" className="float-left drk"/>Workers</h6>
          <p>Using <span>2</span> out of 10 workers across all projects.</p>
          <hr/>
        </div>
        <div className="col-12 worker">
          <h6><img src={status} alt="" className="float-left stat"/> 
          <img src={status01} alt="" className="float-left drk"/>Status</h6>
          <ul>
            <li>1. Uploading Data 
                <img src={tickmark} alt="" className="float-right"/></li>
            <li>2. Reading raw data (Quick)
                 <img src={tickmark} alt="" className="float-right"/><br/>
              <span>(24.344 sec.)</span></li>
            <li>3.Exploratory Data Analysis
                <img src={tickmark} alt="" className="float-right"/><br/>
              <span>(13.323 sec.)</span></li>
          </ul>
          <hr/>
        </div>
        <div className="col-12 worker">
          <h6>Action</h6>
          <a href="#"> <i className="fa fa-bullseye "></i> Select target</a>
        </div>
      </div>
    </div>

     <div className="row">
     <div className="col-md-12" style={{paddingTop:"15px"}}>
            <Link to="/projects_update" className="col-md-12 btn-block" routerLinkActive="activebutton">
                    <button className="btn btn-primary mx-auto" style={{width:"100%",maxWidth:"1280px"}}>Next Page of Product
                        Demo</button>
                </Link>
            </div>
      </div>
  </section>
  </>
  );
}

export default Advanceoption04;
