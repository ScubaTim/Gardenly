import React from 'react';

import { Link, useHistory } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { signOut } from '../../store/actions/authActions'

const NavBar = () => {
    const history = useHistory()
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    console.log('navbar state', state.auth.name)

    const handleSignOut = () => {

        dispatch(signOut())
        history.push('/signin')
    }

    return (
        <Navbar className="mb-3" bg="success" variant="dark" expand="lg">
            <Navbar.Brand><Link className="text-white font-weight-bold" to="/">Gardenly</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse >
                <Nav className="ml-auto">
                    {state.auth._id ? (
                        <>
                            <Navbar.Text className="text-light text-capitalize">Welcome&nbsp;{state.auth.name}&nbsp;&nbsp;</Navbar.Text>
                            <Nav.Link><Link className="text-white" to="/">My Garden</Link></Nav.Link>
                            <Nav.Link className="text-white" onClick={() => handleSignOut()}>Sign Out</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link><Link className="text-white" to="/signup">Sign Up</Link></Nav.Link>
                            <Nav.Link><Link className="text-white" to="/signin">Sign In</Link></Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar