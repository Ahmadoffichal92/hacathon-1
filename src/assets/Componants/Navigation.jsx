import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'; 

function Navigation() {
  return (
    <Navbar expand="lg" className="bg">
      <Container>
  
        <Navbar.Brand href="/">
   <h1 style={{color:"white"}}>Event Manager</h1>
        </Navbar.Brand>
          <div className="d-flex gap-2">
            <NavLink to="/Login">
              <button className="btn btn-outline-primary">Login</button>
            </NavLink>
            <NavLink to="/SignUP">
              <button className="btn btn-primary">Sign Up</button>
            </NavLink>
          </div>
      
      </Container>
    </Navbar>
  );
}

export default Navigation;
