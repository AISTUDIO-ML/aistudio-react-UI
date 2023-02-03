import React from "react";
import { Link } from "react-router-dom";
import tickmark from '../assets/images/tickmark.png';
import avatar from '../assets/images/avatar.png';
import clock0l from '../assets/images/clock_0l.png';
import bullet from '../assets/images/bullet.png';
import bullet02 from '../assets/images/bullet_02.png';
import bullet03 from '../assets/images/bullet_03.png';
import bullet01 from '../assets/images/bullet_01.png';
import bullet04 from '../assets/images/bullet_04.png';
import bullet06 from '../assets/images/bullet_06.png';
import bullet07 from '../assets/images/bullet_07.png';
import bullet08 from '../assets/images/bullet_08.png';
import MainHeader from "../header/MainHeader";

function OverView02() {

    return (
        <><MainHeader/>
        <section className="experiment">
        <div className="top-panel btmspc">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <ul className="nav nav-tabs expils" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab"
                                        aria-controls="home" aria-selected="true">Experiments</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="models-tab" data-bs-toggle="tab" href="#models" role="tab"
                                        aria-controls="models" aria-selected="false">Models</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col txtright">
                    <a href="#" className="recent">Data Quality Assessment <i className="fa fa-caret-right"></i></a> <a href="#"
                        className="recent">Explore the data <i className="fa fa-caret-right"></i></a>
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
                                            alt=""/> Published</div>
                                </div>
                                <div className="clearfix">
                                    <div className="avatar">
                                        By <span><img src={avatar} alt=""/> George
                                            Fields</span>
                                    </div>
                                    <div className="edited">
                                        <img src={clock0l} alt=""/> Edited just now
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="avpanel">
                            <a href="#">
                                <div className="clearfix">
                                    <div className="head">Autokeras Structured Data regr..</div>
                                    <div className="publish"><img src={tickmark} width="12"
                                            alt=""/> Published</div>
                                </div>
                                <div className="clearfix">
                                    <div className="avatar">
                                        By <span><img src={avatar} alt=""/> George
                                            Fields</span>
                                    </div>
                                    <div className="edited">
                                        <img src={clock0l} alt=""/> Edited just now
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="avpanel">
                            <a href="#">
                                <div className="clearfix">
                                    <div className="head">Autokeras Structured Data regr..</div>
                                    <div className="publish"><img src={tickmark} width="12"
                                            alt=""/> Published</div>
                                </div>
                                <div className="clearfix">
                                    <div className="avatar">
                                        By <span><img src={avatar} alt=""/> George
                                            Fields</span>
                                    </div>
                                    <div className="edited">
                                        <img src={clock0l} alt=""/> Edited just now
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="avpanel">
                            <a href="#">
                                <div className="clearfix">
                                    <div className="head">Autokeras Structured Data regr..</div>
                                    <div className="publish"><img src={tickmark} width="12"
                                            alt=""/> Published</div>
                                </div>
                                <div className="clearfix">
                                    <div className="avatar">
                                        By <span><img src={avatar} alt=""/> George
                                            Fields</span>
                                    </div>
                                    <div className="edited">
                                        <img src={clock0l} alt=""/> Edited just now
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="avpanel">
                            <a href="#">
                                <div className="clearfix">
                                    <div className="head">Autokeras Structured Data regr..</div>
                                    <div className="publish"><img src={tickmark} width="12"
                                            alt=""/> Published</div>
                                </div>
                                <div className="clearfix">
                                    <div className="avatar">
                                        By <span><img src={avatar} alt=""/> George
                                            Fields</span>
                                    </div>
                                    <div className="edited">
                                        <img src={clock0l} alt=""/> Edited just now
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="avpanel">
                            <a href="#">
                                <div className="clearfix">
                                    <div className="head">Autokeras Structured Data regr..</div>
                                    <div className="publish"><img src={tickmark} width="12"
                                            alt=""/> Published</div>
                                </div>
                                <div className="clearfix">
                                    <div className="avatar">
                                        By <span><img src={avatar} alt=""/> George
                                            Fields</span>
                                    </div>
                                    <div className="edited">
                                        <img src={clock0l} alt=""/> Edited just now
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="avpanel">
                            <a href="#">
                                <div className="clearfix">
                                    <div className="head">Autokeras Structured Data regr..</div>
                                    <div className="publish"><img src={tickmark} width="12"
                                            alt=""/> Published</div>
                                </div>
                                <div className="clearfix">
                                    <div className="avatar">
                                        By <span><img src={avatar} alt=""/> George
                                            Fields</span>
                                    </div>
                                    <div className="edited">
                                        <img src={clock0l} alt=""/> Edited just now
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="avpanel">
                            <a href="#">
                                <div className="clearfix">
                                    <div className="head">Autokeras Structured Data regr..</div>
                                    <div className="publish"><img src={tickmark} width="12"
                                            alt=""/> Published</div>
                                </div>
                                <div className="clearfix">
                                    <div className="avatar">
                                        By <span><img src={avatar} alt=""/> George
                                            Fields</span>
                                    </div>
                                    <div className="edited">
                                        <img src={clock0l} alt=""/> Edited just now
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col sidexp">
                        <div className="auto-date-box">
                            <h4>Аutokeras Structured Data regresion</h4>
                            <div className="top-panel btmspc">
                                <div className="row">
                                    <div className="col archive">
                                        <span className="train">Training</span>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col">
                                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <a className="nav-link active" id="general-tab" data-bs-toggle="tab"
                                                            href="#general" role="tab" aria-controls="general"
                                                            aria-selected="true">General</a>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <a className="nav-link" id="network-tab" data-bs-toggle="tab"
                                                            href="#network" role="tab" aria-controls="network"
                                                            aria-selected="false">Network</a>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <a className="nav-link" id="labels-tab" data-bs-toggle="tab" href="#labels"
                                                            role="tab" aria-controls="labels"
                                                            aria-selected="false">Labels</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="general" role="tabpanel"
                                    aria-labelledby="general-tab">
                                    <div className="info">
                                        <div className="row">
                                            <div className="col">
                                                <br/><br/>
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td width="175"><img
                                                                        src={bullet02}
                                                                        alt=""/> CREATED AT</td>
                                                                <td>Aug 18 2020 10:14</td>
                                                            </tr>
                                                            <tr>
                                                                <td><img src={bullet01}
                                                                        alt=""/> FRAMEWORK</td>
                                                                <td>XGBoost</td>
                                                            </tr>
                                                            <tr>
                                                                <td><img src={bullet04}
                                                                        alt=""/> STATUS</td>
                                                                <td>Published</td>
                                                            </tr>
                                                            <tr>
                                                                <td><img src={bullet} alt=""/>
                                                                    MODEL URL</td>
                                                                <td>Https://allegro-examples.s3.amazonnaws.com/trains-public-resources/v0.16/trains_0.16.0/examples/XGBoost
                                                                    simple example.</td>
                                                            </tr>
                                                            <tr>
                                                                <td><img src={bullet02}
                                                                        alt=""/> USER</td>
                                                                <td>Allegro.ai</td>
                                                            </tr>
                                                            <tr>
                                                                <td><img src={bullet06}
                                                                        alt=""/> CREATING EXPERIMENT</td>
                                                                <td><a href="#"
                                                                        style={{color: "#8676FF" , textDecoration: "underline"}}>XGBoost
                                                                        simple example</a></td>
                                                            </tr>
                                                            <tr>
                                                                <td><img src={bullet07}
                                                                        alt=""/> ARCHIVED</td>
                                                                <td>NO</td>
                                                            </tr>
                                                            <tr>
                                                                <td><img src={bullet08}
                                                                        alt=""/> PROJECT</td>
                                                                <td>Trains Examples</td>
                                                            </tr>
                                                            <tr>
                                                                <td><img src={bullet03}
                                                                        alt=""/> DESCRIPTION</td>
                                                                <td>Created by task id: 298c2d9a85654a72812473d36b2cc94f
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><img src={bullet02}
                                                                        alt=""/> CREATED BY</td>
                                                                <td>AIStudio.ml</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="network" role="tabpanel" aria-labelledby="network-tab">
                                    <div className="info">
                                        <div className="row">
                                            <div className="col">
                                                <h3>Labels</h3>
                                                <div className="terminal">
                                                    <p>value = 133.7<br/>
                                                        dict { '{' }<br/>
                                                        &nbsp; sub_value = "string"<br/>
                                                        &nbsp; sub_integer = 11<br/>
                                                        { '}' }<br/>
                                                        list_of_ints = [1, 2, 3, 4]<br/>
                                                        new value = 10</p>
                                                    <p><br/></p>
                                                    <p><br/></p>
                                                    <p><br/></p>
                                                    <p><br/></p>
                                                    <p><br/></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="labels" role="tabpanel" aria-labelledby="labels-tab">
                                    <div className="info">
                                        <div className="row">
                                            <div className="col">
                                                <h3>Labels</h3>
                                                <div className="rlabel rhed">
                                                    <div className="row">
                                                        <div className="col col-md-4">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input"
                                                                    id="customCheck1"/>
                                                                <label className="custom-control-label" for="customCheck1">
                                                                    Label</label>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            ID
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rlabel rdate">
                                                    <div className="row">
                                                        <div className="col col-md-4">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input"
                                                                    id="customCheck2"/>
                                                                <label className="custom-control-label" for="customCheck2">
                                                                    ab</label>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            0
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rlabel rdate">
                                                    <div className="row">
                                                        <div className="col col-md-4">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input"
                                                                    id="customCheck3"/>
                                                                <label className="custom-control-label"
                                                                    for="customCheck3">abc</label>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            1
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rlabel rdate">
                                                    <div className="row">
                                                        <div className="col col-md-4">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input"
                                                                    id="customCheck4"/>
                                                                <label className="custom-control-label"
                                                                    for="customCheck4">abcd</label>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            2
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rlabel rdate">
                                                    <div className="row">
                                                        <div className="col col-md-4">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input"
                                                                    id="customCheck5"/>
                                                                <label className="custom-control-label"
                                                                    for="customCheck5">abcde</label>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            3
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rlabel rdate">
                                                    <div className="row">
                                                        <div className="col col-md-4">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input"
                                                                    id="customCheck6"/>
                                                                <label className="custom-control-label"
                                                                    for="customCheck6">abcdef</label>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            4
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
                </div>
            </div>
            <div className="tab-pane fade" id="models" role="tabpanel" aria-labelledby="models-tab">
                <p>Models content here.....</p>
            </div>
        </div>
        <div className="row">
        <div className="col-md-12" style={{ paddingTop: "15px" }}>
                    <Link to="/model01" className="col-md-12 btn-block" routerLinkActive="activebutton">
                        <button className="btn btn-primary mx-auto" style={{ width: "100%", maxWidth: "1280px" }}>Next Page of Product
                            Demo</button>
                    </Link>
                </div>
        </div>
        </section>
        </>
    );
}
export default OverView02;
