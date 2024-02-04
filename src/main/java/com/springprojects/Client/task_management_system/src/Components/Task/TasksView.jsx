import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEye, FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
//import Search from "../common/Search";

const TasksView = () => {
  const [tasks, setTasks] = useState([]);
  //const [search, setSearch] = useState("");

  useEffect(() => {
    loadTasks();
  }, []); //to call the loadtasks;
  const loadTasks = async () => {
    const result = await axios.get("http://localhost:8080/tasks", {
      validateStatus: () => {
        return true;
      },
    });
    if (result.status == 302) {
      setTasks(result.data); //help us to load tasks from db
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/tasks/delete/${id}`);
    loadTasks();
  };

  return (
    <section>
      {/* <Search search={search} setSearch={setSearch} /> */}
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>People </th>
            <th>Type</th>
            <th>Status</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {tasks
            // .filter((st) => st.firstName.toLowerCase().includes(search))
            .map((task, index) => (
              <tr key={task.id} style={{ width: "15%" }}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
                  {task.name}
                </td>
                <td style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
                  {task.description}
                </td>
                <td>{task.numOfPersonInvolved}</td>
                <td>{task.taskType}</td>
                <td>{task.status}</td>
                <td className="mx-2">
                  <Link to={`/task-view/${task.id}`} className="btn btn-info">
                    <FaEye />
                  </Link>
                </td>
                <td className="mx-2">
                  <Link
                    to={`/edit-task/${task.id}`}
                    className="btn btn-warning">
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(task.id)}>
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default TasksView;
