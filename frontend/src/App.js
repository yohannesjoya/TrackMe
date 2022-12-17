import "./App.css";
import {
  Header,
  NewsBanner,
  TaskForm,
  TaskBar,
  Login,
} from "./Components/index";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Jo from "./Components/Jo.jsx";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <NewsBanner />
              <TaskForm />
            </>
          }
        />
        <Route path="/addtask" element={<TaskBar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Jo /> */}
    </div>
  );
}

export default App;
