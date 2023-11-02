import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa"
import { FaEllipsisV } from "react-icons/fa"

import { useSelector, useDispatch } from "react-redux";
import {
    addAssignment,
    updateAssignment,
    setAssignment,
} from "../assignmentsReducer";


function AssignmentEditor() {

    const { courseId } = useParams();
    const { assignmentId } = useParams();
    console.log(assignmentId);

    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();


    const navigate = useNavigate();
    const handleSave = () => {
        if (assignmentId === "NewAssignment"){
            const newAssignment = {...assignment, course: courseId};
            dispatch(addAssignment(newAssignment));
        } else {
            dispatch(updateAssignment(assignment));
        }
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

            <label htmlFor="assignments-edit-assignment-name">
                <h6>Assignment Name</h6>
            </label>
            <input
                className="form-control"
                value={assignment.title}
                onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))}
                id="assignments-edit-assignment-name" />

            <textarea id="assignments-edit-assignment-description"
                value={assignment.discription}
                onChange={(e) => dispatch(setAssignment({ ...assignment, discription: e.target.value }))}
                className="form-control mt-3" />


            <div className="container mt-3">
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="assignments-edit-points" className="float-end">
                            Points
                        </label>
                    </div>
                    <div className="col-5">
                        <input type="number"
                            className="form-control"
                            id="assignments-edit-points"
                            value={assignment.points}
                            onChange={(e) => dispatch(setAssignment({ ...assignment, points: e.target.value }))} />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-3" >
                        <label htmlFor="assignments-edit-assign-to" className="float-end">
                            Assign
                        </label>
                    </div>
                    <div className="col-5">
                        <div className="form-control">

                            <p className="fw-bold mt-3 mb-1">Due</p>
                            <input type="date"
                                className="form-control"
                                id="assignments-edit-due"
                                value={assignment.due}
                                onChange={(e) => dispatch(setAssignment({ ...assignment, due: e.target.value }))}
                            />

                            <div className="row">
                                <div className="col">
                                    <p className="fw-bold mt-3 mb-1">Available from</p>
                                    <input type="date"
                                        className="form-control"
                                        id="assignments-edit-available"
                                        value={assignment.start}
                                        onChange={(e) => dispatch(setAssignment({ ...assignment, start: e.target.value }))} />
                                </div>

                                <div className="col">
                                    <p className="fw-bold mt-3 mb-1">Until</p>
                                    <input type="date"
                                        className="form-control"
                                        id="assignments-edit-until"
                                        value={assignment.end}
                                        onChange={(e) => dispatch(setAssignment({ ...assignment, end: e.target.value }))} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <hr />

            <input type="checkbox" id="chkbox-notify" className="mt-3" />
            <label htmlFor="chkbox-notify">
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


        </div>
    );
}
export default AssignmentEditor;