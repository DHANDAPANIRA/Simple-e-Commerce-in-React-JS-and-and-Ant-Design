import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";


export class Navigation extends Component{
    render(){
        return(
            <Navbar bg="dark" expand="lg">
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link className="d-inline text-white" href="/">Home</Nav.Link>
                    <Nav.Link className="d-inline text-white" href="/department" >Department</Nav.Link>
                    <Nav.Link className="d-inline text-white" href="/employee">Employee</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
