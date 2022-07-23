import { Link, useNavigate } from "react-router-dom"
import { useGlobalState } from "../utils/stateContext"

const Navbar = () => {
    const {store, dispatch} = useGlobalState()
    const {currentUser} = store

    const navigate = useNavigate()

    const logout = (e) => {
        e.preventDefault()
        dispatch({
            type: "setCurrentUser",
            data: ""
        })
        navigate("/home")
    }

    return (
        <nav>
            <Link to="/home">Home</Link>
            { currentUser ?
            <>
                <Link to="/employees">Staff Shifts</Link>
                {currentUser}
                <Link to="/home" onClick={logout}>Logout</Link>
            </>
            :
            <>
                <Link to="/login">Login</Link>
            </>
            
            

            }
        </nav>

    )
}
export default Navbar