import { React, useState } from "react";
import db from "../Database";
import { Link } from "react-router-dom";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  // const [courses, setCourses] = useState(db.courses);
  // // const course = {
  // //   name: "New Course",
  // //   number: "New Number",
  // //   startDate: "2023-09-10",
  // //   endDate: "2023-12-15",
  // // };
  // const [course, setCourse] = useState({
  //   name: "New Course",
  //   number: "New Number",
  //   startDate: "2023-09-10",
  //   endDate: "2023-12-15",
  // });

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  // const addNewCourse = () => {
  //   setCourses([...courses, { ...course, _id: new Date().getTime() }]);
  // };

  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h5>Course</h5>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <button className="btn btn-outline-success" onClick={addNewCourse}>
        Add
      </button>
      <button
        className="btn btn-outline-warning"
        onClick={() => updateCourse(course)}>
        Update
      </button>

      <h2>Published Courses ({courses.length})</h2>
      <div class="row row-cols-1 row-cols-xxxl-3 list-group">
        <div className="col">
          {courses.map((course) => (
            <div key={course._id} className="list-group-item">
              <button
                className="btn btn-outline-warning"
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}>
                Edit
              </button>

              <button
                className="btn btn-outline-danger"
                onClick={() => deleteCourse(course)}>
                Delete
              </button>

              <Link class="card h-100" to={`/Kanbas/Courses/${course._id}`}>
                <img
                  src="/images/teslabot.jpeg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{course.name}</h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
