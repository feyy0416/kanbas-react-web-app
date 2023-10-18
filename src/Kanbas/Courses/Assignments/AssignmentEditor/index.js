import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { FaCheckCircle } from "react-icons/fa"
import { FaEllipsisV } from "react-icons/fa"


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="me-3" >

            <div className="float-end mb-3">
                <span className="text-success">
                    <FaCheckCircle className="mb-1" /> Published
                </span>
                <div className="dropdown ms-3 inline" id="grader">
                    <button className="btn btn-outline-secondary pe-2 ps-2" type="button" id="dropdownMenuButton3"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <FaEllipsisV />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                        <li><a className="dropdown-item" href="#">SpeedGrader</a></li>
                    </ul>
                </div>
            </div>
            <hr className="wd-float-done" />


            <form id="assignments-edit-text-field">

                <label for="assignments-edit-assignment-name">
                    <h6>Assignment Name</h6>
                </label>
                <input type="text" className="form-control" value={assignment.title}
                    id="assignments-edit-assignment-name" />

                <textarea id="assignments-edit-assignment-description"
                    className="form-control mt-3">This is the assignment description.</textarea>

                <div className="container mt-3">
                    <div className="row">
                        <div className="col-3">
                            <label for="assignments-edit-points" className="float-end">
                                Points
                            </label>
                        </div>
                        <div className="col-5">
                            <input type="number" className="form-control" id="assignments-edit-points" value="100" />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-3" >
                            <label for="assignments-edit-assignment-group" className="float-end">
                                Assignment Group
                            </label>
                        </div>
                        <div className="col-5">
                            <select id="assignments-edit-assignment-group" className="form-control">
                                <option value="assignments">ASSIGNMENTS</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-3" >
                            <label for="assignments-edit-display-grade-as" className="float-end">
                                Display Grade as
                            </label>
                        </div>
                        <div className="col-5">
                            <select id="assignments-edit-display-grade-as" className="form-control">
                                <option value="percentage">Percentage</option>
                            </select>
                            <input type="checkbox" id="assignments-edit-display-chkbx" className="mt-3" />
                            <label for="assignments-edit-display-chkbx">
                                &nbsp;Do not count this assignment towards the final grade
                            </label>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-3" >
                            <label for="assignments-edit-submission-type" className="float-end">
                                Submission Type
                            </label>
                        </div>
                        <div className="col-5">
                            <div className="form-control p-3">
                                <select id="assignments-edit-submission-type" className="form-control w-75">
                                    <option value="online">online</option>
                                </select>

                                <p className="mt-3 fw-bold">Online Entry Options</p>

                                <div>
                                    <input type="checkbox" id="assignments-edit-txt-entry" />
                                    <label for="assignments-edit-txt-entry">
                                        &nbsp;Text Entry
                                    </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="chkbox-web-url" className="mt-3" />
                                    <label for="chkbox-web-url">
                                        &nbsp;Website URL
                                    </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="chkbox-media-recording" className="mt-3" />
                                    <label for="chkbox-media-recording">
                                        &nbsp;Media Recording
                                    </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="chkbox-student-annotation" className="mt-3" />
                                    <label for="chkbox-student-annotation">
                                        &nbsp;Student Annotation
                                    </label>
                                </div>

                                <div>
                                    <input type="checkbox" id="chkbox-file-uploads" className="mt-3" />
                                    <label for="chkbox-file-uploads">
                                        &nbsp;File Uploads
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-3" >
                            <label for="assignments-edit-assign-to" className="float-end">
                                Assign
                            </label>
                        </div>
                        <div className="col-5">
                            <div className="form-control">
                                <p className="fw-bold mb-1">Assign to</p>
                                <input type="text" className="form-control mt-0" value="Everyone"
                                    id="assignments-edit-assign-to" />

                                <p className="fw-bold mt-3 mb-1">Due</p>
                                <input type="date" className="form-control" id="assignments-edit-due" />

                                <div className="row">
                                    <div className="col">
                                        <p className="fw-bold mt-3 mb-1">Available from</p>
                                        <input type="date" className="form-control" id="assignments-edit-available" />
                                    </div>

                                    <div className="col">
                                        <p className="fw-bold mt-3 mb-1">Until</p>
                                        <input type="date" className="form-control" id="assignments-edit-until" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <hr />

                <input type="checkbox" id="chkbox-notify" className="mt-3" />
                <label for="chkbox-notify">
                    &nbsp;Notify users that this content has changed
                </label>

                <div className="float-end p-2">
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                        className="btn btn-outline-secondary me-2">
                        Cancel
                    </Link>
                    <button onClick={handleSave} className="btn btn-danger me-2">
                        Save
                    </button>
                </div>

            </form>
        </div>
    );
}
export default AssignmentEditor;