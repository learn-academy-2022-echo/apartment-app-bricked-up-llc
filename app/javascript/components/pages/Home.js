import React from "react"
import { Button, NavLink, NavItem} from "reactstrap"
const Home = (props) => {
  return (
    <>
      <h3>Home</h3>
      {props.logged_in && (
        <>
         <h3>Welcome!</h3>
         <NavItem>
          <Button>
            <a href={props.new_user_route} className="nav-link">
              Please Sign in
            </a>
            </Button>
          </NavItem>
          </>
        )}
        {!props.logged_in && (
          
         <NavItem>
          <Button>
            <a href={props.new_user_route} className="nav-link">
              Please Sign in
            </a>
            </Button>
          </NavItem>
        )}
    </>
  )
}

export default Home
