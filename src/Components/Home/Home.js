import React from "react";
import LeftSide from "../LeftSide/LeftSide";
import Main from "../Main/Main";
import "./Home.css";
function Home() {
  return (
    <div>
      <div className=" sidebar">
        <LeftSide />
      </div>
      <div className=" right_side">
        <Main />
      </div>
    </div>
  );
}

export default Home;
