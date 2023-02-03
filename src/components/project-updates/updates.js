import React from "react";
import dot1 from '../assets/images/dot1.png';
import dot3 from '../assets/images/dot3.png';
import results from '../assets/images/results.png';
import diagram01 from '../assets/images/diagram_01.png';
import tickmark from '../assets/images/tickmark.png';
import { Link } from "react-router-dom";

function ProjectUpdates() {

  return (
    <section class="projects">
    <div class="row">
        <div class="col">
            <h2>Projects</h2>
        </div>
        <div class="col txtright">
            <span class="activity"><img src={dot1} alt="" width="8"/> Worker’s Activity</span>
            <span class="activity"><img src={dot3} alt=""/> Team Activity</span> <a href="#"
                class="recent">Recent <i class="fa fa-caret-down"></i></a>
        </div>
    </div>
    <div class="row">
        <div class="col col-md-4 col-lg-3">
            <div class="box">
                <div class="col">
                    <h4>Trains Examples <span>12</span></h4>
                    <div class="cleafix center">
                        <img src={results} alt=""/>
                    </div>
                    <div class="cleafix center">
                        <img src={diagram01} alt=""/>
                    </div>
                </div>
                <hr/>
                <div class="col timer">
                    <img src={tickmark} alt=""/> Compute time:00:12:45 was succesfull
                </div>
            </div>
        </div>
        <div class="col col-md-4 col-lg-3">
            <div class="box">
                <div class="col">
                    <h4>Trains Examples <span>12</span></h4>
                    <div class="cleafix center">
                        <img src={results} alt=""/>
                    </div>
                    <div class="cleafix center">
                        <img src={diagram01} alt=""/>
                    </div>
                </div>
                <hr/>
                <div class="col timer">
                    <img src={tickmark} alt=""/> Compute time:00:12:45 was succesfull
                </div>
            </div>
        </div>
        <div class="col col-md-4 col-lg-3">
            <div class="box">
                <div class="col">
                    <h4>Trains Examples <span>12</span></h4>
                    <div class="cleafix center">
                        <img src={results} alt=""/>
                    </div>
                    <div class="cleafix center">
                        <img src={diagram01} alt=""/>
                    </div>
                </div>
                <hr/>
                <div class="col timer">
                    <img src={tickmark} alt=""/> Compute time:00:12:45 was succesfull
                </div>
            </div>
        </div>
        <div class="col col-md-4 col-lg-3">
            <div class="box">
                <div class="col">
                    <h4>Trains Examples <span>12</span></h4>
                    <div class="cleafix center">
                        <img src={results} alt=""/>
                    </div>
                    <div class="cleafix center">
                        <img src={diagram01} alt=""/>
                    </div>
                </div>
                <hr/>
                <div class="col timer">
                    <img src={tickmark} alt=""/> Compute time:00:12:45 was succesfull
                </div>
            </div>
        </div>
        <div class="col col-md-4 col-lg-3">
            <div class="box">
                <div class="col">
                    <h4>Trains Examples <span>12</span></h4>
                    <div class="cleafix center">
                        <img src={results} alt=""/>
                    </div>
                    <div class="cleafix center">
                        <img src={diagram01} alt=""/>
                    </div>
                </div>
                <hr/>
                <div class="col timer">
                    <img src={tickmark} alt=""/> Compute time:00:12:45 was succesfull
                </div>
            </div>
        </div>
        <div class="col col-md-4 col-lg-3">
            <div class="box">
                <div class="col">
                    <h4>Trains Examples <span>12</span></h4>
                    <div class="cleafix center">
                        <img src={results} alt=""/>
                    </div>
                    <div class="cleafix center">
                        <img src={diagram01} alt=""/>
                    </div>
                </div>
                <hr/>
                <div class="col timer">
                    <img src={tickmark} alt=""/> Compute time:00:12:45 was succesfull
                </div>
            </div>
        </div>
        <div class="col col-md-4 col-lg-3">
            <div class="box">
                <div class="col">
                    <h4>Trains Examples <span>12</span></h4>
                    <div class="cleafix center">
                        <img src={results} alt=""/>
                    </div>
                    <div class="cleafix center">
                        <img src={diagram01} alt=""/>
                    </div>
                </div>
                <hr/>
                <div class="col timer">
                    <img src={tickmark} alt=""/> Compute time:00:12:45 was succesfull
                </div>
            </div>
        </div>
        <div class="col col-md-4 col-lg-3">
            <div class="box">
                <div class="col">
                    <h4>Trains Examples <span>12</span></h4>
                    <div class="cleafix center">
                        <img src={results} alt=""/>
                    </div>
                    <div class="cleafix center">
                        <img src={diagram01} alt=""/>
                    </div>
                </div>
                <hr/>
                <div class="col timer">
                    <img src={tickmark} alt=""/> Compute time:00:12:45 was succesfull
                </div>
            </div>
        </div>
    </div>

    <div class="row">
    <div className="col-md-12" style={{paddingTop:"15px"}}>
            <Link to="/advanceoption02" className="col-md-12 btn-block" routerLinkActive="activebutton">
                    <button className="btn btn-primary mx-auto" style={{width:"100%",maxWidth:"1280px"}}>Next Page of Product
                        Demo</button>
                </Link>
            </div> 
    </div>
</section>
  );
}

export default ProjectUpdates;
