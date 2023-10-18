import { Link, useParams, useLocation } from "react-router-dom";
import db from "../Database";
import "../index.css";

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes",
        "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages",
        "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    var { courseId } = useParams();
    var { pathname } = useLocation();
    if (courseId === undefined) {
        courseId = "cs5610";
        pathname = "/Kanbas/Courses/cs5010/Home";
    }
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div>
            <p className="text-truncate ft-small ms-3 text-secondary" style={{width: "150px"}}>
                {course.term}
            </p>
            <div className="list-group list-group-flush ms-3" style={{ width: "150px" }}>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={`/Kanbas/Courses/${courseId}/${link}`}
                        className={`list-group-item sec-col-item text-danger ps-2 
                               ${pathname.replace("%20", " ").includes(link) &&
                            "text-black border-start border-2 border-black sec-selected"}`}>
                        {link}
                    </Link>
                ))}
            </div>
        </div>
    );
}


export default CourseNavigation;