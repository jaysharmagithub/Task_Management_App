import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import TasksView from "./Components/Task/TasksView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "./Components/Task/AddTask";
import EditTask from "./Components/Task/EditTask";
import Home from "./Components/Home/Home";
import NavBar from "./Components/common/NavBar";
import ViewTask from "./Components/Task/ViewTask";
function App() {
  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-tasks" element={<TasksView />} />
          <Route path="/add-tasks" element={<AddTask />} />
          <Route path="/edit-task/:id" element={<EditTask />} />
          <Route path="/task-view/:id" element={<ViewTask />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
