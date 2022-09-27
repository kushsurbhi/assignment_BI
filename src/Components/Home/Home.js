import React from "react";
import LeftSide from "../LeftSide/LeftSide";
import Main from "../Main/Main";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home_1">
        <div className="col-md-3 sidebar">
          <LeftSide />
        </div>
        <div className="col-md-9 right_side">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default Home;
