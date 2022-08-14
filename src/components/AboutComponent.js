import Link from "next/link";
const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/about/photo.jpeg" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Who i am ?</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>My name is Alex Andre Paredes Aranzamendi, I'm Fullstack javascript developer with experience in project analysis, planning, development and implementation. </p>
              <p>I consider myself a responsible and helpful person with experience working with small and large groups. Emphasizing soft skills and good interpersonal relationships. I consider that during my professional experience I acquired solid knowledge in the development of mobile applications, websites and team leadership.</p>
            </div>
            <div className="buttons">
              <a href="https://github.com/aapa96" target="_blank" rel="noreferrer" className="neoh_fn_button">
                <span className="icon">
                  <img src="svg/github.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/alexparedesaranzamendi/" target="_blank" rel="noreferrer" className="neoh_fn_button">
                <span className="icon">
                  <img src="svg/linkedln.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">Linkedln</span>
              </a>
            </div>
          </div>
        </div>
        {/* !About Item #1 */}
        {/* About Item #2 */}
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/yoworking.jpeg" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">About me</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>I am fascinated by solving problems and proposing solutions, and at the same time I have been working with clients from different countries of LATAM and USA.</p>
              <p>
              I have the pleasure of learning in a self-taught way by researching and putting into practice. In the same way, mention that I'm part of the Scout association, which is the largest for young people. It allows me to strengthen soft skills and everything related to teamwork, whether small or large.
              </p>
            </div>
            {/* <div className="buttons">
              <Link href="/about">
                <a className="neoh_fn_button only_text">
                  <span className="text">More About US</span>
                </a>
              </Link>
            </div> */}
          </div>
        </div>
        {/* !About Item #2 */}
      </div>
    </section>
  );
};
export default AboutComponent;
