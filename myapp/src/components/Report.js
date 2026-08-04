import React from "react";


function Reports() {

  const reports = [

    {
      id: 1,
      requirement: "Payment Gateway Integration",
      module: "Payment Module",
      risk: "High",
      status: "Completed",
      date: "29 July 2026"
    },


    {
      id: 2,
      requirement: "User Login Enhancement",
      module: "Authentication Module",
      risk: "Medium",
      status: "Completed",
      date: "28 July 2026"
    },


    {
      id: 3,
      requirement: "Database Migration",
      module: "Database Module",
      risk: "High",
      status: "Pending",
      date: "27 July 2026"
    }

  ];



  return (

    <section id="reports" className="container my-5">


      <h1 className="text-center fw-bold text-primary mb-4">

        Impact Analysis Reports

      </h1>




      <div className="card shadow p-4">


        <table className="table table-hover">


          <thead className="table-dark">

            <tr>

              <th>
                ID
              </th>

              <th>
                Requirement
              </th>

              <th>
                Affected Module
              </th>

              <th>
                Risk
              </th>

              <th>
                Status
              </th>

              <th>
                Date
              </th>

            </tr>

          </thead>



          <tbody>


            {
              reports.map((report)=>(

                <tr key={report.id}>


                  <td>
                    {report.id}
                  </td>


                  <td>
                    {report.requirement}
                  </td>


                  <td>
                    {report.module}
                  </td>


                  <td>

                    {
                      report.risk === "High" ?

                      <span className="badge bg-danger">
                        High
                      </span>

                      :

                      <span className="badge bg-warning text-dark">
                        Medium
                      </span>
                    }

                  </td>


                  <td>

                    {
                      report.status === "Completed" ?

                      <span className="badge bg-success">
                        Completed
                      </span>

                      :

                      <span className="badge bg-secondary">
                        Pending
                      </span>
                    }

                  </td>


                  <td>
                    {report.date}
                  </td>


                </tr>


              ))
            }


          </tbody>


        </table>


      </div>


    </section>

  );

}


export default Reports;