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
import AdminPanel from './AdminPanel'
import Report from './Report'
import initialEmployeeList from '../data/employee-list.json'
import initialShiftList from '../data/shift-list.json'
import Employees from './Employees'
import Navbar from './Navbar'
import Footer from './Footer';
import Header from './Header';
import axios from 'axios';


const App = () => {

  // initial values for states
  const initialState = {
    employeeList: [],
    shiftList: [],
    currentUser: ""
  }

  //useReducer to handle all states in the same object
  const [store, dispatch] = useReducer(reducer, initialState)
  // current user of the system either admin or general-login account for staff
  //const {currentUser} = store

  // populate employeeList with initial data when the app starts
  useEffect (
    () => {
      // fetch("http://localhost:4000/shifts")
      // // get the response as json
      // .then(response => response.json())
      // // get the data to render
      // .then(data => console.log(data))
      // axios.get("http://localhost:4000/shifts")
      // .then(response => {
      //   console.log(response.data)
        dispatch({
          type: "setEmployeeList",
          data: initialEmployeeList
          // data: response.data
        })
      // })
    },
    []
  )
  // populate shiftList with initial data when the app starts
  useEffect (
    () => {
      dispatch({
        type: "setShiftList",
        data: initialShiftList
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
            <Route path="/home" element={<Home />} />  
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin_panel" element={<AdminPanel />} />
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
