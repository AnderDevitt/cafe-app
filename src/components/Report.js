import React from "react";
import { useGlobalState } from "../utils/stateContext";
import Calendar from "react-calendar";
import { CSVLink } from "react-csv";
import "react-calendar/dist/Calendar.css";
import Moment from "react-moment";
import { useState } from "react";
import ReportItem from "./ReportItem";
import "../stylesheet.css";

function Report() {
  const { store } = useGlobalState();
  const { employeeList } = store;
  const { shiftList } = store;
  const moment = require('moment');
  const [value, onChange] = useState(new Date());
  let shifts = shiftList.filter((shift) => moment(value).format('YYYY-MM-DD') === shift.date)
  console.log(shifts.length == 0)
  return (
    <div className="report-list">
      <Calendar onChange={onChange} value={value} />
      <CSVLink data={shifts}>
        Download me
      </CSVLink>
      {shifts.length == 0 && (
        <h3> No shifts on this date </h3>
      )}
      {shiftList.map((shift) => (
        <ReportItem
          key={shift.id}
          shift={shift}
          date={value}
          employee={employeeList.find(
            (employee) => employee.first_name === shift.first_name
          )}
        />
      ))}
    </div>
  );
}

export default Report;
