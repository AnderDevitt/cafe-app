import React from "react";
import { useGlobalState } from "../utils/stateContext";
import Calendar from "react-calendar";
import { CSVLink } from "react-csv";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import ReportItem from "./ReportItem";
import "../stylesheet.css";

function Report() {
  const { store } = useGlobalState();
  const { employeeList } = store;
  const { shiftList } = store;
  const [value, onChange] = useState(new Date());
  let shifts = shiftList.filter((shift) => value.toLocaleDateString(['ban', 'id']) === shift.date) || "no shifts"
  console.log(shifts)
  return (
    <div className="report-list">
      <Calendar onChange={onChange} value={value} />
      <CSVLink data={shifts}>
        Download me
      </CSVLink>
      {shiftList.map((shift) => (
        <ReportItem
          key={shift.id}
          shift={shift}
          date={value}
          employee={employeeList.find(
            (employee) => employee.id === shift.user_id
          )}
        />
      ))}
    </div>
  );
}

export default Report;
