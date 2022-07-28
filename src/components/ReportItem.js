import React from "react";
import Moment from "react-moment";
import "../stylesheet.css";

const ReportItem = ({ shift, employee, date }) => {
  return (
    <>
      {/* Check that only active employees are on the list to check in for a shift */}
      {date.toLocaleDateString(['ban', 'id']) === shift.date ? (
        <div className="report-item">
          <h3>Date: {shift.date}</h3>
          <div>
            <h2>
              {employee.first_name} {employee.last_name}
            </h2>
            <div>
              <span>Start:</span>
              <Moment format="hh:mm:ss">{shift.start}</Moment>
            </div>
            <div>
              <span>Finish:</span>
              <Moment format="hh:mm:ss">{shift.finish}</Moment>
            </div>
            <p>Hours: {shift.hours}</p>
          </div>
        </div>
      ) : (
        <>
          <p>No Shifts on this Date</p>
        </>
      )}
    </>
  );
};

export default ReportItem;
