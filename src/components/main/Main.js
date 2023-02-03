import React from 'react'
import { Link } from 'react-router-dom';
import arw_dwn from "../assets/images/arw_dwn.png";
import icn_pls from "../assets/images/icn_pls.png";


function Main() {
  return (
        <>
        <section class="project">
        <div class="row">
            <div class="col col-md-8 col-lg-9">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col col-md-8">
                                <h2>Get started by dragging here, or import from</h2>
                                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                                            role="tab" aria-controls="pills-home" aria-selected="true">Data Source</a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link" id="pills-URL-tab" data-toggle="pill" href="#pills-URL"
                                            role="tab" aria-controls="pills-URL" aria-selected="false">URL</a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link" id="pills-HDFS-tab" data-toggle="pill" href="#pills-HDFS"
                                            role="tab" aria-controls="pills-HDFS" aria-selected="false">HDFS</a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link" id="pills-Local-tab" data-toggle="pill" href="#pills-Local"
                                            role="tab" aria-controls="pills-Local" aria-selected="false">Local File</a>
                                    </li>
                                </ul>
                                <hr/>
                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                        aria-labelledby="pills-home-tab">
                                        <p>Datasets contain personal data, data subject to HIPAA, or regulated financial dat
                                            are strictly prohibited.</p>
                                        <a href="#" class="view">View dataset requirements</a>
                                    </div>
                                    <div class="tab-pane fade" id="pills-URL" role="tabpanel"
                                        aria-labelledby="pills-URL-tab">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et</p>
                                        <a href="#" class="view">View requirements</a>
                                    </div>
                                    <div class="tab-pane fade" id="pills-HDFS" role="tabpanel"
                                        aria-labelledby="pills-HDFS-tab">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et</p>
                                        <a href="#" class="view">View requirements</a>
                                    </div>
                                    <div class="tab-pane fade" id="pills-Local" role="tabpanel"
                                        aria-labelledby="pills-Local-tab">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et</p>
                                        <a href="#" class="view">View requirements</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-md-4 frame">
                                <h3 class="tpspc">or Browse</h3>
                                <a href="" class="btn btn-primary catlog">AI Catalog &nbsp; <i class="ti-menu-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h4>Or, explore some common use cases</h4>
                        <div class="filter">
                            Filter by: <a href="#">All Industries (99) <img src={arw_dwn} alt=""/></a>
                            <span>199 of 200 projects remaning.</span>
                        </div>
                    </div>
                </div>
                <div class="col-12 some">
                    <div class="row">
                        <div class="col">
                            <div class="card">
                                <div class="card-body cases">
                                    <img src={icn_pls} alt="" class="icnplus"/>
                                    <h3>Hospital<br/> Readmission</h3>
                                    <dl class="tb-data">
                                        <dt>Target Variable:</dt>
                                        <dd>Readmited</dd>
                                        <dt>Industry:</dt>
                                        <dd>Health Care</dd>
                                    </dl>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.</p>
                                    <a href="#" class="btn btn-outline">Local File</a>
                                    <a href="#" class="btn btn-learn">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body cases">
                                    <img src={icn_pls} alt="" class="icnplus"/>
                                    <h3>Hospital<br/> Readmission</h3>
                                    <dl class="tb-data">
                                        <dt>Target Variable:</dt>
                                        <dd>Readmited</dd>
                                        <dt>Industry:</dt>
                                        <dd>Health Care</dd>
                                    </dl>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.</p>
                                    <a href="#" class="btn btn-outline">Local File</a>
                                    <a href="#" class="btn btn-learn">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body cases">
                                    <img src={icn_pls} alt="" class="icnplus"/>
                                    <h3>Hospital<br/> Readmission</h3>
                                    <dl class="tb-data">
                                        <dt>Target Variable:</dt>
                                        <dd>Readmited</dd>
                                        <dt>Industry:</dt>
                                        <dd>Health Care</dd>
                                    </dl>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.</p>
                                    <a href="#" class="btn btn-outline">Local File</a>
                                    <a href="#" class="btn btn-learn">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-md-4 col-lg-3 sidebar">
                <div class="card nosde">
                    <div class="card-body cases">
                        <h3>Or, explore some common use cases</h3>
                        <hr/>
                        <div class="filter">
                            Filter by: <a href="#">All Industries (99) <i class="ti-angle-down"></i></a><br/>
                            199 of 200 projects remaning
                        </div>
                    </div>
                </div>
                <div class="card cases">
                    <div class="card-body">
                        <img src={icn_pls} alt="" class="icnplus"/>
                        <h3>Hospital<br/> Readmission</h3>
                        <dl class="tb-data">
                            <dt>Target Variable:</dt>
                            <dd>Readmited</dd>
                            <dt>Industry:</dt>
                            <dd>Health Care</dd>
                        </dl>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.</p>
                        <a href="#" class="btn btn-outline">Create project</a>
                        <a href="#" class="btn btn-learn">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="row">
            <div class="col-md-12" style={{paddingTop:"15px"}}>
            <Link to="/dataConnection" class="col-md-12 btn-block" routerLinkActive="activebutton">
                    <button class="btn btn-primary mx-auto" style={{width:"100%",maxWidth:"1280px"}}>Next Page of Product
                        Demo</button>
                </Link>
            </div>
        </div>
    
    </section>
        </>
  )
}

export default Main