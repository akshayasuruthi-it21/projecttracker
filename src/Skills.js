import ProgressBar from "@ramonak/react-progress-bar";
import React, { useEffect } from "react";
import { InView, useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const CounterUp = ({ end, delay, duration }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      // Start the counter when the component is in view
      setTimeout(() => {}, delay);

      // Stop the counter after the specified duration
      setTimeout(() => {}, delay + duration);
    }
  }, [inView, delay, duration]);

  return (
    <span ref={ref}>
      {inView ? <CountUp end={end} duration={duration} /> : 0}
    </span>
  );
};

const Experience = () => {
  const tabsData = [
    {
      id: "tab-1",
      label: "Experience",
      items: [
        {
          title: "UI Designer",
          date: "2000 - 2045",
          company: "Apex Software Inc",
        },
        {
          title: "Product Designer",
          date: "2000 - 2045",
          company: "Apex Software Inc",
        },
        {
          title: "Web Designer",
          date: "2000 - 2045",
          company: "Apex Software Inc",
        },
        {
          title: "Apps Designer",
          date: "2000 - 2045",
          company: "Apex Software Inc",
        },
      ],
    },
    {
      id: "tab-2",
      label: "Education",
      items: [
        {
          title: "UI Design Course",
          date: "2000 - 2045",
          institution: "Cambridge University",
        },
        {
          title: "IOS Development",
          date: "2000 - 2045",
          institution: "Cambridge University",
        },
        {
          title: "Web Design",
          date: "2000 - 2045",
          institution: "Cambridge University",
        },
        {
          title: "Apps Design",
          date: "2000 - 2045",
          institution: "Cambridge University",
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
        <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
          {tabsData.map((tab) => (
            <li key={tab.id} className="nav-item w-50">
              <button
                className={`nav-link w-100 py-3 fs-5 ${
                  tab.id === tabsData[0].id ? "active" : ""
                }`}
                data-bs-toggle="pill"
                href={`#${tab.id}`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {tabsData.map((tab) => (
            <div
              key={tab.id}
              id={tab.id}
              className={`tab-pane fade show p-0 ${
                tab.id === tabsData[0].id ? "active" : ""
              }`}
            >
              <div className="row gy-5 gx-4">
                {tab.items.map((item, index) => (
                  <div key={index} className="col-sm-6">
                    <h5>{item.title}</h5>
                    <hr className="text-primary my-2" />
                    <p className="text-primary mb-1">{item.date}</p>
                    <h6 className="mb-0">
                      {tab.label === "Experience"
                        ? item.company
                        : item.institution}
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

const Skill = ({ name, percentage, color }) => (
  <InView triggerOnce>
    {({ inView, ref }) => (
      <div className="skill mb-4" ref={ref}>
        <div className="d-flex justify-content-between">
          <h6 className="font-weight-bold">{name}</h6>
          <h6 className="font-weight-bold">
            <CounterUp end={inView ? percentage : 0} delay={500} duration={4} />
            %
          </h6>
        </div>
        <div className={`progress-bar-wrapper ${inView ? "visible" : ""}`}>
          <ProgressBar
            completed={inView ? percentage : 0}
            bgColor={color}
            height="5px"
            transitionDuration={inView ? "4.5s" : "0s"}
            animateOnRender
            isLabelVisible={false}
          />
        </div>
      </div>
    )}
  </InView>
);

const Skills = () => {
  const skillsData = [
    { name: "HTML", percentage: 95, color: "#6244C5" },
    { name: "CSS", percentage: 85, color: "#ffc107" },
    { name: "PHP", percentage: 90, color: "#dc3545" },
    { name: "Javascript", percentage: 90, color: "#dc3545" },
    { name: "Angular JS", percentage: 95, color: "#12141D" },
    { name: "Wordpress", percentage: 85, color: "#0dcaf0" },
  ];
  return (
    <React.Fragment>
      <div className="container-xxl py-6 pb-5" id="skill">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="display-5 mb-5">Skills &amp; Experience</h1>
              <h3 className="mb-4">My Skills</h3>
              <div className="row align-items-center">
                <div className="col-md-6">
                  {skillsData
                    .slice(0, skillsData.length / 2)
                    .map((skill, index) => (
                      <Skill key={index} {...skill} />
                    ))}
                </div>
                <div className="col-md-6">
                  {skillsData
                    .slice(skillsData.length / 2)
                    .map((skill, index) => (
                      <Skill key={index} {...skill} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
