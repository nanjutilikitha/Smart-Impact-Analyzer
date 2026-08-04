import React from "react";
import {
  FaBell,
  FaSearch,
  FaUserCircle
} from "react-icons/fa";

function Topbar() {

  return (

    <div className="topbar">

      <div className="search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="Search..."
        />

      </div>

      <div className="top-icons">

        <FaBell className="top-icon"/>

        <FaUserCircle className="profile-icon"/>

      </div>

    </div>

  );

}

export default Topbar;