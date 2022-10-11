import React from "react";
import "./LeftSide.css";

import { AiOutlineFolder, AiOutlineSetting } from "react-icons/ai";
import { VscChevronRight } from "react-icons/vsc";
import { BiBarChartSquare } from "react-icons/bi";
import { BsFiles } from "react-icons/bs";

function LeftSide() {
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <div className="main_div">
      <div>
        <div className="logo_div">
          {/* <img src="./Clever.png" className="logo" alt="logo"/> */}
          <p className="logo_para">Clever</p>
        </div>

        <details className="right_one">
          <summary className="in_a_line">
            <AiOutlineFolder className="icon" />
            <p className="size">Projects</p>

            <div style={{ marginLeft: "auto" }}>
              {" "}
              <VscChevronRight className="icon_1" />{" "}
            </div>
          </summary>
          <div className="drop">OverView</div>
        </details>

        <details className="right_one" style={{backgroundColor:'#f5f9fc'}}>
          <summary className="in_a_line">
            <BiBarChartSquare className="icon" />
            <p className="size">Tasks</p>

            <div style={{ marginLeft: "auto" }}>
              {" "}
              <VscChevronRight className="icon_1" />{" "}
            </div>
          </summary>
          <div className="drop">OverView</div>
        </details>

        <details className="right_one">
          <summary className="in_a_line">
            <BsFiles className="icon" />
            <p className="size">Files</p>

            <div style={{ marginLeft: "auto" }}>
              {" "}
              <VscChevronRight className="icon_1" />{" "}
            </div>
          </summary>
          <div className="drop">OverView</div>
        </details>

        <details className="right_one">
          <summary className="in_a_line">
            <AiOutlineFolder className="icon" />
            <p className="size">Integrations</p>

            <div style={{ marginLeft: "auto" }}>
              {" "}
              <VscChevronRight className="icon_1" />{" "}
            </div>
          </summary>
          <div className="drop">OverView</div>
        </details>

        <details className="right_one">
          <summary className="in_a_line">
            <BsFiles className="icon" />
            <p className="size">User</p>

            <div style={{ marginLeft: "auto" }}>
              {" "}
              <VscChevronRight className="icon_1" />{" "}
            </div>
          </summary>
          <div className="drop">OverView</div>
        </details>

        <details className="right_one">
          <summary className="in_a_line">
            <AiOutlineSetting className="icon" />
            <p className="size">Settings</p>

            <div style={{ marginLeft: "auto" }}>
              {" "}
              <VscChevronRight className="icon_1" />{" "}
            </div>
          </summary>
          <div className="drop">OverView</div>
        </details>

        <details className="right_one">
          <summary className="in_a_line">
            <BiBarChartSquare className="icon" />
            <p className="size">Authentication</p>

            <div style={{ marginLeft: "auto" }}>
              {" "}
              <VscChevronRight className="icon_1" />{" "}
            </div>
          </summary>
          <div className="drop">OverView</div>
        </details>

        {/* <div class="dropdown">
  <div  type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <div className="right_one">
          <div className="in_a_line">
            <AiOutlineFolder className="icon" />
            <p className="size">Projects</p>
          </div>
          <div>
            {" "}
            <VscChevronRight className="icon" />{" "}
          </div>
        </div>
  </div>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    
  </ul>
</div> */}

        {/* <div className="rone">
          <div className="in_a_line">
            <BiBarChartSquare className="icon" />
            <p className="size">Tasks</p>
          </div>
          <div>
            {" "}
            <VscChevronRight className="icon" />{" "}
          </div>
        </div>
        <div className="rone">
          <div className="in_a_line">
            <BsFiles className="icon" />
            <p className="size">Files</p>
          </div>
          <div>
            {" "}
            <VscChevronRight className="icon" />{" "}
          </div>
        </div>
        <div className="rone">
          <div className="in_a_line">
            <AiOutlineFolder className="icon" />
            <p className="size">Integrations</p>
          </div>
          <div>
            {" "}
            <VscChevronRight className="icon" />{" "}
          </div>
        </div>
        <div className="rone">
          <div className="in_a_line">
            <AiOutlineSetting className="icon" />
            <p className="size">Settings</p>
          </div>
          <div>
            {" "}
            <VscChevronRight className="icon" />{" "}
          </div>
        </div> */}
        <hr />
        <p className="size_1">RESOURCES</p>
        <div className="in_a_line">
          <AiOutlineFolder className="icon" />
          <p className="size">Documentation</p>
        </div>
        {/* <div className="rone">
          <div className="in_a_line">
            <BsFiles className="icon" />
            <p className="size">Privacy Policy</p>
          </div>
          <button className="but">new</button>
        </div> */}
      </div>
      <button className="bottom">
        <img src="female.jpg" alt="Avatar" className="avatar_new" />
        surbhi kushwah
      </button>
    </div>
  );
}

export default LeftSide;
