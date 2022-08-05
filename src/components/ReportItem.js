import React from "react";
import Moment from "react-moment";
import { Card, CardContent } from "@mui/material"
import "../stylesheet.css";

const ReportItem = ({ shift, employee, date }) => {
  const moment = require('moment');
  return (
    <>
      {/* Check that only active employees are on the list to check in for a shift */}
      {moment(date).format('YYYY-MM-DD') === shift.date && (
        <Card className="report-item">
          <CardContent>
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
          </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ReportItem;
