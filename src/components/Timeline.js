import Link from "next/link";
import { Fragment, useState } from "react";
const Timeline = () => {
  const [active, setActive] = useState(3);
  const [activeTimeline, setActiveTimeline] = useState(3);
  const onClick = (value) => {
    setActive(value);
  };
  const activeClass = (value) => (value === active ? "active" : value > active ? "next" : "previous");
  const filter = (value) => (100 / active) * value;
  return (
    <Fragment>
      {/* Main Title */}
      <div className="neoh_fn_title">
        <h3 className="fn_title">Best Experiences</h3>
        <div className="line">
          <span />
        </div>
      </div>
      {/* !Main Title */}
      {/* Timeline */}
      <div className="neoh_fn_timeline">
        {/* Timeline Content */}
        <div className="timeline_content">
          <ul className="timeline_list">
            <li className={`timeline_item ${activeClass(1)}`} data-index={1}>
              <div className="t_item" style={{ maxHeight: 360 }}>
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <img src="img/evolution.jpeg" style={{ objectFit: "contain", maxHeight: 250 }} alt="Evolution soluciones digitales" />
                      </div>
                      <div className="item">
                        <img src="img/ucsm.svg" alt="" />
                      </div>
                      <div className="item">
                        <img src="img/unitt.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>July 2015 - December 2019</span>
                  </p>
                  <h3 className="fn_title">
                    Evolution Soluciones Digitales
                    {/* <Link href="/roadmap-single">
                      </Link> */}
                  </h3>
                  <p className="fn_desc">
                    Development of a virtual chemistry laboratory project with the use of Leap Motion. (Unity) <br />
                    Development of an ecommerce shopping project. <br />
                    Development of landing page Tecsup. <br />
                    Frontend development project Creator of Apps. <br />
                  </p>
                  {/* <p className="fn_read">
                    <Link href="/roadmap-single">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p> */}
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(2)}`} data-index={2}>
              <div className="t_item" style={{ maxHeight: 360 }}>
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <img src="img/smartbot.png" style={{ objectFit: "contain", maxHeight: 250 }} alt="Smartbot education" />
                      </div>
                      <div className="item">
                        <img src="img/lego.png" style={{ objectFit: "contain", height: 100 }} alt="" />
                      </div>
                      <div className="item">
                        <img src="img/python.png" style={{ objectFit: "contain", height: 150 }} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>January 2016 - April 2017</span>
                  </p>
                  <h3 className="fn_title">
                    {/* <Link href="/roadmap-single">Smartbot</Link> */}
                    Smartbot
                  </h3>
                  <p className="fn_desc">
                    Teaching in robotics with lego modules EV3 Mindstorn Weedo.
                    <br />
                    Teaching programming with python.
                  </p>
                  {/* <p className="fn_read">
                    <Link href="/roadmap-single">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p> */}
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(3)}`} data-index={3}>
              <div className="t_item" style={{ maxHeight: 360 }}>
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <img src="img/nodejs.svg" style={{ objectFit: "contain", maxHeight: 250 }} alt="Node JS" />
                      </div>
                      <div className="item" style={{ minHeight: 159, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <img src="img/angular.png" style={{ objectFit: "contain" }} alt="Angular CLI" />
                      </div>
                      <div className="item" style={{ minHeight: 159, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <img src="img/reactjs.svg" style={{ objectFit: "contain", height: 100 }} alt="React JS" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>January 2016</span>
                  </p>
                  <h3 className="fn_title">
                    {/* <Link href="/roadmap-single">Freelance</Link> */}
                    Freelance Developer
                  </h3>
                  <p className="fn_desc">
                    Java-nation landing page project.
                    <br />
                    Project landing page Calico Construction Inc.
                    <br />
                    Dr In House web dashboard project.
                    <br />
                    GanaConIlaria App mobile / Web / Backoffice
                  </p>
                  {/* <p className="fn_read">
                    <Link href="/roadmap-single">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p> */}
                </div>
              </div>
            </li>

            <li className={`timeline_item ${activeClass(4)}`} data-index={4}>
              <div className="t_item" style={{ maxHeight: 360 }}>
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <img src="img/shellcatch.png" style={{ objectFit: "contain", maxHeight: 250, maxWidth: 250 }} alt="Shellcatch INC" />
                      </div>
                      <div className="item" style={{ minHeight: 159, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <img src="img/frescapesca.png" style={{ objectFit: "contain", height: 100 }} alt="Frescapesca" />
                      </div>
                      <div className="item" style={{ minHeight: 159, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <img src="img/ereporting.png" style={{ objectFit: "contain", height: 100 }} alt="Ereporting" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>June 15, 2022</span>
                  </p>
                  <h3 className="fn_title">
                    <Link href="/roadmap-single">Shellcatch</Link>
                  </h3>
                  <p className="fn_desc">
                    Development of e-Reporting Project.
                    <br />
                    Development of Frescapesca Project.
                    <br />
                    Shellcatch.com landing page.
                    <br />
                    Requirements analysis and planning.
                  </p>
                  {/* <p className="fn_read">
                    <Link href="/roadmap-single">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p> */}
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(5)}`} data-index={5}>
              <div className="t_item" style={{ maxHeight: 360 }}>
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <img src="img/pineapple.png" style={{ objectFit: "contain", maxHeight: 250 }} alt="Pineapple academy" />
                      </div>
                      <div className="item" style={{ minHeight: 159, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <img src="img/reactjs.svg" style={{ objectFit: "contain", height: 100 }} alt="React JS" />
                      </div>
                      <div className="item" style={{ minHeight: 159, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <img src="img/angular.png" style={{ objectFit: "contain" }} alt="Angular CLI" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>August 2020 - August 2021</span>
                  </p>
                  <h3 className="fn_title">
                    {/* <Link href="/roadmap-single">The Pineapple Academy</Link> */}
                    The Pineapple Academy
                  </h3>
                  <p className="fn_desc">
                    Frontend pineapple academy project. <br />
                    Create a eLearning with ReactJS and ScormLMS
                  </p>
                  {/* <p className="fn_read">
                    <Link href="/roadmap-single">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p> */}
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(6)}`} data-index={6}>
              <div className="t_item" style={{ maxHeight: 360 }}>
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <img src="img/rootstack.png" style={{ objectFit: "contain", maxHeight: 250 }} alt="Rootstack" />
                      </div>
                      <div className="item" style={{ minHeight: 159, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <img src="img/reactjs.svg" style={{ objectFit: "contain", height: 100 }} alt="React JS" />
                      </div>
                      <div className="item" style={{ minHeight: 159, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <img src="img/angular.png" style={{ objectFit: "contain" }} alt="Angular CLI" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>October 2021 - August 2021</span>
                  </p>
                  <h3 className="fn_title">
                    {/* <Link href="/roadmap-single">The Pineapple Academy</Link> */}
                    Rootstack
                  </h3>
                  <p className="fn_desc">
                    Fullstack Javascript developer <br />
                    Differts projects with Nextjs - React Native <br />
                    Project with Wordpress <br />
                    Project with Ruby on Rails
                  </p>
                  {/* <p className="fn_read">
                    <Link href="/roadmap-single">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p> */}
                </div>
              </div>
            </li>
            <li className={`timeline_item ${activeClass(7)}`} data-index={7}>
              <div className="t_item" style={{ maxHeight: 360 }}>
                <div className="t_item_img">
                  <div className="neoh_fn_gallery_1_2">
                    <div className="gallery_in">
                      <div className="item row2" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <img src="img/coderhouse.png" style={{ objectFit: "contain", maxHeight: 250 }} alt="Rootstack" />
                      </div>
                      <div className="item" style={{ minHeight: 159, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <img src="img/javascript.png" style={{ objectFit: "contain", height: 100 }} alt="Javascript" />
                      </div>
                      <div className="item" style={{ minHeight: 159, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <img src="img/nodejs.svg" style={{ objectFit: "contain" }} alt="Node js" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t_item_info">
                  <p className="fn_date">
                    <span>December 2021</span>
                  </p>
                  <h3 className="fn_title">
                    {/* <Link href="/roadmap-single">The Pineapple Academy</Link> */}
                    Coderhouse
                  </h3>
                  <p className="fn_desc">
                    I'm a proffesor and I teach Javascript Variables <br />
                    Functions <br />
                    Classes <br />
                    POO
                  </p>
                  {/* <p className="fn_read">
                    <Link href="/roadmap-single">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Read More</span>
                      </a>
                    </Link>
                  </p> */}
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* !Timeline Content */}
        {/* Timeline Progress */}
        <div className="timeline_progress">
          {/* Nav */}
          <a className="nav_prev c-pointer" onClick={() => setActiveTimeline(activeTimeline == 1 ? activeTimeline : activeTimeline - 1)}>
            <img src="svg/right-arr.svg" alt="" className="fn__svg" />
          </a>
          <a onClick={() => setActiveTimeline(activeTimeline == 7 ? activeTimeline : activeTimeline + 1)} className="nav_next c-pointer">
            <img src="svg/right-arr.svg" alt="" className="fn__svg" />
          </a>
          {/* !Nav */}
          <div className="progress_line_wrapper">
            <div
              className="progress_line"
              style={{
                width: "1645.66px",
                transform: `translateX(-${(100 / activeTimeline) * (activeTimeline - 2)}%)`,
              }}
            >
              <ul>
                <li className={activeClass(1)}>
                  <a onClick={() => onClick(1)}>
                    <span className="text">July - 2015</span>
                    <span className="circle" style={{ filter: `brightness(${filter(1)}%)` }} />
                  </a>
                </li>
                <li className={activeClass(2)}>
                  <a onClick={() => onClick(2)}>
                    <span className="text">January - 2016</span>
                    <span className="circle" style={{ filter: `brightness(${filter(2)}%)` }} />
                  </a>
                </li>
                <li className={activeClass(3)}>
                  <a onClick={() => onClick(3)}>
                    <span className="text">January - 2016</span>
                    <span className="circle" style={{ filter: `brightness(${filter(3)}%)` }} />
                  </a>
                </li>
                <li className={activeClass(4)}>
                  <a onClick={() => onClick(4)}>
                    <span className="text">August - 2018</span>
                    <span className="circle" style={{ filter: `brightness(${filter(4)}%)` }} />
                  </a>
                </li>
                <li className={activeClass(5)}>
                  <a onClick={() => onClick(5)}>
                    <span className="text">August, 2020</span>
                    <span className="circle" style={{ filter: `brightness(${filter(5)}%)` }} />
                  </a>
                </li>
                <li className={activeClass(6)}>
                  <a onClick={() => onClick(6)}>
                    <span className="text">October 2021</span>
                    <span className="circle" style={{ filter: `brightness(${filter(6)}%)` }} />
                  </a>
                </li>
                <li className={activeClass(7)}>
                  <a onClick={() => onClick(7)}>
                    <span className="text">December 2021</span>
                    <span className="circle" style={{ filter: `brightness(${filter(7)}%)` }} />
                  </a>
                </li>
              </ul>
              <span className="active_line" />
            </div>
          </div>
        </div>
        {/* !Timeline Progress */}
      </div>
      {/* !Timeline */}
    </Fragment>
  );
};
export default Timeline;
