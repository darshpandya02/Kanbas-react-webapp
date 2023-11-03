import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => alert("Add Assignment")}
        style={{
          backgroundColor: "red",
          color: "white",
          borderDecoration: "none",
          float: "right",
        }}>
        Assignment
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => alert("Add Group")}
        style={{
          backgroundColor: "lightgray",
          color: "black",
          float: "right",
        }}>
        Group
      </button>
      <hr />
      <h2>Assignments for course {courseId}</h2>
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            {assignment.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
