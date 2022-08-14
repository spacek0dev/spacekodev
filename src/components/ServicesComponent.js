const ServicesComponent = () => {
  return (
    <section id="services">
      {/* Dividers */}
      <img src="svg/divider.svg" alt="" className="fn__svg fn__divider top_divider" />
      <img src="svg/divider.svg" alt="" className="fn__svg fn__divider bottom_divider" />
      {/* !Dividers */}
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">Why work together?</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Services */}
        <div className="neoh_fn_services">
          <ul>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>01</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">New ideas</h3>
                  <p className="fn_desc fn_animated_text">
                  We will do teamwork and this will reveal new and fresh ideas. And those new ideas are invaluable in today's competitive business environment.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>02</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Improved Efficiency</h3>
                  <p className="fn_desc fn_animated_text">
                    We'll work together, this will allow you to break down difficult tasks into more manageable chunks and complete them faster.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>03</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">More Learning Opportunities</h3>
                  <p className="fn_desc fn_animated_text">we will work as a team this allows us to learn from each other without undue risk. All learning strengthens the team</p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>04</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Faster Innovation</h3>
                  <p className="fn_desc fn_animated_text">
                    That's better for your business because trust and friendship (and strong working relationships) breed: communication Support for Motivation cooperation They are
                    traits that every team exhibit
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* !Services */}
      </div>
    </section>
  );
};
export default ServicesComponent;
