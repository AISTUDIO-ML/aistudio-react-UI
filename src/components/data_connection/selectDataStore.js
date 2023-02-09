import React from "react";
import { Link } from "react-router-dom";
import close from "../assets/images/close.png";
import icnTrash from "../assets/images/icn_trash.png";
import MainHeader from "../header/MainHeader";


function SelectDataStore() {

  return (
    <>
    <MainHeader/>


    
<section class="project">
<div class="row">
    <div class="col">
        <div class="datasets">
            <a href="#"><i class="fa fa-caret-left"></i> All Datasets</a>
            <h6>Hospital Readmission</h6>
            <dl class="tb-data">
                <dt>Target Variable:</dt>
                <dd>Readmited</dd>
                <dt>Industry:</dt>
                <dd>Health Care</dd>
            </dl>
            <p>Checking for usage limits...</p>
        </div>
    </div>
</div>


<div class="popup">
    <div class="dialog-box">
        <div class="popup-content">
            <a href="#" class="close"><img src={close} alt=""/></a>
            <h2>Creassste Project from Data Connection</h2>
            <h5>Data Connections / Select Data Store <span>/ Select Data Store</span></h5>
            <br/><br/>
            <form>
                <div class="form-group">
                    <label>Data connection name *</label>
                    <input type="text" class="form-control" placeholder="Data connection name "/>
                </div>
                <div class="form-group">
                    <label>Version</label>
                    <input type="text" class="form-control" placeholder="AWS Athena 2.0 (2.0.5)"/>
                </div>
                <div class="form-group">
                    <label>Configuration</label>
                    <div class="col">
                        <div class="row">
                            <div class="custom-control custom-radio col col-md-3">
                                <input type="radio" id="customRadio1" name="customRadio"
                                    class="custom-control-input"/>
                                <label class="custom-control-label" for="customRadio1"> Parameters</label>
                            </div>
                            <div class="custom-control custom-radio col col-md-3">
                                <input type="radio" id="customRadio2" name="customRadio"
                                    class="custom-control-input"/>
                                <label class="custom-control-label" for="customRadio2"> URL (Advanced)</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label>JDBC URL</label>
                    <input type="text" class="form-control" placeholder="https://www"/>
                </div>
                <div class="clearfix">
                    <br/>
                    <a href="#" class="btn btn-primary btn-add-date float-left nospr">Add data connection</a>
                    <a href="#" class="btn btn-primary float-right nospr">Cancel</a>
                </div>

                
                <div className="row">
                <div className="col-md-12" style={{paddingTop:"15px"}}>
                <Link to="/showAdvOption" className="col-md-12 btn-block" routerLinkActive="activebutton">
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
  </>
  );
}

export default SelectDataStore;
