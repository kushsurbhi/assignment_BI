import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BsFillHandThumbsUpFill, BsCalendarEvent } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

import "./RightSide.css";

function RightSide() {
  return (
    <div className="first">
      <p className="task">Task settings</p>
      <div>
        <select className="dropdown">
          <option>Clever Project</option>
        </select>
      </div>
      <b className="new">Add New Project</b>
      <hr />
      <div className="inline">
        <p className="head_color">Assignee</p>
        <AiOutlineSetting className="setting" />
      </div>
      <div style={{ display: "flex" }}>
        <img src="one.jpg" alt="Avatar" className="avatar" />
        <p className="name">Mark Branson</p>
      </div>
      <div style={{ display: "flex" }}>
        <img src="female.jpg" alt="Avatar" className="avatar" />
        <p className="name">Sara Summer</p>
      </div>
      <hr />
      <div className="inline">
        <p className="head_color">Status</p>
        <AiOutlineSetting className="setting" />
      </div>
      <button className="btn">In progress</button>
      <hr />
      <div className="inline">
        <p className="head_color">Priority</p>
        <AiOutlineSetting className="setting" />
      </div>
      <button className="btn1">
        <BsFillHandThumbsUpFill /> Low
      </button>
      <hr />
      <p className="gap1">Due date</p>
      <div className="inline_1">
        <p className="head_color">select date</p>
        <BsCalendarEvent className="setting" />
      </div>
      <hr />
      <p className="gap1">Notifications</p>
      <button className="noti_btn">
        <IoMdNotificationsOutline className="bell" />
        Subscribe
      </button>
      <p className="para">
        You're not receiving notification from this thread.
      </p>
    </div>
  );
}

export default RightSide;
