import React, { useState, useEffect } from "react";
import "./TaskForm.css";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {
  const Navigate = useNavigate();
  useEffect(() => { 
// ! fetch the data from backend to show them below 
  },[])

  return (
    <div className="TaskForm__wrapper">
      <div className="TaskForm__Form-Date">
        <h4>Date: 12/12/2022</h4>
        <h2>What Do wanna Do Today?</h2>
      </div>
      <div
        className="TaskForm__Form-task-adder"
        onClick={() => {
          Navigate("/addtask");
        }}
      >
        <p>
          <b>+</b>Add Task
        </p>
      </div>
      <div>
        {/* place for showing the task from backend 
      write a code that fetches the data by date from the database and shows the user todays task 
      the code should map over the response and create horizontal bar that show the Title and button to click it as Done or if it is done show status
      
      */}
      </div>
    </div>
  );
};

export default TaskForm;
