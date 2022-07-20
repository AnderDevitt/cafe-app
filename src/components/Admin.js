import React from 'react'
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
    <h1> Admin Page</h1>
    <nav>
        <ul>
          <li>
            <Link to="/admin_panel">Edit Staff</Link>
          </li>
          <li>
            <Link to="/reports">Generate Report</Link>
          </li>
        </ul>
      </nav>
</div>
  )
}

export default Admin