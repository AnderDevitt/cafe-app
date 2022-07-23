import React, {useState} from 'react'
import "../stylesheet.css"
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";
import Staff from './Staff'
import Admin from './Admin'
import Home from './Home'
import Login from './Login'
import AdminPanel from './AdminPanel'
import Report from './Report'
import initialEmployeeList from '../data/employee-list.json'


const App = () => {

  // states
  const initialState = {
    employeeList: []
  }

  //useReducer to handle all states in the same object
  const [store, dispatch]

  return (
    <div className="page">
      <Router>
        <li className="header">
          <Link className="home-link" to="/">Logo</Link>
        </li>

          <Switch>
            <Route path="/staff" element={<Staff />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin_panel" element={<AdminPanel />} />
            <Route path="/reports" element={<Report />} />
            <Route path="/" element={<Home />} />
          </Switch>

      </Router>
      <div className="footer">Footer</div>
    </div>
  )
}

export default App
