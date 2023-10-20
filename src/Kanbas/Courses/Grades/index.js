import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa6";
import { FaCog } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div> 
            <div className="float-end">
                <button type="button" className="btn btn-outline-secondary">
                    <FaFileImport className="me-2 mb-1" />Import
                </button>

                <div className="dropdown inline">
                    <button className="btn btn-outline-secondary dropdown-toggle ms-2" type="button"
                        id="dropdownMenuButton6" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaFileExport className="mb-1 me-2" />
                        Export
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton6">
                    </ul>
                </div>

                <button type="button" className="btn btn-outline-secondary ms-2">
                    <FaCog className="mb-1" />
                </button>

            </div>


            <div class="row mb-3 wd-float-done">

                <div className="col">
                    <p className="fw-bold mb-1 ms-2">Students Names</p>

                    <div className="dropdown ms-2">
                        <button className="btn form-control border text-start" type="button"
                            id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaSearch className="mb-1 me-2" />Search Students
                            <FaChevronDown className="float-end mt-1" />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton4">
                        </ul>
                    </div>

                </div>
                <div className="col">
                    <p className="fw-bold mb-1">Assignment Names</p>

                    <div className="dropdown">
                        <button className="btn form-control border text-start" type="button"
                            id="dropdownMenuButton5" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaSearch className="mb-1 me-2" />Search Assignments
                            <FaChevronDown className="float-end mt-1" />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton5">
                        </ul>
                    </div>
                </div>

            </div>

            <button type="button" class="btn btn-outline-secondary ms-2"><FaFilter className="mb-1 me-2" />Apply Filters</button>

            <div className="responsive-table-container table-responsive mt-3">

                <table className="table table-striped table-bordered" style={{tableLayout: "auto"}}>
                    <thead>
                        <th scope="col" class="border border-1 pb-3 ps-2" style={{width: "200px"}}>Student Name</th>
                        {assignments.map((assignment) => 
                        (<th scope="col" class="border border-1 text-center">{assignment.title}<br/>
                        Out of {assignment.points}</th>))}
                    </thead>


                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td class="text-danger">{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td class="text-center">{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Grades;

