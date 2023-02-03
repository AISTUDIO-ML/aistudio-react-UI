import React from "react";
import { Link } from "react-router-dom";
import tickmark from '../assets/images/tickmark.png';
import arrowLeft from '../assets/images/arrow-left.png';
import diagram03 from '../assets/images/diagram_03.png';
import diagram04 from '../assets/images/diagram_04.png';
import upload from '../assets/images/upload.png';
import MainHeader from "../header/MainHeader";

function OverView() {

  return (
    <><MainHeader/>
    <section className="experiment">
    <div className="row">
        <div className="col">
            <a href="#" className="arow-left">
                <img src={arrowLeft} alt=""/></a>
            <h2>Autokeras Structured Data regresion</h2>
        </div>
    </div>
    <div className="top-panel btmspc">
        <div className="row">
            <div className="col col-md-5 col-lg-5 archive">
                <a href="#">Training</a> <a href="#" className="grntxt">
                    <img src={tickmark}
                        alt=""/> Published</a> <a href="#">By George Fields</a>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col">
                        <ul className="nav nav-tabs mvlrgt" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="overview-tab" data-bs-toggle="tab" href="#overview"
                                    role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="execution-tab" data-bs-toggle="tab" href="#execution" role="tab"
                                    aria-controls="execution" aria-selected="false">execution</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="configuration-tab" data-bs-toggle="tab" href="#configuration"
                                    role="tab" aria-controls="configuration" aria-selected="false">Configuration</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="artifacts-tab" data-bs-toggle="tab" href="#artifacts" role="tab"
                                    aria-controls="artifacts" aria-selected="false">Artifacts</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="info-tab" data-bs-toggle="tab" href="#info" role="tab"
                                    aria-controls="info" aria-selected="false">Info</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="results-tab" data-bs-toggle="tab" href="#results" role="tab"
                                    aria-controls="results" aria-selected="false">Results</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
            <ul className="nav nav-pills mnu-button mb-3 lftclear" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="pills-random-tab" data-bs-toggle="pill" href="#pills-random" role="tab"
                        aria-controls="pills-random" aria-selected="true">Explore</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="pills-partition-tab" data-bs-toggle="pill" href="#pills-partition" role="tab"
                        aria-controls="pills-partition" aria-selected="false">Understand</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="pills-group-tab" data-bs-toggle="pill" href="#pills-group" role="tab"
                        aria-controls="pills-group" aria-selected="false">Predict</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="pills-date-tab" data-bs-toggle="pill" href="#pills-date" role="tab"
                        aria-controls="pills-date" aria-selected="false">Compliance</a>
                </li>
            </ul>
            <div className="box btnspcr">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <h4>Selection summary</h4>
                        </div>
                        <div className="col txtright">
                            <a href="#" className="export">Export <img src={upload}
                                    alt=""/></a>
                        </div>
                    </div>
                </div>
                <div className="summary">
                    <div className="row">
                        <div className="col">
                            <h5>0.616</h5>
                            <p>F1 Score</p>
                        </div>
                        <div className="col">
                            <h5>0.716</h5>
                            <p>True Positive Rate (Sensitivity)</p>
                        </div>
                        <div className="col">
                            <h5>0.4132</h5>
                            <p>False Positive Rate (Fallout)</p>
                        </div>
                        <div className="col">
                            <h5>0.5132</h5>
                            <p>True Negative Rate (Specificity)</p>
                        </div>
                        <div className="col">
                            <h5>0.51099</h5>
                            <p>Positive Predictive<br/> Value (Precision)</p>
                        </div>
                        <div className="col">
                            <h5>0.77099</h5>
                            <p>Negative<br/> Predictive Value</p>
                        </div>
                        <div className="col">
                            <h5>0.6719</h5>
                            <p>Accuracy</p>
                        </div>
                        <div className="col">
                            <h5>0.6719</h5>
                            <p>Matthews Correlation<br/> Coefficient</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="box">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <h3>ROC Curve</h3>
                                    <br/>
                                </div>
                                <div className="col cross">
                                    <div className="float-right">
                                        <a href="#">Cross validation <i className="fa fa-caret-down"></i></a><br/>
                                        <span>Data selection</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <img src={diagram03} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="box">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <h3>Predicition Distribution</h3>
                                </div>
                                <div className="col cross">
                                    <a href="#">Threshold set <i className="fa fa-caret-down"></i></a><br/>
                                    <span className="set">0.314</span>
                                </div>
                                <div className="col-12">
                                    <img src={diagram03} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="box">
                        <div className="col">
                            <div className="row">
                                <div className="col col-md-4">
                                    <h3>Cumulative Charts</h3>
                                </div>
                                <div className="col cross">
                                    <div className="row">
                                        <div className="col">
                                            <a href="#">Cumulative Gain <i className="fa fa-caret-down"></i></a><br/>
                                            <span>Chart type</span>
                                        </div>
                                        <div className="col col-md-5">
                                            <a href="#">Positive <i className="fa fa-caret-down"></i></a><br/>
                                            <span>className</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <img src={diagram04} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tab-pane fade" id="execution" role="tabpanel" aria-labelledby="execution-tab">
            <p>Execution content here.....</p>
        </div>
        <div className="tab-pane fade" id="configuration" role="tabpanel" aria-labelledby="configuration-tab">
            <p>Configuration content here.....</p>
        </div>
        <div className="tab-pane fade" id="artifacts" role="tabpanel" aria-labelledby="artifacts-tab">
            <p>Artifacts content here.....</p>
        </div>
        <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
            <p>Info content here.....</p>
        </div>
        <div className="tab-pane fade" id="results" role="tabpanel" aria-labelledby="results-tab">
            <p>Results content here.....</p>
        </div>
    </div>

    <div className="row">
    <div className="col-md-12" style={{paddingTop:"15px"}}>
            <Link to="/overview01" className="col-md-12 btn-block" routerLinkActive="activebutton">
                    <button className="btn btn-primary mx-auto" style={{width:"100%",maxWidth:"1280px"}}>Next Page of Product
                        Demo</button>
                </Link>
            </div>
    </div>
</section>
</>
  );
}

export default OverView;
