import React from "react";
import "./Programs.css";
import { programsData } from '../../data/programsData';
import RightArrow from "../../assets/rightArrow.png"
import { Link } from "react-scroll";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <Link to="join-us" span={true} smooth={true}>
      <div className="program-categories">
        {programsData.map((program, index) => (
          <div key={index} className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now"><span>Join Now</span><img src={RightArrow} alt="" /></div>
          </div>
        ))}
      </div>
      </Link>
    </div>
  );
};

export default Programs;
