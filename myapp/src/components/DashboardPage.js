import React from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardHome from "../components/DashboardHome";

function DashboardPage(){

return(

<div className="dashboard-layout">

<Sidebar/>

<div className="main-content">

<Topbar/>

<DashboardHome/>

</div>

</div>

);

}

export default DashboardPage;