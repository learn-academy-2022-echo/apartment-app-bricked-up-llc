import React from "react"
import { Button, NavLink, NavItem} from "reactstrap"
const Home = (props) => {
  return (
    <>
      <h1>Welcome to Bricked Up!</h1>
      <h3>Description of app</h3>
      {props.logged_in && (
        <>
         <h3>Welcome Back!</h3>
          <NavItem>
            <Button>
              <NavLink to="/apartmentindex" className="nav-link">
                View Listings
              </NavLink>
            </Button>
            </NavItem>
            <NavItem>    
            <Button>
              {/* link to private index or same index with less */}
              <NavLink to="/apartmentindex" className="nav-link">
                My Listings
              </NavLink>
            </Button>
          </NavItem>
          </>
        )}
        {!props.logged_in && (
          <> 
            <NavItem>
              <Button>
                <a href={props.new_user_route} className="nav-link">
                  Please Sign up
                </a>
              </Button>
            </NavItem>
            <NavItem>
              <Button>
                <a href={props.sign_in_route} className="nav-link">
                  Sign In
                </a>
              </Button>
            </NavItem>
          </>
        )}
    </>
  )
}

export default Home
