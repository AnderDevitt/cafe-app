import React, { useEffect }  from "react";
import { useGlobalState } from "../utils/stateContext";
import { DateRangePicker } from "react-date-range";
import { CSVLink } from "react-csv";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState } from "react";
import ReportItem from "./ReportItem";
import "../stylesheet.css";
import { useLocation } from 'react-router-dom'
import { getShifts } from '../services/shiftServices';
import { getEmployees } from '../services/employeeServices';

function Report() {
  const { store, dispatch } = useGlobalState();
  const { employeeList } = store;
  const { shiftList } = store;
  const location = useLocation();
  const moment = require('moment');
  
  useEffect (
    () => {
      // If the location is /shifts then a re-render of the shifts list will be triggered
      if (location.pathname === "/reports") {
        // connect to the backend api and get the shifts, then dispatch to the reducer to initialise the shiftList
      getShifts()
      .then(shift => {
        dispatch({
          type: "setShiftList",
          data: shift
        })
      })
      .catch(e => {console.log(e)})
      }  
    },
    [location, dispatch] // triggers the useEffect to refresh list of shifts when location changes
  )
  useEffect (
    () => {
      if (location.pathname === "/reports") {
        // connect to the backend api and get the employees, then dispatch to the reducer to initialise the employeeList
      getEmployees()
      .then(employees => {
        dispatch({
          type: "setEmployeeList",
          data: employees
        })
      })
      .catch(e => {console.log(e)})
      }  
    },
    [location, dispatch] // triggers the useEffect to refresh list of employees when location changes
  )

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  function handleChange(ranges) {
    if (ranges.selection.startDate) {
      setStartDate(ranges.selection.startDate)
    }
    if (ranges.selection.endDate) {
      setEndDate(ranges.selection.endDate)
    }
  }
  
  let shifts = shiftList.filter((shift) => moment(startDate).format('DD/MM/YYYY') <= shift.date && moment(endDate).format('DD/MM/YYYY') >= shift.date)
  return (
    <div className="report-list">
      <DateRangePicker onChange={handleChange} ranges={[selectionRange]} />
      {shifts.length === 0 ? (
        <h3> No shifts on this date </h3>
      ) : (
        <CSVLink data={shifts}>
        Download me
        </CSVLink>
      )}
      {shifts.map((shift) => (
        <ReportItem
          key={shift.id}
          shift={shift}
          date={shift.date}
          employee={employeeList.find(
            (employee) => employee.id === shift.employee_id
          )}
        />
      ))}
    </div>
  );
}

export default Report;
