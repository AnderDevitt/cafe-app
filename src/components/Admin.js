import React from 'react'
// import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Link } from '@mui/material'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandIcon from '@mui/icons-material/Expand';

function Admin() {
  return (
    <div>
      <Typography variant="h4">Admin Panel</Typography>
      <Typography>Click on a section panel to display options</Typography>
      {/* An accordian to group and organise related options on the admin panel */}
      <div>
        {/* First group for report features */}
        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">Reports</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Generate reports
            </Typography>
            <Link href="/reports" underline="hover">
              {'Generate Report'}
            </Link>
          </AccordionDetails>
        </Accordion>

        {/* Second group for cafe staff CRUD options */}
        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography  variant="h6">Cafe Staff</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Add and Edit staff details. 
            </Typography>
            <Link href="/new_employee" underline="hover">
              {'New Employee'}
            </Link>
            <Link href="/employees" underline="hover">
              {'Edit Employee Details'}
            </Link>
          </AccordionDetails>
        </Accordion>

        {/* Third group for system login roles CRUD options
        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
          <Typography  variant="h6">System Login Accounts</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Choose an option below to Add, Edit, or Delete login roles for the system. 
            </Typography>
            <Link href="/new_role" underline="hover">
              {'New Login'}
            </Link>
          </AccordionDetails>
        </Accordion> */}
      </div>
    </div>
  )
}

export default Admin