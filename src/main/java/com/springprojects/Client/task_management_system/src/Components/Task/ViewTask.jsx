import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ViewTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState({
    name: "",
    description: "",
    numOfPersonInvolved: "",
    taskType: "",
    status: "",
  });

  useEffect(() => {
    loadTask();
  }, []); //to call the loadtasks

  const loadTask = async () => {
    const result = await axios.get(`http://localhost:8080/tasks/task/${id}`);

    setTask(result.data); //help us to load tasks from db
  };
  return (
    <section
      className="shadow pt-3"
      style={{
        backgroundColor: "whitesmoke",
        maxWidth: "80%",
        margin: "0 auto",
      }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="card mb-4">
              <div className="card-body">
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Task </h5>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{task.name}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Description</h5>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{task.description}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">People</h5>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {task.numOfPersonInvolved}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Type</h5>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{task.taskType}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Status</h5>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{task.status}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewTask;
