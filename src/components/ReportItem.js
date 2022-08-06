import React from "react";
import { Card, CardContent } from "@mui/material"
import "../stylesheet.css";

const ReportItem = ({ shift, employee }) => {
  console.log(shift)
  return (
    <>
      {/* Check that only active employees are on the list to check in for a shift */}
        <Card className="report-item">
          <CardContent>
          <h3>Date: {shift.date}</h3>
          <div>
            <h2>
              {employee.first_name} {employee.last_name}
            </h2>
            <div>
              <span>Start:</span> {shift.start}
            </div>
            <div>
              <span>Finish:</span> {shift.finish}
            </div>
          </div>
          </CardContent>
        </Card>
    </>
  );
};

export default ReportItem;
