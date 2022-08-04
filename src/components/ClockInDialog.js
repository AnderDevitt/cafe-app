import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { createShift } from '../services/shiftServices'
import EmployeeLogin from './EmployeeLogin'

export default function ClockInDialog({employee}) {
  
  const [open, setOpen] = React.useState(false)
  const today = new Date()

  // Open and close the dialog box
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  // Set the initial shift data when a user is clocking on
  // Then call createShift to send the data to the back-end api
  const handleStartTime = (e) =>{
    e.preventDefault()
    let data = {
      date: today.toLocaleDateString(),
      start: today.toLocaleTimeString(),
      finish: today.toLocaleTimeString(),
      employee_id: employee.id,
      clocked_out: false
    }
    createShift(data)
      .then((response) => {
        console.log("New Shift created in Employee.js: " +  response)
      })
      .catch(e => {console.log(e)})
    handleClose()
  }
    
  // Contents of the dialog box which includes EmployeeLogin component to verify the employee
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>Start Shift</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Start Your Shift</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Enter your username and PIN number then click Verify.
          </DialogContentText>
            <EmployeeLogin />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          <Button variant="outlined" onClick={handleStartTime}>Start Shift</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}