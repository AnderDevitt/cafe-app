import React from 'react'
import "../stylesheet.css"
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";
import Staff from './Staff'
import Admin from './Admin'
import Home from './Home'
import Login from './Login'


const App = () => {
  return (
    <div className="page">

      <Router>
        <li className="header">
          <Link className="home-link" to="/">Logo</Link>
        </li>

          <Switch>
            <Route path="/staff" element={<Staff />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Switch>
      </Router>
      <div className="footer">Footer</div>
    </div>
  )
}

export default App
