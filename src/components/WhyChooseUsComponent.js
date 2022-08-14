const WhyChooseUsComponent = () => {
  return (
    <section id="investor">
      {/* Dividers */}
      <img src="svg/divider.svg" alt="" className="fn__svg fn__divider top_divider" />
      <img src="svg/divider.svg" alt="" className="fn__svg fn__divider bottom_divider" />
      {/* !Dividers */}
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">Technologies</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Investor List Shortcode */}
        <div className="neoh_fn_investor">
          <ul>
            <li>
              <div className="item" style={{ maxHeight: 150 }}>
                <img style={{ maxHeight: 150, height: 120 }} src="img/nodejs.svg" alt="" />
                {/* <a href="#" className="full_link" /> */}
              </div>
            </li>
            <li>
              <div className="item">
                <img src="img/angular.png" alt="" />
                {/* <a href="#" className="full_link" /> */}
              </div>
            </li>
            <li>
              <div className="item" style={{ maxHeight: 150, flexDirection: "column", display: "flex" }}>
                <img src="img/ionic.png" alt="" />
                {/* <a href="#" className="full_link" /> */}
              </div>
            </li>
            <li>
              <div className="item" style={{ maxHeight: 150, flexDirection: "column", display: "flex" }}>
                <img style={{ maxHeight: 150, height: 80, marginBottom: 10 }} src="img/git.png" alt="" />
                {/* <a href="#" className="full_link" /> */}
              </div>
            </li>
            <li>
              <div className="item" style={{ maxHeight: 150, flexDirection: "column", display: "flex" }}>
                <img style={{ maxHeight: 150, height: 80, marginBottom: 10 }} src="img/aws.png" alt="" />
                {/* <a href="#" className="full_link" /> */}
              </div>
            </li>
            <li>
              <div className="item" style={{ maxHeight: 150, flexDirection: "column", display: "flex" }}>
                <img style={{ maxHeight: 150, height: 80, marginBottom: 10 }} src="img/nestjs.svg" alt="" />
                <span className="itemTechText" style={{ color: "#eee3" }}>
                  Nest JS
                </span>
                {/* <a href="#" className="full_link" /> */}
              </div>
            </li>
            <li>
              <div className="item" style={{ maxHeight: 150, flexDirection: "column", display: "flex" }}>
                <img style={{ maxHeight: 150, height: 80, marginBottom: 10 }} src="img/mongodb.png" alt="" />
                <span className="itemTechText" style={{ color: "#eee3" }}>
                  MongoDB
                </span>
                {/* <a href="#" className="full_link" /> */}
              </div>
            </li>
            <li>
              <div className="item" style={{ maxHeight: 150, flexDirection: "column", display: "flex" }}>
                <img style={{ maxHeight: 150, height: 80, marginBottom: 10 }} src="img/gcp.png" alt="" />
                <span className="itemTechText" style={{ color: "#eee3" }}>
                  GCP
                </span>
                {/* <a href="#" className="full_link" /> */}
              </div>
            </li>
            <li>
              <div className="item" style={{ maxHeight: 150, flexDirection: "column", display: "flex" }}>
                <img style={{ maxHeight: 150, height: 80, marginBottom: 10 }} src="img/reactjs.svg" alt="" />
                <span className="itemTechText" style={{ color: "#eee3" }}>
                  React Native
                </span>
                {/* <a href="#" className="full_link" /> */}
              </div>
            </li>
            <li>
              <div className="item" style={{ maxHeight: 150, flexDirection: "column", display: "flex" }}>
                <img style={{ maxHeight: 150, height: 80, marginBottom: 10 }} src="img/reactjs.svg" alt="" />
                <span className="itemTechText" style={{ color: "#eee3" }}>
                  React JS
                </span>
                {/* <a href="#" className="full_link" /> */}
              </div>
            </li>
          </ul>
        </div>
        {/* !Investor List Shortcode */}
      </div>
    </section>
  );
};
export default WhyChooseUsComponent;
