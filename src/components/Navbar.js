
import { Link, useNavigate } from "react-router-dom"
import { useGlobalState } from "../utils/stateContext"
import { AppBar, Toolbar, Tab, Tabs, Typography } from "@mui/material"
import "./style/styling" 

const Navbar = () => {
    const {store, dispatch} = useGlobalState()
    const {loggedInUser} = store

    const navigate = useNavigate()

    const logout = (e) => {
        e.preventDefault()
        sessionStorage.clear()
        dispatch({
            type: "setLoggedInUser",
            data: null 
        })
        dispatch({
            type: "setToken",
            data: null 
        })
        navigate("/login")
    }

    return (
        <AppBar position="sticky">
            <Typography variant="h4">{loggedInUser}</Typography>
            <Toolbar>
                <Tabs value={false}>
                    <Tab label="Home" value="/cafe" component={Link} to="/cafe" />
                    <Tab label="Shifts Page" value="/shifts" component={Link} to="/shifts" />
                
                    { !loggedInUser && <Tab label="Admin Log On" value="/login" component={Link} to="/login" />}
                    
                    { (loggedInUser === "admin") && <Tab label="Admin Panel" value="/admin" component={Link} to="/admin" />}
                    { loggedInUser && <Tab label="Log Off" onClick={logout} component={Link} to="/login" />}
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar