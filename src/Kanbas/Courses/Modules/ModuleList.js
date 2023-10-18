import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "../../index.css"
import { FaEllipsisVertical } from "react-icons/fa6"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BsGripVertical } from "react-icons/bs"
import { AiFillCaretRight } from "react-icons/ai"


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div style={{flex: "1"}} className="dynamic-resize">
      <div>
        <div className="float-end mb-3 me-3">
          <button type="button" id="btn-home-collapse-all" className="btn btn-outline-secondary ms-1">Collapse
            All</button>
          <button type="button" id="btn-home-view-progress" className="btn btn-outline-secondary ms-1">View
            Progress</button>

          <div className="dropdown inline ms-1">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              <AiOutlineCheckCircle className="mb-1 me-1 text-success"/>
              Publish All
            </button>
            <ul className="dropdown-menu ms-1">
              <li className="dropdown-item">Publish All</li>
            </ul>
          </div>

          <button type="button" id="btn-home-module" className="btn btn-danger ms-1">
            <AiOutlinePlus className="mb-1 me-1" />
            Module
          </button>
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
              <div key={index} className="list-group-item border-2 rounded-0 me-3 mt-2 mb-4 pt-3 pb-3" style={{backgroundColor: "#E8E8E8"}}>
                <BsGripVertical className="mb-1"/>
                <AiFillCaretRight className="mb-1"/>
                <p className="inline fs-6 fw-bold ms-2">{module.name}</p>
                &nbsp;-&nbsp;
                <span>{module.description}</span>
              </div>
            ))
        }
      </div>

    </div>
  );
}
export default ModuleList;