// import { Link, useNavigate } from "react-router-dom"
import { Link, useNavigate } from "react-router-dom"
import { useGlobalState } from "../utils/stateContext"
import { AppBar, Toolbar, Tab, Tabs, Typography } from "@mui/material"

const Navbar = () => {
    const {store, dispatch} = useGlobalState()
    const {loggedInUser} = store

    const navigate = useNavigate()

    // const logout = (e) => {
    //     e.preventDefault()
    //     dispatch({
    //         type: "setCurrentUser",
    //         data: ""
    //     })
    //     navigate("/home")
    // }
    const logout = (e) => {
        e.preventDefault()
        sessionStorage.clear()
        dispatch({
            type: "setLoggedInUser",
            data: null 
        })
        // dispatch({
        //     type: "setToken",
        //     data: null 
        // })
        navigate("/login")
    }

    return (
        <AppBar position="sticky">
            <Typography variant="h3">ALS Cafe</Typography>
            <Toolbar>
                <Tabs value={false}>
                    
                    { loggedInUser && <Tab label="Employees Page" value="/employees" component={Link} to="/employees" />}
                    { loggedInUser && <Tab label="Shifts Page" value="/shifts" component={Link} to="/shifts" />}
                    { loggedInUser && <Tab label="Cafe Page" value="/cafe_view" component={Link} to="/cafe_view" />}
                    { (loggedInUser === "admin") && <Tab label="Admin Panel" value="/admin" component={Link} to="/admin" />}

                    { !loggedInUser && <Tab label="Log On" value="/login" component={Link} to="/login" />}
                    <Tab label={loggedInUser} />
                    { loggedInUser && <Tab label="Log Off" onClick={logout} component={Link} to="/login" />}
                    <Tab label="Emergency" value="/new_role" component={Link} to="/new_role"  />
                </Tabs>
            </Toolbar>
        </AppBar>
        // <nav>
        //     <Link to="/home">Home</Link>
        //     { currentUser ?
        //     <>
        //         <Link to="/employees">Staff Shifts</Link>
        //         {currentUser}
        //         <Link to="/admin_panel">Admin Panel</Link>
        //         <Link to="/home" onClick={logout}>Logout</Link>
        //     </>
        //     :
        //     <>
        //         <Link to="/login">Login</Link>
        //     </>
        //     }
        // </nav>

    )
}
export default Navbar