import React, { useEffect, useReducer} from 'react'
import { reducer } from '../utils/reducer'
import { StateContext } from '../utils/stateContext';
import "../stylesheet.css"
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Admin from './Admin'
import Home from './Home'
import Login from './Login'
// import AdminPanel from './AdminPanel'
import Report from './Report'

import CafeView from './CafeView'
import Employees from './Employees'
import Shifts from './Shifts'
import Navbar from './Navbar'
import Footer from './Footer';
import Header from './Header';
import NewRoleForm from './NewRoleForm';
import NewEmployeeForm from './NewEmployeeForm';
import EmployeeLogin from './EmployeeLogin'
// import axios from 'axios';
import { getEmployees } from '../services/employeeServices';
import { getShifts } from '../services/shiftServices';


const App = () => {

  // initial values for states
  const initialState = {
    employeeList: [],
    shiftList: [],
    loggedInUser: sessionStorage.getItem("username") || "",
    clockedOnWorker: sessionStorage.getItem("username2") || "",
    currentShift: sessionStorage.getItem("id") || null,
    token: sessionStorage.getItem("token") || null
  }

  //useReducer to handle all states in the same object
  const [store, dispatch] = useReducer(reducer, initialState)
  

  // populate employeeList with initial data when the app starts
  useEffect (
    () => {
      // connect to the backend api and get the employees, then dispatch to the reducer to initialise the employeeList
      getEmployees()
        .then(employees => {
          dispatch({
            type: "setEmployeeList",
            data: employees
          })
        })
        .catch(e => {console.log(e)})
    },
    []
  )
  // populate shiftList with initial data when the app starts
  useEffect (
    () => {
      getShifts()
        .then(shifts => {
          dispatch({
            type: "setShiftList",
            data: shifts
          })
        })
    },
    []
  )


  return (
    <div className="page">
      <Header />
      {/* Wrap all the components that will use global state values: employeeList in the state context provider */}
      <StateContext.Provider value={{store, dispatch}}>
        {/* Wrap the app's routing components */}
    
        <Router>
          {/* <li className="header">
            <Link className="home-link" to="/">Logo</Link>
          </li> */}
          <Navbar />
          {/* The routes using switch alias */}
          <Switch>
            <Route path="/employees" element={<Employees />} />
            <Route path="/shifts" element={<Shifts />} />
            <Route path="/cafe_view" element={<CafeView />} />
            <Route path="/home" element={<Home />} />  
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new_role" element={<NewRoleForm />} />
            <Route path="/new_employee" element={<NewEmployeeForm />} />
            <Route path="/employee_login" element={<EmployeeLogin />} />
            {/* <Route path="/admin_panel" element={<AdminPanel />} /> */}
            <Route path="/reports" element={<Report />} />
            <Route path="/" element={<Home />} />
          </Switch>

        </Router>
      </StateContext.Provider>
      <Footer />
      {/* <div className="footer">Footer</div> */}
      {/* <footer>Copyright 2022</footer> */}
    </div>
  )
}

export default App
