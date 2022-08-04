import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { updateShift } from '../services/shiftServices'
import EmployeeLogin from './EmployeeLogin'

export default function ClockOutDialog({shift}) {
  
  const [open, setOpen] = React.useState(false)
  const today = new Date()

  // Open and close the dialog box
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  // Sets the new finish time and clocked_out value when a user is clocking out
  // Then call updateShift to send the data to the back-end api
  const handleFinishTime = (e) =>{
    e.preventDefault()
    let data = {
     id: shift.id,   
     finish: today.toLocaleTimeString(),
     clocked_out: true
    }
    updateShift(data)
    .then(
      console.log("Shift time updated in Employee.js: " +  data)
    )
    .catch(e => {console.log(e)})
    handleClose()
  }  
    
    
  // Contents of the dialog box which includes EmployeeLogin component to verify the employee
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>End Shift</Button>
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
          <Button variant="outlined" onClick={handleFinishTime}>End Shift</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}