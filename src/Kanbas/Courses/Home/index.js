import ModuleList from "../Modules/ModuleList";
import { FaBan } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaFileImport } from "react-icons/fa";
import { FaRightFromBracket } from "react-icons/fa6";
import { FaCrosshairs } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import "../../index.css";


function Home() {
    return (
        <div className="d-flex justify-content-between">
            <ModuleList />
            <div className="ms-4 me-3 hide-1000" style={{ width: "270px" }}>
                <h5>Course Status</h5>
                <button type="button" id="btn-home-unpublish" className="me-2 btn btn-outline-secondary">
                    <FaBan className="mb-1 me-2" />Unpublish</button>
                <button type="button" id="btn-home-published" className="me-2 btn btn-success">
                    <FaRegCheckCircle className="mb-1 me-2" />Published</button>
                <div>
                    <button type="button" className="btn btn-outline-secondary w-100 mt-2 text-start">
                        <FaFileImport className="mb-1 me-2" />
                        Import Existing Content</button>
                    <button type="button" className="btn btn-outline-secondary w-100 mt-2 text-start">
                        <FaRightFromBracket className="mb-1 me-2" />
                        Import From Commons</button>
                    <button type="button" className="btn btn-outline-secondary w-100 mt-2 text-start">
                        <FaCrosshairs className="mb-1 me-2" />
                        Choose Home Page</button>
                    <button type="button" className="btn btn-outline-secondary w-100 mt-2 text-start">
                        <FaChartBar className="mb-1 me-2" />
                        View Course Stream</button>
                    <button type="button" className="btn btn-outline-secondary w-100 mt-2 text-start">
                        <FaBullhorn className="mb-1 me-2" />
                        New Announcement</button>
                    <button type="button" className="btn btn-outline-secondary w-100 mt-2 text-start">
                        <FaChartBar className="mb-1 me-2" />
                        New Analytics</button>
                    <button type="button" className="btn btn-outline-secondary w-100 mt-2 text-start">
                        <FaBell className="mb-1 me-2" />
                        View Course Notifications</button>
                </div>

                <div className="mt-3">
                    <h6 className="d-inline">Comming Up</h6>
                    <span className="text-danger float-end">
                        <FaCalendarAlt className="mb-1 me-2 text-danger" />
                        View Calendar</span>
                    <hr className="mt-2" />
                </div>

                <div className="mt-2">
                    <FaCalendarAlt className="mb-1 me-2 text-danger" />
                    <span className="text-danger">Lecture</span><small
                        className="text-secondary block ms-4 d-block">CS4550.12631.20410<br />
                        Sep 7 at 11.45am</small>
                </div>
                <div className="mt-2">
                    <FaCalendarAlt className="mb-1 me-2 text-danger" />
                    <span className="text-danger">Lecture</span><small
                        className="text-secondary block ms-4 d-block">CS4550.12631.20410<br />
                        Sep 11 at 11.45am</small>
                </div>
                <div className="mt-2">
                    <FaCalendarAlt className="mb-1 me-2 text-danger" />
                    <span className="text-danger">CS5610 06 SP23 Lecture</span><small
                        className="text-secondary block ms-4 d-block">CS5610 06 SP23 Lecture<br />
                        Sep 11 at 6pm</small>
                </div>
            </div>
        </div>
    );
}
export default Home;