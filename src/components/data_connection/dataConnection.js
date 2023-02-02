import React from "react";
import { Link } from "react-router-dom";
import close from "../assets/images/close.png";
import icnTrash from "../assets/images/icn_trash.png";


function DataConnection() {

  return (
    <section className="project">
    <div className="row">
    <div className="col">
      <div className="datasets">
        <a href="#"><i className="fa fa-caret-left"></i> All Datasets</a>
        <h6>Hospital Readmission</h6>
        <dl className="tb-data">
          <dt>Target Variable:</dt>
          <dd>Readmited</dd>
          <dt>Industry:</dt>
          <dd>Health Care</dd>
        </dl>
        <p>Checking for usage limits...</p>
      </div>
    </div>
  </div>
   {/* <div  */}
   <div className="popup">
   <div className="dialog-box">
   <div className="popup-content">
   <a href="#" className="close">
    <img src={close} alt=""/>
    </a>

    <h2>Create Project from Data Connection</h2>
        <h5>Data Connections <span>/ Select Data Store</span></h5>
        <br/><br/>


        <form>
          <div className="form-group">
            <label>Data connection name *</label>
            <input type="text" className="form-control" placeholder="Data connection name "/>
          </div>
          <div className="form-group">
            <label>Version</label>
            <input type="text" className="form-control" placeholder="AWS Athena 2.0 (2.0.5)"/>
          </div>
          <div className="form-group">
            <label>Configuration</label>
            <div className="col">
              <div className="row">
                <div className="custom-control custom-radio col col-md-3">
                  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" for="customRadio1"> Parameters</label>
                </div>
                <div className="custom-control custom-radio col col-md-3">
                  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" for="customRadio2"> URL (Advanced)</label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group group">
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="AWS Athena 2.0 (2.0.5)"/>
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="AWS Athena 2.0 (2.0.5)"/>
              </div>
              <a href="#" className="delete">
                <img src={icnTrash} alt=""/></a>
            </div>
          </div>
          <div className="form-group group">
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="AWS Athena 2.0 (2.0.5)" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="AWS Athena 2.0 (2.0.5)" />
              </div>
              <a href="#" className="delete"><img src={icnTrash} alt="" /></a>
            </div>
          </div>
          <div className="form-group group">
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="AWS Athena 2.0 (2.0.5)"/>
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="AWS Athena 2.0 (2.0.5)"/>
              </div>
              <a href="#" className="delete"><img src={icnTrash} alt=""/></a>
            </div>
          </div>
          <div className="form-group group">
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="AWS Athena 2.0 (2.0.5)" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="AWS Athena 2.0 (2.0.5)" />
              </div>
              <a href="#" className="delete"><img src={icnTrash} alt="" /></a>
            </div>
          </div>
          <div className="form-group">
            <a href="#" className="add">+ <u>Add parameter</u></a>
          </div>
          <div className="clearfix">
            <a href="#" className="btn btn-primary float-right nospr">Cancel</a>
          </div>

          <div className="row">
            <div className="col-md-12" style={{paddingTop:"15px"}}>
            <Link to="/moreSteps" className="col-md-12 btn-block" routerLinkActive="activebutton">
                  <button className="btn btn-primary mx-auto" style={{width:"100%",maxWidth:"1280px"}}>Next Page of Product
                        Demo</button>
                </Link>
            </div>
        </div>

        </form>

   </div>
   </div>
   </div>
 </section>
  );
}

export default DataConnection;
