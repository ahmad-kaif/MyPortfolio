import React from "react";
import { skills, experiences } from "../constants";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {``
  return (
    <section className="max-container bg-black text-white">
      <h1 className="head-text text-white">
        Hello, I'm <span className="text-[#285c8f] font-semibold drop-shadow">Ahmad Kaif</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3">
        <p>
          Software Engineer based in India, I code and Develop!
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-10">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20 bg-black border border-black rounded-lg" key={skill.name}>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain bg-transparent"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">My Education</h3>
        <div className="mt-5 flex flex-col gap-3">
          <p>
            I've worked with all sorts of companies, leveling up my skills and teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          {experiences && experiences.length > 0 ? (
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full bg-transparent">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="rounded-2xl w-8"
                      />
                    </div>
                  }
                  contentStyle={{
                    background: "black",
                    border: `0.5px solid ${experience.iconBg}`,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-white text-xl font-poppins font-semibold">{experience.title}</h3>
                    <p className="text-gray-400 font-medium text-base" style={{ margin: 0 }}>
                      {experience.company_name}
                    </p>
                    <p className="text-gray-400 font-medium text-base" style={{ margin: 0 }}>
                      CGPA - {experience.percentage}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`} className="font-normal pl-1 text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          ) : (
            <p className="text-gray-400">No work experiences available.</p>
          )}
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Ensure CTA component is defined correctly */}
      <CTA />
    </section>
  );
};

export default About;
