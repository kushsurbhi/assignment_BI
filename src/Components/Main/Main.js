import React, { useState } from "react";
import "./Main.css";
import RightSide from "../RightSide/RightSide";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  AiOutlineClose,
  AiFillQuestionCircle,
 
} from "react-icons/ai";
import { BsImages, BsEmojiSmile, BsUpload } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { MdAttachFile } from "react-icons/md";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import LeftSide from "../LeftSide/LeftSide";

function Main() {
  const [description, setDescription] = useState("");
  const [checked, setChecked] = useState([]);
  const [task, setTask] = useState("");
  const [file, setFile] = React.useState({
    bytes: "",
    filename: "./pills.png",
  });
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload(false);
  };

  const handleClickShow = () => {
    setShow(true);
  };

  const handleCloseShow = () => {
    setShow(false);
  };

  // const handleFileChange = (event) => {
  //   setFile({
  //     bytes: event.target.files[0],
  //     filename: URL.createObjectURL(event.target.files[0]),
  //   });
  // };

  function handleSaveFile(event) {
    setFile(event.target.files[0]);
  }

  const checkList = [
    "Keep my mentality healthy by taking walks outside",
    "Build some new components in figma",
    "Figure out how to use Clever from the help center!",
    "Create wireframes for the new dashboards",
  ];

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  const handleCancel = () => {
    // console.log("errrrrrrrrrrr")
    setChecked([]);
    setTask("");
  };
  const handleSaveTask = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your sub-task has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  console.log("description=", description);
  console.log("checked Items=", checkedItems);
  console.log("tasks=", task);
  console.log("file=", file);
  return (
    <div className="main">
      {/* <nav className="navbar navbar-expand-lg bg-white nav_bar_radius">
        <div className="container-fluid ">
          <CgMenuGridO
            style={{ width: "30px", height: "50px" }}
            data-bs-toggle="collapse"
            className="hide_btn"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />

          <div className="hide_btn">
            <button className="save_btn" onClick={handleClickOpen}>
              {" "}
              Save{" "}
            </button>
          </div>
          <div
            className="collapse navbar-collapse nav_bar"
            id="navbarTogglerDemo01"
          >
            <div style={{display:'flex'}}>
              <AiOutlineClose style={{width:'20px', height:'20px'}} className="cross" />
             
              <div className="heading">Create a new Task</div>
            </div>

            <div className="main_start">
              <AiFillQuestionCircle className="ques hide" />
              <p className="help hide">Need help?</p>
              <button className="create_btn hide">Save and create another</button>
              <button className="save_btn" onClick={handleClickOpen}>
                {" "}
                Save{" "}
              </button>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Main Head */}

      <div className="display_header">
        <CgMenuGridO
          style={{ width: "30px", height: "50px", margin: "10px" }}
          onClick={handleClickShow}
        />

        <img src="./Clever.png" className="logo"  alt="logo"/>
      </div>

      <div className="nav_bar_radius">
        <div className="nav_bar">
          <div style={{ display: "flex", paddingTop: "10px" }}>
            <AiOutlineClose
              style={{ width: "20px", height: "20px" }}
              className="cross"
            />

            <div className="heading">Create a new Task</div>
          </div>

          <div className="hide_btn">
            <button className="save_btn" onClick={handleClickOpen}>
              {" "}
              Save{" "}
            </button>
          </div>

          <div className="main_start">
            <AiFillQuestionCircle className="ques hide" />
            <p className="help hide">Need help?</p>
            <button className="create_btn hide">Save and create another</button>
            <button className="save_btn" onClick={handleClickOpen}>
              {" "}
              Save{" "}
            </button>
          </div>
        </div>
      </div>
      {/*  Main Components  */}

      <div style={{ display: "flex" }} className="shown">
        <div className="col-md-8 mid">
          <h2 className="top_gap">Enter your task name...</h2>
          <div className="input1">
            <textarea
              className="input_box"
              value={description}
              placeholder="Enter description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <hr />

            <div className="space_main">
              <p className="word">Markdown formatting</p>
              <div className="smile-icon">
                <BsImages className="gap" />
                <BsEmojiSmile className="gap" />
                <MdAttachFile className="gap" />
              </div>
            </div>
          </div>

          <div className="subtask">
            <p className="subtask_head">Subtasks</p>
            <div className="move">
              {checkList.map((item, index) => (
                <div key={index} style={{ display: "flex", marginTop: "1rem" }} >
                  <input value={item} type="checkbox" onChange={handleCheck}  />

                  <span class={isChecked(item)}  >
                    <div className="check1 ">{item}</div>
                  </span>
                </div>
              ))}
            </div>
            <input
              className="input_tasks"
              value={task}
              placeholder="Add another subtask"
              onChange={(e) => setTask(e.target.value)}
            />
            <div className="task_btn">
              <button className="task_btn1" onClick={handleCancel}>
                Cancel
              </button>
              <button className="task_btn2" onClick={handleSaveTask}>
                Save task
              </button>
            </div>
          </div>
          <p className="subtask_head">Attachment</p>
          <div className="input_box_1">
            <div className="attach_box_dot">
              <input
                type="file"
                id="file-input"
                onChange={(event) => handleSaveFile(event)}
                accept="image/*"
              />{" "}
              <label for="file-input">
                <BsUpload style={{ width: "30px", height: "30px" }} />{" "}
                {file.name}
              </label>
              <p className="up">Upload a file or drag and drop</p>
              <p className="upload2">PNG, JPG, GIF up to 3MB</p>
            </div>
            <p className="upload_file"> {file.name}</p>
          </div>
        </div>
        <div className="col-md-3 right">
          <RightSide />
        </div>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" className="dialog_head">
          Task Detail
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="dialog_show">
              <p className="dialog_title">Task Name:</p>
              <p className="result"> {description}</p>
            </div>
            <div className="dialog_show">
              <p className="dialog_title"> Sub-Task List: </p>
              <p className="result">
                {" "}
                {[checked]} <br /> {task}
              </p>
            </div>
            <div className="dialog_show">
              <p className="dialog_title"> Attatch File: </p>
              <p className="result">
                {" "}
                {file.name} <img src="file.filename" alt="img" />
              </p>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="save_btn">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        fullScreen
        open={show}
        onClose={handleCloseShow}
        // TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <LeftSide />
      </Dialog>
    </div>
  );
}

export default Main;
