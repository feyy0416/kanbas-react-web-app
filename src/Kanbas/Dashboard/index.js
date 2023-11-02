import { Link } from "react-router-dom";
import { FaRegClipboard } from "react-icons/fa";
import "../index.css";

function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) {

    function ShowAddUpdateCourseArea() {
        var area = document.getElementById("add-update-form");
        area.style.display = 'block';
    }

    const cardBgColorList = ["bg-success", "bg-danger", "bg-primary", "bg-info", "bg-warning"];
    const cardTextColorList = ["text-success", "text-danger", "text-primary", "text-info", "text-warning"];


    return (
        <div className="w-auto">
            <h5 className="ms-3 mt-3 pb-0">Dashboard</h5>
            <hr />
            <div className="ms-3 mt-0 pt-0">
                <h6>Published Courses (7)</h6>
                <hr />
                <button className="btn btn-outline-secondary ms-2" onClick={ShowAddUpdateCourseArea}>Add & Update Courses</button>
                <form id="add-update-form" className="form-control border border-0" style={{ width: "800px", display: "none" }}>
                    <input type="text" className="form-control mt-2" placeholder="new course name" value={course.name}
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <input type="text" className="form-control mt-2" placeholder="new course number" value={course.number}
                        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                    <input type="date" className="form-control mt-2" placeholder="start date" value={course.startDate}
                        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                    <input type="date" className="form-control mt-2" placeholder="end date" value={course.endDate}
                        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                    <input type="text" className="form-control mt-2" placeholder="term" value={course.term}
                        onChange={(e) => setCourse({ ...course, term: e.target.value })} />

                    <button onClick={addNewCourse} className="btn btn-success mt-2">Add</button>
                    <button onClick={updateCourse} className="btn btn-primary mt-2 ms-2">Update</button>
                </form>
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

                                    <div>
                                        <button className="d-inline btn btn-outline-secondary btn-sm w-25 float-end mb-2 ms-2 me-2"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                deleteCourse(course._id);
                                            }}>
                                            Delete
                                        </button>
                                        <button className="d-inline btn btn-outline-secondary btn-sm w-25 float-end mb-2"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setCourse(course);
                                                ShowAddUpdateCourseArea();
                                            }}>
                                            Edit
                                        </button>
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



