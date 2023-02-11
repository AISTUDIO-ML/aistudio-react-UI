import React from 'react'
import { Link } from 'react-router-dom';
import arw_dwn from "../assets/images/arw_dwn.png";
import icn_pls from "../assets/images/icn_pls.png";
import MainHeader from '../header/MainHeader';

function Main() {
    localStorage.removeItem("company_name");
    localStorage.removeItem("address");
    localStorage.removeItem("billing");
    localStorage.removeItem("user_mail");
    return (
        <>
            <MainHeader />
            <section className="project">
                <div className="row">
                    <div className="col col-md-8 col-lg-9">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col col-md-8">
                                        <h2>Get started by dragging here, or import from</h2>
                                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home"
                                                    role="tab" aria-controls="pills-home" aria-selected="true">Data Source</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="pills-URL-tab" data-bs-toggle="pill" href="#pills-URL"
                                                    role="tab" aria-controls="pills-URL" aria-selected="false">URL</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="pills-HDFS-tab" data-bs-toggle="pill" href="#pills-HDFS"
                                                    role="tab" aria-controls="pills-HDFS" aria-selected="false">HDFS</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="pills-Local-tab" data-bs-toggle="pill" href="#pills-Local"
                                                    role="tab" aria-controls="pills-Local" aria-selected="false">Local File</a>
                                            </li>
                                        </ul>
                                        <hr />
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                                aria-labelledby="pills-home-tab">
                                                <p>Datasets contain personal data, data subject to HIPAA, or regulated financial dat
                                                    are strictly prohibited.</p>
                                                <a href="#" className="view">View dataset requirements</a>
                                            </div>
                                            <div className="tab-pane fade" id="pills-URL" role="tabpanel"
                                                aria-labelledby="pills-URL-tab">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                    incididunt ut labore et</p>
                                                <a href="#" className="view">View requirements</a>
                                            </div>
                                            <div className="tab-pane fade" id="pills-HDFS" role="tabpanel"
                                                aria-labelledby="pills-HDFS-tab">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                    incididunt ut labore et</p>
                                                <a href="#" className="view">View requirements</a>
                                            </div>
                                            <div className="tab-pane fade" id="pills-Local" role="tabpanel"
                                                aria-labelledby="pills-Local-tab">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                    incididunt ut labore et</p>
                                                <a href="#" className="view">View requirements</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-md-4 frame">
                                        <h3 className="tpspc">or Browse</h3>
                                        <a href="" className="btn btn-primary catlog">AI Catalog &nbsp; <i className="ti-menu-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h4>Or, explore some common use cases</h4>
                                <div className="filter">
                                    Filter by: <a href="#">All Industries (99) <img src={arw_dwn} alt="" /></a>
                                    <span>199 of 200 projects remaning.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 some">
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body cases">
                                            <img src={icn_pls} alt="" className="icnplus" />
                                            <h3>Hospital<br /> Readmission</h3>
                                            <dl className="tb-data">
                                                <dt>Target Variable:</dt>
                                                <dd>Readmited</dd>
                                                <dt>Industry:</dt>
                                                <dd>Health Care</dd>
                                            </dl>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua.</p>
                                            <a href="#" className="btn btn-outline">Local File</a>
                                            <a href="#" className="btn btn-learn">Learn more</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body cases">
                                            <img src={icn_pls} alt="" className="icnplus" />
                                            <h3>Hospital<br /> Readmission</h3>
                                            <dl className="tb-data">
                                                <dt>Target Variable:</dt>
                                                <dd>Readmited</dd>
                                                <dt>Industry:</dt>
                                                <dd>Health Care</dd>
                                            </dl>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua.</p>
                                            <a href="#" className="btn btn-outline">Local File</a>
                                            <a href="#" className="btn btn-learn">Learn more</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body cases">
                                            <img src={icn_pls} alt="" className="icnplus" />
                                            <h3>Hospital<br /> Readmission</h3>
                                            <dl className="tb-data">
                                                <dt>Target Variable:</dt>
                                                <dd>Readmited</dd>
                                                <dt>Industry:</dt>
                                                <dd>Health Care</dd>
                                            </dl>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua.</p>
                                            <a href="#" className="btn btn-outline">Local File</a>
                                            <a href="#" className="btn btn-learn">Learn more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-4 col-lg-3 sidebar">
                        <div className="card nosde">
                            <div className="card-body cases">
                                <h3>Or, explore some common use cases</h3>
                                <hr />
                                <div className="filter">
                                    Filter by: <a href="#">All Industries (99) <i className="ti-angle-down"></i></a><br />
                                    199 of 200 projects remaning
                                </div>
                            </div>
                        </div>
                        <div className="card cases">
                            <div className="card-body">
                                <img src={icn_pls} alt="" className="icnplus" />
                                <h3>Hospital<br /> Readmission</h3>
                                <dl className="tb-data">
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
                                <a href="#" className="btn btn-outline">Create project</a>
                                <a href="#" className="btn btn-learn">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12" style={{ paddingTop: "15px" }}>
                        <Link
                            to="/dataConnection"
                            className="col-md-12 btn-block"
                            routerLinkActive="activebutton"
                        >
                            <button
                                className="btn btn-primary mx-auto"
                                style={{ width: "100%", maxWidth: "1280px" }}
                            >
                                Next Page of Product Demo
                            </button>
                        </Link>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Main