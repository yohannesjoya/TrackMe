import React, { useState } from "react";
import "./TaskForm.css";
import { useNavigate } from "react-router-dom";

const TaskBar = () => {
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState(null);
  const [taskText, setTaskText] = useState(null);
  const [err, setErr] = useState(); //! use it for error some where

  const Navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();

    //!   write code that add the task to database you can use fetch or axios
  };
  return (
    <div className="TaskBar__wrapper">
      <form onSubmit={HandleSubmit} className="TaskBar__Form">
        <b
          className="Closer"
          onClick={() => {
            Navigate("/");
          }}
        >
          X
        </b>
        <input
          name="date"
          type="Date"
          className="Task-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          name="title"
          className="Task-title"
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="Task-text"
          name="task"
          id=""
          placeholder="Describe your Task Here"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        ></textarea>
        <button
          disabled={
            date === null ||
            title === null ||
            taskText === null 
              ? true
              : false
          }
          className={`Task__Add-btn ${
            date === null ||
            title === null ||
            taskText === null 
              ? "Disabled-btn"
              : ""
          }`}
        >
          Done
        </button>
      </form>
    </div>
  );
};

export default TaskBar;
