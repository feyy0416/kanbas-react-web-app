import { Link } from "react-router-dom";
import db from "../Database";
import { FaRegClipboard } from "react-icons/fa";
import "../index.css";

function Dashboard() {

    const cardBgColorList = ["bg-success", "bg-danger", "bg-primary", "bg-info", "bg-warning"];
    const cardTextColorList = ["text-success", "text-danger", "text-primary", "text-info", "text-warning"];
    const courses = db.courses;
    return (
        <div className="w-auto">
            <h5 className="ms-3 mt-3 pb-0">Dashboard</h5>
            <hr />
            <div className="ms-3 mt-0 pt-0">
                <h6>Published Courses (7)</h6>
                <hr />
                <div className="container p-0">

                    <div className="d-flex flex-row flex-wrap">

                        {courses.map((course, index) => (
                            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                                <div className="card course-card">
                                    <div className={`card-header ${cardBgColorList[index % 5]} course-card-bg`}></div>
                                    <div className="card body p-3 border-0">
                                        <p className={`card-title text-truncate fs-6 m-0 fw-bold ${cardTextColorList[index % 5]}`}>
                                            {course.name}
                                        </p>
                                        <p className="card-text text-truncate m-0 text-secondary">
                                            {course.number}
                                        </p>
                                        <p className="card-text text-truncate fs-6 m-0 text-secondary">
                                            {course.term}
                                        </p>
                                        <FaRegClipboard style={{ color: "grey" }} />
                                    </div>
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;

