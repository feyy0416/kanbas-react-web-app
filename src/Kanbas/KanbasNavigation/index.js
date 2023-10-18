import { Link, useLocation } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";

import '../index.css';

function KanbasNavigation() {
  
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const linkToIconMap = {
      Account: <MdAccountCircle className="m-auto" style={{fontSize: "2em", color:"grey", display:"block"}}/>,
      Dashboard: <AiOutlineDashboard className="m-auto" style={{fontSize: "2em", color:"red", display:"block"}}/>,
      Courses: <FaBook className="m-auto" style={{fontSize: "2em", color:"red", display:"block"}}/>,
      Calendar: <FaCalendarAlt className="m-auto" style={{fontSize: "2em", color:"red", display:"block"}}/>,
      Inbox: <FaInbox className="m-auto" style={{fontSize: "2em", color:"red", display:"block"}}/>,
      History: <FaHistory className="m-auto" style={{fontSize: "2em", color:"red", display:"block"}}/>,
      Studio: <FaLaptop className="m-auto" style={{fontSize: "2em", color:"red", display:"block"}}/>,
      Commons: <FaRegArrowAltCircleRight className="m-auto" style={{fontSize: "2em", color:"red", display:"block"}}/>,
      Help: <FaRegQuestionCircle className="m-auto" style={{fontSize: "2em", color:"red", display:"block"}}/>,
  };

  const { pathname } = useLocation();
  return (
    <div className="nav-bar hide-550">
      <img src="../img/NU.png" alt="nu-icon"
        style={{
          width: "70px", height: "70px",
          display: "block", marginLeft: "auto",
          marginRight: "auto", marginTop: "0"
        }}>
      </img>

      <div className="list-group list-group-flush p-0">
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item nav-bar-item text-white bg-black border-0 ps-0 pe-0 ${pathname.includes(link) && "selected"}`}>
            {linkToIconMap[link]}
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default KanbasNavigation;