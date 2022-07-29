import React from 'react'
import { Link } from "react-router-dom";
import "../stylesheet.css"

function AdminPanel() {
  return (
    <div>
        <h1>Edit Staff</h1>
        <h1>Add New Staff</h1>
        <h1>Delete Staff</h1>
        <Link to="/reports">Generate Report</Link>
    </div>
  )
}

export default AdminPanel