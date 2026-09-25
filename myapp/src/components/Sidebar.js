import React from "react";
import {
  FaRobot,
  FaHome,
  FaSearch,
  FaChartBar,
  FaProjectDiagram,
  FaFileAlt,
  FaCog,
  FaUserCircle,
  FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">

        <FaRobot />

        <span>Smart AI</span>

      </div>

      <ul>

        <li className="active">
          <FaHome />
          Dashboard
        </li>

        <li>
          <FaSearch />
          Analyzer
        </li>

        <li>
          <FaChartBar />
          Analytics
        </li>

        <li>
          <FaProjectDiagram />
          Projects
        </li>

        <li>
          <FaFileAlt />
          Reports
        </li>

        <li>
          <FaCog />
          Settings
        </li>

        <li>
          <FaUserCircle />
          Profile
        </li>

      </ul>

      <button className="logout-btn">

        <FaSignOutAlt />

        Logout

      </button>

    </aside>
  );
}

export default Sidebar;
