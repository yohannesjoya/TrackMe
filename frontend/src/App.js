import "./App.css";
import { Header, NewsBanner, TaskForm, TaskBar } from "./Components/index";
import { Routes, Route } from "react-router-dom";
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
      </Routes>
    </div>
  );
}

export default App;
