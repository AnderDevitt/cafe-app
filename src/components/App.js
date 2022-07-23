import React, {useState, useEffect, useReducer} from 'react'
import { reducer } from '../utils/reducer'
import { StateContext } from '../utils/stateContext';
import "../stylesheet.css"
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";
import Admin from './Admin'
import Home from './Home'
import Login from './Login'
import AdminPanel from './AdminPanel'
import Report from './Report'
import initialEmployeeList from '../data/employee-list.json'
import Employees from './Employees'


const App = () => {

  // states
  const initialState = {
    employeeList: []
  }

  //useReducer to handle all states in the same object
  const [store, dispatch] = useReducer(reducer, initialState)

  // populate employeeList with initial data when the app starts
  useEffect (
    () => {
      dispatch({
        type: "setEmployeeList",
        data: initialEmployeeList
      })
    },
    []
  )

  return (
    <div className="page">
      {/* Wrap all the components that will use global state values: employeeList in the state context provider */}
      <StateContext.Provider value={{store, dispatch}}>
        {/* Wrap the app's routing components */}
    
        <Router>
          <li className="header">
            <Link className="home-link" to="/">Logo</Link>
          </li>

            <Switch>
              <Route path="/employees" element={<Employees />} />
              
              <Route path="/admin" element={<Admin />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin_panel" element={<AdminPanel />} />
              <Route path="/reports" element={<Report />} />
              <Route path="/" element={<Home />} />
            </Switch>

        </Router>
      </StateContext.Provider>
      <div className="footer">Footer</div>
    </div>
  )
}

export default App
