import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditTask = () => {
  let navigate = useNavigate();

  const { id } = useParams();
  const [task, setTask] = useState({
    name: "",
    description: "",
    numOfPersonInvolved: "",
    taskType: "",
    status: "",
  });

  const { name, description, numOfPersonInvolved, taskType, status } = task;

  useEffect(() => {
    loadTask();
  }, []); //to call the loadtask;

  const loadTask = async () => {
    const result = await axios.get(`http://localhost:8080/tasks/task/${id}`);

    setTask(result.data); //help us to load tasks from db
  };

  const handleInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  }; //handles changes in any of the input fields within the form

  const updateTask = async (e) => {
    e.preventDefault(); //to avoid default reloading of the html form when it's saved
    await axios.put(`http://localhost:8080/tasks/update/${id}`, task);
    navigate("/view-tasks");
  };

  return (
    <div className="col-sm-8 py-2 px-5 ">
      <form onSubmit={(e) => updateTask(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="name">
            Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="description">
            Description
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="description"
            id="description"
            required
            value={description}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="numOfPersonInvolved">
            People Involved
          </label>
          <input
            className="form-control col-sm-6"
            type="number"
            name="numOfPersonInvolved"
            id="numOfPersonInvolved"
            required
            value={numOfPersonInvolved}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="taskType">
            type
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="taskType"
            id="taskType"
            required
            value={taskType}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="status">
            Status
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="status"
            id="status"
            required
            value={status}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Save
            </button>
          </div>
          <div className="col-sm-2">
            <Link
              to={"/view-tasks"}
              type="submit"
              className="btn btn-outline-warning btn-lg">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
