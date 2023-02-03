import React from "react";
import { Link } from "react-router-dom";

function MainLearnMore() {
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
    <div className="col">
      <a href="#" className="btn btn-primary btn-create">Create Project</a>
    </div>
  </div>
  <div className="details">
    <div className="row">
      <div className="col col-md-4">
        <h4>Introduction</h4>
      </div>
      <div className="col col-md-8">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi dolor sit lorem risus neque, scelerisque. A arcu,
          dictum amet, pellentesque cursus enim tortor commodo. Feugiat enim vel tristique at amet cursus augue varius
          sit. Feugiat scelerisque diam mauris in ac. Et maecenas volutpat non auctor vestibulum elementum amet. Orci
          arcu lorem leo commodo aenean mauris nisi. Blandit ut sed sem in nisi in tempus rhoncus integer. Scelerisque
          varius risus tincidunt imperdiet tortor.</p>
      </div>
    </div>
  </div>
  <hr/>
  <div className="details">
    <div className="row">
      <div className="col col-md-4 txtright">
        <h4>How can Our Site Help?</h4>
      </div>
      <div className="col col-md-8">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi dolor sit lorem risus neque, scelerisque. A arcu,
          dictum amet, pellentesque cursus enim tortor commodo. Feugiat enim vel tristique at amet cursus augue varius
          sit. Feugiat scelerisque diam mauris in ac. Et maecenas volutpat non auctor vestibulum elementum amet. Orci
          arcu lorem leo commodo aenean mauris nisi. Blandit ut sed sem in nisi in tempus rhoncus integer. Scelerisque
          varius risus tincidunt imperdiet tortor.</p>
      </div>
    </div>
  </div>
  <hr/>
  <div className="details">
    <div className="row">
      <div className="col col-md-4">
        <h4>For Example...</h4>
      </div>
      <div className="col col-md-8">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi dolor sit lorem risus neque, scelerisque. A arcu,
          dictum amet, pellentesque cursus enim tortor commodo. Feugiat enim vel tristique at amet cursus augue varius
          sit. Feugiat scelerisque diam mauris in ac. Et maecenas volutpat non auctor vestibulum elementum amet. Orci
          arcu lorem leo commodo aenean mauris nisi. Blandit ut sed sem in nisi in tempus rhoncus integer. Scelerisque
          varius risus tincidunt imperdiet tortor.</p>
      </div>
      <div className="col-12">
        <br/>
        <p>For more usage details, refer to the <a href="#">Data Source</a> or <a href="#">License</a></p>
      </div>
    </div>
  </div>

  <div className="row">
  <div className="col-md-12" style={{paddingTop:"15px"}}>
                <Link to="/advanceoption01" className="col-md-12 btn-block" routerLinkActive="activebutton">
                    <button className="btn btn-primary mx-auto" style={{width:"100%",maxWidth:"1280px"}}>Next Page of Product
                        Demo</button>
                </Link>
            </div>
  </div>
</section>
  );
}

export default MainLearnMore;
