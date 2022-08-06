import React, { useReducer} from 'react'
import { reducer } from '../utils/reducer'
import { StateContext } from '../utils/stateContext';
import "../stylesheet.css"
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate
} from "react-router-dom";
import Admin from './Admin'
import Login from './Login'
import Report from './Report'
import Employees from './Employees'
import Shifts from './Shifts'
import Navbar from './Navbar'
import Footer from './Footer';
import Header from './Header';

import NewEmployeeForm from './NewEmployeeForm';
import EditEmployeeForm from './EditEmployeeForm'
import EmployeeLogin from './EmployeeLogin'
import CafeView from './CafeView.js'
import { initialState } from '../utils/reducer'


const App = () => {

  //useReducer to handle all states in the same object
  const [store, dispatch] = useReducer(reducer, initialState)
  

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
            <Route path="/" element={<Navigate to="/cafe" />} />
            <Route path="/login" element={<Login />} />

            {/* Routes related to Admin Operations */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/new_employee" element={<NewEmployeeForm />} />
            <Route path="/edit_employee" element={<EditEmployeeForm />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/reports" element={<Report />} />
            
            {/* Routes related to Employee Operations  */}
            
            <Route path="/employee_login" element={<EmployeeLogin />} />
            <Route path="/shifts" element={<Shifts />} />
            <Route path="/cafe" element={<CafeView />} />
            {/* <Route path="/employee" element={<Employee_original />} /> */}
    
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
