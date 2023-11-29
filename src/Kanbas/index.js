import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css";
import db from "./Database";
import { useState , useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";


function Kanbas() {

  // const [courses, setCourses] = useState(db.courses);
  const { pathname } = useLocation();

  // Conditionally render KanbasNavigation based on the route
  const showNavigation = !["/Kanbas/Signin", "/Kanbas/Signup"].includes(pathname);



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
        {showNavigation && <KanbasNavigation />}
        <div className="w-100">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
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
            <Route path="Signin" element={<Signin />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="Account" element={<Account />} />
            <Route path="Admin/users" element={<UserTable />} />
            
          </Routes>

        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;