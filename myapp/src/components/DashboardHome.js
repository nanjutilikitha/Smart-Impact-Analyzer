import React from "react";
import {
FaClipboardList,
FaRobot,
FaProjectDiagram,
FaExclamationTriangle
} from "react-icons/fa";

function DashboardHome(){

return(

<div className="dashboard-home">

<h2>

Welcome Back 👋

</h2>

<p>

AI Requirement Analysis Overview

</p>

<div className="dashboard-grid">

<div className="dashboard-box">

<FaClipboardList className="dash-icon"/>

<h3>120</h3>

<p>Requirements</p>

</div>

<div className="dashboard-box">

<FaRobot className="dash-icon"/>

<h3>95%</h3>

<p>Prediction Accuracy</p>

</div>

<div className="dashboard-box">

<FaProjectDiagram className="dash-icon"/>

<h3>35</h3>

<p>Affected Modules</p>

</div>

<div className="dashboard-box">

<FaExclamationTriangle className="dash-icon"/>

<h3>High</h3>

<p>Risk Level</p>

</div>

</div>

</div>

);

}

export default DashboardHome;