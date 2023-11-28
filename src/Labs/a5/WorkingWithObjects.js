import React, { useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const URL = "https://kanbas-node-server-app-qcek.onrender.com/a5/assignment";
  return (
    <div>
      <hr />
      <h3>Working With Objects</h3>
      <input
        className="form-control"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <a
        href={`https://kanbas-node-server-app-qcek.onrender.com/a5/assignment/title/${assignment.title}`}
        className="btn btn-primary">
        Update Assignment Title
      </a>

      <h4>Assignment</h4>

      <a
        href={`https://kanbas-node-server-app-qcek.onrender.com/a5/assignment/title`}
        className="btn btn-primary">
        Get Assignment Title
      </a>
      <a
        href={`https://kanbas-node-server-app-qcek.onrender.com/a5/assignment`}
        className="btn btn-primary float-end">
        Get Assignment
      </a>
      <h4>Modifying Properties</h4>
      <a
        href={`${URL}/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end">
        Update Title
      </a>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text"
      />
      <a
        href={`${URL}/score/${assignment.score}`}
        className="btn btn-primary float-end">
        Update Score
      </a>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, score: e.target.value })
        }
        value={assignment.value}
        className="form-control mb-2 w-75"
        type="number"
      />
      <button
        className="btn btn-primary float-end"
        onClick={(e) =>
          setAssignment({ ...assignment, checked: e.target.checked })
        }>
        SetCompleted
      </button>
      <a
        href={`${URL}/completed/${assignment.completed}`}
        className="btn btn-primary me-2">
        Update completed
      </a>

      <h4>Retrieving Objects</h4>
      <a
        href="https://kanbas-node-server-app-qcek.onrender.com/a5/assignment"
        className="btn btn-primary me-2">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        href="https://kanbas-node-server-app-qcek.onrender.com/a5/assignment/title"
        className="btn btn-primary me-2">
        Get Title
      </a>
    </div>
  );
}
export default WorkingWithObjects;
