import '../../assets/css/PofileInfocss.css'; 

function ProfileInfoPage() {
  return (
    <div className="profile-info col-md-9">
      {/* Panel 1 */}
      <div className="panel animate-color">
        <div className="panel-body bio-graph-info">
          <h1>Details</h1>
          <div className="row">
            <div className="bio-row">
              <p><span>First Name </span>: Akshaya</p>
            </div>
            <div className="bio-row">
              <p><span>Last Name </span>: Hariram</p>
            </div>
            <div className="bio-row">
              <p><span>Country </span>: India</p>
            </div>
            <div className="bio-row">
              <p><span>Birthday</span>: 27 August 2003</p>
            </div>
            <div className="bio-row">
              <p><span>Occupation </span>: Student</p>
            </div>
            <div className="bio-row">
              <p><span>Email </span>: akshaya@gmail.com</p>
            </div>
            <div className="bio-row">
              <p><span>Mobile </span>: (+91) 8300730877</p>
            </div>
          </div>
        </div>
      </div>
     
      {/* Other panels */}
      <div className="row">
        {/* Panel 4 */}
        <div className="col-md-6">
          <div className="panel animate-color">

              <div className="bio-chart">
                <div style={{display: "inline", width: "100px", height: "100px"}}>
                  <canvas width="100" height="100px"></canvas>
                  <input className="knob" 
                         data-width="100" 
                         data-height="100" 
                         data-displayprevious="true" 
                         data-thickness=".2" 
                         value="35" 
                         data-fgcolor="#e06b7d" 
                         data-bgcolor="#e8e8e8" 
                         style={{width: "54px", height: "33px", position: "absolute", verticalAlign: "middle", marginTop: "33px", marginLeft: "-77px", border: "0px", fontWeight: "bold", fontStyle: "normal", fontVariant: "normal", fontStretch: "normal", fontSize: "20px", lineHeight: "normal", fontFamily: "Arial", textAlign: "center", color: "rgb(224, 107, 125)", padding: "0px", WebkitAppearance: "none", background: "none"}} />
                </div>
              </div>
              <div className="bio-desk">
                <h4 className="red">Envato Website</h4>
                <p>Started : 15 July</p>
                <p>Deadline : 15 August</p>
             
            </div>
          </div>
        </div>
        {/* Panel 5 */}
        <div className="col-md-6">
          <div className="panel animate-color">
           
              <div className="bio-chart">
                <div style={{display: "inline", width: "100px", height: "100px"}}>
                  <canvas width="100" height="100px"></canvas>
                  <input className="knob" 
                         data-width="100" 
                         data-height="100" 
                         data-displayprevious="true" 
                         data-thickness=".2" 
                         value="63" 
                         data-fgcolor="#4CC5CD" 
                         data-bgcolor="#e8e8e8" 
                         style={{width: "54px", height: "33px", position: "absolute", verticalAlign: "middle", marginTop: "33px", marginLeft: "-77px", border: "0px", fontWeight: "bold", fontStyle: "normal", fontVariant: "normal", fontStretch: "normal", fontSize: "20px", lineHeight: "normal", fontFamily: "Arial", textAlign: "center", color: "rgb(76, 197, 205)", padding: "0px", WebkitAppearance: "none", background: "none"}} />
                </div>
              </div>
              <div className="bio-desk">
                <h4 className="terques">ThemeForest CMS </h4>
                <p>Started : 15 July</p>
                <p>Deadline : 15 August</p>
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfoPage;
