import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6"
import { FaGlasses } from "react-icons/fa"
import CourseNavigation from "../CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";


function Courses({ courses }) {
    var { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();

    return (
        <div className="w-100">
            <div className="hide-550">
                <div className="fs-5 float-start">
                    <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                        <ol className="breadcrumb h5 mt-3 ms-3">
                            <FaBars className="text-danger me-2 m-auto" />
                            <li className="breadcrumb-item text-danger">{course.number}</li>
                            <li className="breadcrumb-item active" aria-current="page">{decodeURI(pathname.split("/")[4])}</li>
                        </ol>
                    </nav>

                </div>

                <button className="btn btn-outline-secondary float-end mt-2 me-5">
                    <FaGlasses className="mb-1 me-2" />Student View</button>
                <hr className="wd-float-done" />
            </div>
            <div className="row me-0" style={{ minWidth: "550px" }}>
                <div className="col hide-550" style={{ maxWidth: "200px" }}><CourseNavigation course={course}/></div>
                <div className="col float-start">
                    <div>
                        <div
                            className="bottom-0 end-0"
                            style={{
                                left: "300px",
                                top: "75px",
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
            </div>

        </div>

    );
}
export default Courses;