import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BsFillHandThumbsUpFill, BsCalendarEvent } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

import "./RightSide.css";

function RightSide() {
  return (
    <div className="first">
      <b>Task settings</b>
      <div>
        <select className="dropdown">
          <option>Clever Project</option>
        </select>
      </div>
      <b className="new">Add New Project</b>
      <hr />
      <div className="inline">
        <p>Assignee</p>
        <AiOutlineSetting className="setting" />
      </div>
      <div>
        <img src="one.jpg" alt="Avatar" className="avatar" />
        <b>Mark Branson</b>
      </div>
      <div>
        <img src="female.jpg" alt="Avatar" className="avatar" />
        <b>Sara Summer</b>
      </div>
      <hr />
      <div className="inline">
        <p>Status</p>
        <AiOutlineSetting className="setting" />
      </div>
      <button className="btn">In progress</button>
      <hr />
      <div className="inline">
        <p>Priority</p>
        <AiOutlineSetting className="setting" />
      </div>
      <button className="btn1">
        <BsFillHandThumbsUpFill /> Low
      </button>
      <hr />
      <p className="gap1">Due date</p>
      <div className="inline">
        <p>select date</p>
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
