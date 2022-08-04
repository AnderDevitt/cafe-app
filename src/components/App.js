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
import Login from './Login'
// import Report from './Report'
import Employees from './Employees'
import Shifts from './Shifts'
import Navbar from './Navbar'
import Footer from './Footer';
import Header from './Header';
import NewRoleForm from './NewRoleForm';
import NewEmployeeForm from './NewEmployeeForm';
import EmployeeLogin from './EmployeeLogin'
import CafeView from './CafeView.js'
// import axios from 'axios';
import { getEmployees } from '../services/employeeServices';
import { getShifts } from '../services/shiftServices';
import { initialState } from '../utils/reducer'


const App = () => {

  // initial values for states
  // const initialState = {
  //   employeeList: [],
  //   shiftList: [],
  //   // currentShiftList: [],
  //   loggedInUser: sessionStorage.getItem("username") || "",
  //   clockedOnWorker: sessionStorage.getItem("username2") || "",
  //   // currentShift: sessionStorage.getItem("id") || null,
  //   token: sessionStorage.getItem("token") || null
  // }

  //useReducer to handle all states in the same object
  const [store, dispatch] = useReducer(reducer, initialState)
  // const {shiftList} = store
  // const currentShifts = shiftList
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
      console.log("A change to shiftList has been detected")
    },
    []
  )

  getShifts()
      .then(shifts => {
        dispatch({
          type: "setEmployeeList",
          data: shifts
        })
      })
      .catch(e => {console.log(e)})


  return (
    <div className="page">
      <Header />
      {/* Wrap all the components that will use global state values: employeeList in the state context provider */}
      <StateContext.Provider value={{store, dispatch}}>
        {/* Wrap the app's routing components */}
        <Router>
          <Navbar />
          {/* The routes using switch alias */}
          <Switch>
            {/* System login routes */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />

            {/* Routes related to Admin Operations */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/new_role" element={<NewRoleForm />} />
            <Route path="/new_employee" element={<NewEmployeeForm />} />
            {/* <Route path="/reports" element={<Report />} /> */}

            {/* Routes related to Employee Operations  */}
            <Route path="/employee_login" element={<EmployeeLogin />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/shifts" element={<Shifts />} />
            <Route path="/cafe" element={<CafeView />} />
    
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
