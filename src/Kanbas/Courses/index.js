import React from "react";
import {
  useParams,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import {AiOutlineMenu} from "react-icons/ai";

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [empty, kanbas, courses, id, screen] = pathname.split("/");
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item" style={{color: 'red', paddingTop: '25px', paddingLeft: '25px', paddingRight: '10px'}}>
            <a href="#">
              <AiOutlineMenu style={{marginRight: '10px'}} />
              CS5610.11744.23210
            </a>
          </li>
          <li
            class="breadcrumb-item active"
            aria-current="page"
            style={{paddingTop: '25px', paddingLeft: '25px'}}
          >
            Modules
          </li>
        </ol>
      </nav>
      <hr />
      {/* <h1>
        Courses {course.name} / {screen}
      </h1> */}
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "70px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
