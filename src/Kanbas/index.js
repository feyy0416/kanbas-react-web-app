import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css";
import db from "./Database";
import { useState , useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";


function Kanbas() {

  // const [courses, setCourses] = useState(db.courses);

  const [course, setCourse] = useState({
    name: "New Course", number: "New Course Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    term: "New Term"
  });

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    console.log(response);
    setCourses([...courses,
      response.data
    ]);
  };

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    console.log(response.data);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        } else {
          return c;
        }
      })
    );
  };

  const [courses, setCourses] = useState([]);
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/api/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);


  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div className="w-100">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse} />} />
            <Route path="Courses/*" element={<h1>Courses</h1>} />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          </Routes>

        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;