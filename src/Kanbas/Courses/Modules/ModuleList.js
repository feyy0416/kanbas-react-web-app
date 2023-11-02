import React from "react";
import { useParams } from "react-router-dom";
// import db from "../../Database";
// import "../../index.css"
import { FaEllipsisVertical } from "react-icons/fa6"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BsGripVertical } from "react-icons/bs"
import { AiFillCaretRight } from "react-icons/ai"
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";


function ModuleList() {

  function ShowAddModuleArea() {
    var area = document.getElementById("add-module-area");
    area.style.display = 'block';
  }

  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();


  return (
    <div style={{ flex: "1" }} className="dynamic-resize">
      <div>
        <div className="form-control mt-2 mb-3" id="add-module-area" style={{ display: "none" }}>
          <input className="form-control" value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          />
          <textarea className="form-control mt-2" value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
          />
          <button className="btn btn-success mt-2" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
          <button className="btn btn-primary mt-2 ms-2" onClick={() => dispatch(updateModule(module))}>Update</button>
        </div>
        <button type="button" id="btn-home-module" className="btn btn-danger" onClick={ShowAddModuleArea}>
          <AiOutlinePlus className="mb-1 me-1" />
          Module
        </button>
        <div className="float-end mb-3 me-3 d-inline">
          <button type="button" id="btn-home-collapse-all" className="btn btn-outline-secondary ms-1">Collapse
            All</button>
          <button type="button" id="btn-home-view-progress" className="btn btn-outline-secondary ms-1">View
            Progress</button>

          <div className="dropdown inline ms-1">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              <AiOutlineCheckCircle className="mb-1 me-1 text-success" />
              Publish All
            </button>
            <ul className="dropdown-menu ms-1">
              <li className="dropdown-item">Publish All</li>
            </ul>
          </div>

          <button type="button" id="btn-home-three-dot" className="btn btn-outline-secondary ps-2 pe-2 ms-1">
            <FaEllipsisVertical />
          </button>
        </div>
        <hr className="wd-float-done me-3" />
      </div>

      <div className="list-group d-inline">
        {
          modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <div key={index} className="list-group-item border-2 rounded-0 me-3 mt-2 mb-4 pt-3 pb-3" style={{ backgroundColor: "#E8E8E8" }}>
                <BsGripVertical className="mb-1" />
                <AiFillCaretRight className="mb-1" />
                <p className="inline fs-6 fw-bold ms-2">{module.name}</p>
                &nbsp;-&nbsp;
                <span>{module.description}</span>

                <button className="btn btn-outline-warning border-0 ms-2 mb-1"
                  onClick={() => {
                    dispatch(setModule(module));
                    ShowAddModuleArea()
                  }}>
                  Edit
                </button>
                <button className="btn btn-outline-danger border-0 ms-2 mb-1"
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>

              </div>
            ))
        }
      </div>

    </div>
  );
}
export default ModuleList;