import React from "react";
import "./LeftSide.css";
import {
  AiOutlineFolder,
  AiOutlineDown,
  AiOutlineRight,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";
import { BsFiles } from "react-icons/bs";

function LeftSide() {
  return (
    <div className="main_div">
      <div>
        <div className="logo_div">
          <img src="./Clever.png" className="logo" />
        </div>

        <div className="right_one">
          <div className="in_a_line">
            <AiOutlineFolder className="icon" />
            <p className="size">Projects</p>
          </div>
          <div>
            {" "}
            <AiOutlineDown className="icon" />{" "}
          </div>
        </div>
        <p className="space">Overview</p>
        <p className="space">Grid view</p>
        <p className="space">Table view</p>
        <p className="space">Details</p>
        <p className="space">Create Projects</p>
        <div className="rone">
          <div className="in_a_line">
            <BiBarChartSquare className="icon" />
            <p className="size">Tasks</p>
          </div>
          <div>
            {" "}
            <AiOutlineRight className="icon" />{" "}
          </div>
        </div>
        <div className="rone">
          <div className="in_a_line">
            <BsFiles className="icon" />
            <p className="size">Files</p>
          </div>
          <div>
            {" "}
            <AiOutlineRight className="icon" />{" "}
          </div>
        </div>
        <div className="rone">
          <div className="in_a_line">
            <AiOutlineFolder className="icon" />
            <p className="size">Integrations</p>
          </div>
          <div>
            {" "}
            <AiOutlineRight className="icon" />{" "}
          </div>
        </div>
        <div className="rone">
          <div className="in_a_line">
            <AiOutlineSetting className="icon" />
            <p className="size">Settings</p>
          </div>
          <div>
            {" "}
            <AiOutlineRight className="icon" />{" "}
          </div>
        </div>
        <hr />
        <p className="size_1">Resources</p>
        <div className="in_a_line">
          <AiOutlineFolder className="icon" />
          <p className="size">Documentation</p>
        </div>
        <div className="rone">
          <div className="in_a_line">
            <BsFiles className="icon" />
            <p className="size">Privacy Policy</p>
          </div>
          <button className="but">new</button>
        </div>
      </div>
      <button className="bottom">Tahlia Mooney </button>
    </div>
  );
}

export default LeftSide;
