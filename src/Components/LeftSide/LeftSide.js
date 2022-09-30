import React from "react";
import "./LeftSide.css";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  AiOutlineFolder,
  AiOutlineDown,
  AiOutlineRight,
  AiOutlineSetting,
} from "react-icons/ai";

import { BiBarChartSquare } from "react-icons/bi";
import { BsFiles } from "react-icons/bs";

function LeftSide() {

 






  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="main_div">
      <div>
        <div className="logo_div">
          <img src="./Clever.png" className="logo" alt="logo"/>
        </div>

        <div className="right_one">
          <div className="in_a_line">
            <AiOutlineFolder className="icon" />
            <p className="size">Projects</p>
          </div>
          <div>
            {" "}
            <AiOutlineRight className="icon" />{" "}
          </div>
        </div>

{/* <div class="dropdown">
  <div  type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <div className="right_one">
          <div className="in_a_line">
            <AiOutlineFolder className="icon" />
            <p className="size">Projects</p>
          </div>
          <div>
            {" "}
            <AiOutlineRight className="icon" />{" "}
          </div>
        </div>
  </div>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    
  </ul>
</div> */}
       
       
        
          
        
     

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
      <button className="bottom">
        <img src="one.jpg" alt="Avatar" className="avatar_new" />
        Tahlia Mooney
      </button>
    </div>
  );
}

export default LeftSide;
