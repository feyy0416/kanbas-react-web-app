import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa"
import { FaEllipsisV } from "react-icons/fa"
import { BsGripVertical } from "react-icons/bs"
import { FaEdit } from "react-icons/fa"
import { FaCheckCircle } from "react-icons/fa"

import { useSelector, useDispatch } from "react-redux";
import {
  deleteAssignment,
  setAssignment,
} from "./assignmentsReducer";

function Assignments() {

  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);

  return (
    <div className="dynamic-resize">
      <form id="assignment-index-search-text-field">
        <input type="text" placeholder="Search for Assignments" id="text-fields-search-for-assignments"
          className="form-control w-25 d-inline dynamic-resize" />

        <div className="dropdown float-end ms-1 me-3">
          <button className="btn btn-outline-secondary ps-2 pe-2" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            <FaEllipsisV className="mb-1" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#">Edit Assignment Dates</a></li>
            <li><a className="dropdown-item" href="#">Assignment Groups Weight</a></li>
            <li><a className="dropdown-item" href="#">Gradescope 1.3</a></li>
            <li><a className="dropdown-item" href="#">Commons Favorites</a></li>
          </ul>
        </div>

        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments/NewAssignment`}
          className="btn btn-danger float-end ms-1"
          id="btn-assignments-page-assignment text-white"
          onClick={() => dispatch(setAssignment({...assignment, title: "New title", description: "New Description",
          start: "2023-09-10", end: "2023-12-15", points: "100", due: "2023-12-15"}))}
        >
          <FaPlus className="mb-1 me-2" />
          Assignment
        </Link>
        <button type="button" id="btn-assignments-page-group text-secondary"
          className="btn btn-outline-secondary float-end">
          <FaPlus className="mb-1 me-2" />
          Group
        </button>

      </form>
      <hr />

      <div className="list-group me-3">
        <div className="list-group-item list-group-item-secondary ps-2 pe-2">
          <BsGripVertical className="mb-1 me-2" />
          Assignments
          <div className="float-end">
            <span className="border border-dark rounded-pill p-1 me-2 ft-small text-center">40% of Total</span>
            <FaPlus />

            <div className="dropdown inline">
              <button className="btn btn-outline-secondary border border-0 p-0" type="button" id="dropdownMenuButton2"
                data-bs-toggle="dropdown" aria-expanded="false">
                <FaEllipsisV className="mb-1 text-black" />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                <li><a className="dropdown-item" href="#">Edit</a></li>
                <li><a className="dropdown-item" href="#">Speed Grader</a></li>
                <li><a className="dropdown-item" href="#">Duplicate</a></li>
                <li><a className="dropdown-item" href="#">Delete</a></li>
                <li><a className="dropdown-item" href="#">Move to...</a></li>
                <li><a className="dropdown-item" href="#">Send to...</a></li>
                <li><a className="dropdown-item" href="#">Copy to...</a></li>
                <li><a className="dropdown-item" href="#">Share to Commons</a></li>
              </ul>
            </div>
          </div>
        </div>
        {courseAssignments.map((assignment) => (
          <div className="list-group-item ps-2 pe-2">
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="text-black"
              onClick={() => dispatch(setAssignment({ ...assignment }))}>
              <BsGripVertical className="mt-4 ms-0 float-start" />
              <FaEdit className="mt-4 ms-1 me-3 text-success float-start" />
              <div className="float-start">
                <p className="fw-bold m-0">{assignment.title}</p>
                <p className="ft-small text-secondary m-0"><span className="ft-small text-danger m-0">Multiple Modules</span>
                  &nbsp;&nbsp; | &nbsp;&nbsp;
                  <span className="fw-bold"> Not available until </span>
                  {assignment.start} &nbsp;&nbsp; | &nbsp;&nbsp; <br />
                  <span className="fw-bold "> Due </span>
                  {assignment.due} &nbsp;&nbsp; | &nbsp;&nbsp; {assignment.points} pts
                </p>
              </div>

              <div className="float-end mt-3">
                <FaCheckCircle className="text-success me-3 ms-2" />
                <FaEllipsisV className="text-black" />
              </div>
            </Link>
            <button className="btn btn-outline-danger border-0 ms-2 mb-1 float-end"
              onClick={() => dispatch(deleteAssignment(assignment._id))}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Assignments;