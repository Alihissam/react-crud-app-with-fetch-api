import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
    return (
        <Navbar className="navbar" expand="lg">
            <Container>
                <Link to="/"><Navbar className="navbar-brand" >Crud-App</Navbar></Link>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" me-auto nav-links">
                        <NavLink activeClassName="active" to="/">Home</NavLink>
                        <NavLink activeClassName="active" to="/about">About</NavLink>
                        <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                    </Nav>
                    <Link className="btn btn-outline-light" to="/user/add">Add User</Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;