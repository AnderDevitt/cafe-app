
import { Link, useNavigate } from "react-router-dom"
import { useGlobalState } from "../utils/stateContext"
import { AppBar, Toolbar, Tab, Tabs } from "@mui/material"
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
            <Toolbar>
                <Tabs value={false}>
                    
                    { loggedInUser && <Tab label="Employees Page" value="/employees" component={Link} to="/employees" />}
                    { loggedInUser && <Tab label="Shifts Page" value="/shifts" component={Link} to="/shifts" />}
                    { loggedInUser && <Tab label="Cafe Page" value="/cafe" component={Link} to="/cafe" />}
                    { (loggedInUser === "admin") && <Tab label="Admin Panel" value="/admin" component={Link} to="/admin" />}

                    { !loggedInUser && <Tab label="Log On" value="/login" component={Link} to="/login" />}
                    <Tab label={loggedInUser} />
                    { loggedInUser && <Tab label="Log Off" onClick={logout} component={Link} to="/login" />}
                    <Tab label="Emergency" value="/new_role" component={Link} to="/new_role"  />
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar