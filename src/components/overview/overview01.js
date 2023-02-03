import React from "react";
import { Link } from "react-router-dom";
import dot1 from '../assets/images/dot1.png';
import dot3 from '../assets/images/dot3.png';
import dot4 from '../assets/images/dot4.png';
import icnArchive from '../assets/images/icn_archive.png';
import icnArchive01 from '../assets/images/icn_archive_01.png';
import icnSettings from '../assets/images/icn_settings.png';
import icnSettings01 from '../assets/images/icn_settings_01.png';
import icnRefreshCw from '../assets/images/icn_refresh_cw.png';
import icnRefreshCw01 from '../assets/images/icn_refresh_cw_01.png';
import map from '../assets/images/map.png';
import trendingUp from '../assets/images/trending-up.png';
import target from '../assets/images/target.png';
import zap from '../assets/images/zap.png';
import chevronsRight from '../assets/images/chevrons-right.png';
import share2 from '../assets/images/share-2.png';
import tickmark from '../assets/images/tickmark.png';
import avatar from '../assets/images/avatar.png';
import clock0l from '../assets/images/clock_0l.png';

function OverView01() {

    return (
        <section className="experiment">
            <div className="row">
                <div className="col">
                    <h2>Trains Examples (Example)</h2>
                </div>
                <div className="col txtright">
                    <a href="#" className="recent">Data Quality Assessment <i className="fa fa-caret-right"></i></a> <a href="#"
                        className="recent">Explore the data <i className="fa fa-caret-right"></i></a>
                </div>
            </div>
            <div className="quick-info">
                <div className="row">
                    <div className="col">
                        <img src={chevronsRight} alt=""/>
                            <p>Quick<br />
                                <span>Modeling mode</span>
                            </p>
                    </div>
                    <div className="col">
                        <img src={zap} alt=""/>
                            <p>Informative Features<br />
                                <span>Feature list</span>
                            </p>
                    </div>
                    <div className="col">
                        <img src={target} alt=""/>
                            <p>Readmitted<br />
                                <span>Readmited target</span>
                            </p>
                    </div>
                    <div className="col">
                        <img src={trendingUp} alt=""/>
                            <p>51<br />
                                <span>Features</span>
                            </p>
                    </div>
                    <div className="col">
                        <img src={share2} alt=""/>
                            <p>1000<br />
                                <span>Datapoints</span>
                            </p>
                    </div>
                    <div className="col">
                        <img src={map} alt=""/>
                            <p>None<br />
                                <span>Initial downsampling</span>
                            </p>
                    </div>
                </div>
            </div>
            <div className="top-panel btmspc">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col col-md-5">
                                <ul className="nav nav-tabs expils" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                            aria-controls="home" aria-selected="true">Experiments</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="models-tab" data-toggle="tab" href="#models" role="tab"
                                            aria-controls="models" aria-selected="false">Models</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <span className="tag-sdo ntpspc">
                                    <img src={dot3} width="6" alt=""/> Tag
                                    1</span> <span className="tag-sdo ntpspc">
                                         <img src={dot1} width="6" alt=""/>
                                        Tag Line 2</span> <span className="tag-sdo ntpspc"> 
                                        <img src={dot4} width="6"
                                            alt=""/> Tag 3</span>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-5 col-lg-4 archive txtright">
                        <a href="#"><img src={icnArchive} alt="" className="stat" />
                            <img src={icnArchive01} alt="" className="drk" /> Explore the data</a> <a
                                href="#"><img src={icnSettings} alt="" className="stat" />
                            <img
                                src={icnSettings01} alt="" className="drk" /> Settings</a> <a href="#">
                            <img
                                src={icnRefreshCw} alt="" className="stat" /><img
                                src={icnRefreshCw01} alt="" className="drk" /> Update</a>
                    </div>
                </div>
            </div>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row">
                        <div className="col mainpanel">
                            <div className="avpanel">
                                <a href="#">
                                    <div className="clearfix">
                                        <div className="head">Autokeras Structured Data regr..</div>
                                        <div className="publish"><img src={tickmark} width="12"
                                            alt="" /> Published</div>
                                    </div>
                                    <div className="clearfix">
                                        <div className="avatar">
                                            By <span><img src={avatar} alt="" /> George
                                                Fields</span>
                                        </div>
                                        <div className="edited">
                                            <img src={clock0l} alt="" /> Edited just now
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="avpanel">
                                <a href="#">
                                    <div className="clearfix">
                                        <div className="head">Autokeras Structured Data regr..</div>
                                        <div className="publish"><img src={tickmark} width="12"
                                            alt="" /> Published</div>
                                    </div>
                                    <div className="clearfix">
                                        <div className="avatar">
                                            By <span><img src={avatar} alt="" /> George
                                                Fields</span>
                                        </div>
                                        <div className="edited">
                                            <img src={clock0l} alt="" /> Edited just now
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="avpanel">
                                <a href="#">
                                    <div className="clearfix">
                                        <div className="head">Autokeras Structured Data regr..</div>
                                        <div className="publish"><img src={tickmark} width="12"
                                            alt="" /> Published</div>
                                    </div>
                                    <div className="clearfix">
                                        <div className="avatar">
                                            By <span><img src={avatar} alt="" /> George
                                                Fields</span>
                                        </div>
                                        <div className="edited">
                                            <img src={clock0l} alt="" /> Edited just now
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="avpanel">
                                <a href="#">
                                    <div className="clearfix">
                                        <div className="head">Autokeras Structured Data regr..</div>
                                        <div className="publish"><img src={tickmark} width="12"
                                            alt="" /> Published</div>
                                    </div>
                                    <div className="clearfix">
                                        <div className="avatar">
                                            By <span><img src={avatar} alt="" /> George
                                                Fields</span>
                                        </div>
                                        <div className="edited">
                                            <img src={clock0l} alt="" /> Edited just now
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="avpanel">
                                <a href="#">
                                    <div className="clearfix">
                                        <div className="head">Autokeras Structured Data regr..</div>
                                        <div className="publish"><img src={tickmark} width="12"
                                            alt="" /> Published</div>
                                    </div>
                                    <div className="clearfix">
                                        <div className="avatar">
                                            By <span><img src={avatar} alt="" /> George
                                                Fields</span>
                                        </div>
                                        <div className="edited">
                                            <img src={clock0l} alt="" /> Edited just now
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="avpanel">
                                <a href="#">
                                    <div className="clearfix">
                                        <div className="head">Autokeras Structured Data regr..</div>
                                        <div className="publish"><img src={tickmark} width="12"
                                            alt="" /> Published</div>
                                    </div>
                                    <div className="clearfix">
                                        <div className="avatar">
                                            By <span><img src={avatar} alt="" /> George
                                                Fields</span>
                                        </div>
                                        <div className="edited">
                                            <img src={clock0l} alt="" /> Edited just now
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col sidexp">
                            <div className="auto-date-box auto-trans">
                                <h4>Аutokeras Structured Data regresion</h4>
                                <div className="top-panel btmspc">
                                    <div className="row">
                                        <div className="col col-md-2 col-lg-2 archive">
                                            <span className="train">Training</span>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col">
                                                    <ul className="nav nav-tabs mvlrgt" id="myTab" role="tablist">
                                                        <li className="nav-item" role="presentation">
                                                            <a className="nav-link active" id="overview-tab" data-toggle="tab"
                                                                href="#overview" role="tab" aria-controls="overview"
                                                                aria-selected="true">Overview</a>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <a className="nav-link" id="execution-tab" data-toggle="tab"
                                                                href="#execution" role="tab" aria-controls="execution"
                                                                aria-selected="false">execution</a>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <a className="nav-link" id="configuration-tab" data-toggle="tab"
                                                                href="#configuration" role="tab" aria-controls="configuration"
                                                                aria-selected="false">Configuration</a>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <a className="nav-link" id="artifacts-tab" data-toggle="tab"
                                                                href="#artifacts" role="tab" aria-controls="artifacts"
                                                                aria-selected="false">Artifacts</a>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <a className="nav-link" id="info-tab" data-toggle="tab" href="#info"
                                                                role="tab" aria-controls="info" aria-selected="false">Info</a>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <a className="nav-link" id="results-tab" data-toggle="tab"
                                                                href="#results" role="tab" aria-controls="results"
                                                                aria-selected="false">Results</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="overview" role="tabpanel"
                                        aria-labelledby="overview-tab">
                                        <div className="row">
                                            <div className="col select">
                                                <div className="row">
                                                    <div className="col col-md-7">
                                                        <h4>Selection summary</h4>
                                                    </div>
                                                    <div className="col txtright">
                                                        <a href="#" className="export">Export
                                                            <img src="../../../../assets/images/upload.png" alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col col-md-7">
                                                <ul className="nav nav-pills pils-lft" id="pills-tab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <a className="nav-link active" id="pills-random-tab" data-toggle="pill"
                                                            href="#pills-random" role="tab" aria-controls="pills-random"
                                                            aria-selected="true">Explore</a>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <a className="nav-link" id="pills-partition-tab" data-toggle="pill"
                                                            href="#pills-partition" role="tab" aria-controls="pills-partition"
                                                            aria-selected="false">Understand</a>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <a className="nav-link" id="pills-group-tab" data-toggle="pill"
                                                            href="#pills-group" role="tab" aria-controls="pills-group"
                                                            aria-selected="false">Predict</a>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <a className="nav-link" id="pills-date-tab" data-toggle="pill"
                                                            href="#pills-date" role="tab" aria-controls="pills-date"
                                                            aria-selected="false">Compliance</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="sumry">
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
                                                    <p>Positive Predictive<br /> Value (Precision)</p>
                                                </div>
                                                <div className="col">
                                                    <h5>0.77099</h5>
                                                    <p>Negative<br /> Predictive Value</p>
                                                </div>
                                                <div className="col">
                                                    <h5>0.6719</h5>
                                                    <p>Accuracy</p>
                                                </div>
                                                <div className="col">
                                                    <h5>0.6719</h5>
                                                    <p>Matthews Correlation<br /> Coefficient</p>
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
                                                                <div className="cross">
                                                                    <a href="#">Cross validation <i
                                                                        className="fa fa-caret-down"></i></a><br />
                                                                    <span>Data selection</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <img src="../../../../assets/images/diagram_02.png" alt="" />
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
                                                                <div className="row cross">
                                                                    <div className="col">
                                                                        <a href="#">Threshold set <i
                                                                            className="fa fa-caret-down"></i></a><br />
                                                                        <span className="set">0.314</span>
                                                                    </div>
                                                                    <div className="col">
                                                                        <a href="#">Density <i
                                                                            className="fa fa-caret-down"></i></a><br />
                                                                        <span>Y-Axis</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <img src="../../../../assets/images/diagram_03.png" alt="" />
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
                                                                <h3>Cumulative Charts</h3>
                                                                <div className="row cross">
                                                                    <div className="col col-md-7">
                                                                        <a href="#">Cumulative Gain <i
                                                                            className="fa fa-caret-down"></i></a><br />
                                                                        <span>Chart type</span>
                                                                    </div>
                                                                    <div className="col">
                                                                        <a href="#">Positive <i
                                                                            className="fa fa-caret-down"></i></a><br />
                                                                        <span>className</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <img src="../../../../assets/images/diagram_04.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="execution" role="tabpanel" aria-labelledby="execution-tab">
                                        <p>Execution content here.....</p>
                                    </div>
                                    <div className="tab-pane fade" id="configuration" role="tabpanel"
                                        aria-labelledby="configuration-tab">
                                        <p>Configuration content here.....</p>
                                    </div>
                                    <div className="tab-pane fade" id="artifacts" role="tabpanel" aria-labelledby="artifacts-tab">
                                        <p>Artifacts content here.....</p>
                                    </div>
                                    <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                                        <p>Info content here.....</p>
                                    </div>
                                    <div className="tab-pane fade" id="results" role="tabpanel" aria-labelledby="results-tab">
                                        <div className="info">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="row">
                                                        <div className="col col-md-7">
                                                            <h3>Hostname: <span>StudioAI Worker</span></h3>
                                                        </div>
                                                        <div className="col txtright">
                                                            <h3><span>Filter</span> <img src="assets/images/filter_01.png"
                                                                alt="" /></h3>
                                                        </div>
                                                    </div>
                                                    <div className="terminal">
                                                        <p><strong>2020-08-18 10:12:28</strong><br />
                                                            TRAINS Task: created new task
                                                            id=f1a5b2f7ac154dba85146cf7de4d5fd5<br />
                                                            TRAINS results page:
                                                            http://localhost:8080/<br />projects/869695cbdcd646b4b621fcecdab19f80/experiments/<br />f1a5b2f7ac154dba85146cf7de4d5fd5/output/log
                                                        </p>
                                                        <p><strong>2020-08-18 10:12:30</strong><br />
                                                            TRAINS Monitor: GPU monitoring failed getting GPU reading, switching
                                                            off GPU monitoring</p>
                                                        <p><strong>2020-08-18 10:12:33</strong><br />
                                                            /home/best_user/project/trains16/lib/python3.6/site-packages/trains/binding/matplotlib_bind.py:240:
                                                            UserWarning:<br />
                                                            Matplotlib is currently using agg, which is a non-GUI backend, so
                                                            cannot show the figure.</p>
                                                        <p><strong>2020-08-18 10:12:36</strong><br />
                                                            /home/best_user/project/trains16/lib/python3.6/site-packages/trains/binding/matplotlib_bind.py:240:
                                                            UserWarning:<br />
                                                            Matplotlib is currently using agg, which is a non-GUI backend, so
                                                            cannot show the figure.</p>
                                                        <p><strong>2020-08-18 10:12:36</strong><br />
                                                            done</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="models" role="tabpanel" aria-labelledby="models-tab">
                    <p>Models content here.....</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12" style={{ paddingTop: "15px" }}>
                    <Link to="/advanceoption02" className="col-md-12 btn-block" routerLinkActive="activebutton">
                        <button className="btn btn-primary mx-auto" style={{ width: "100%", maxWidth: "1280px" }}>Next Page of Product
                            Demo</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
export default OverView01;
