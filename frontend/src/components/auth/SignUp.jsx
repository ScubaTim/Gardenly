import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Redirect } from 'react-router-dom'

import { signUp } from '../../store/actions/authActions'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUp = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = (e) => {
        e.preventDefault()

        let user = {
            name,
            email,
            password
        }

        dispatch(signUp(user))
    }

    if (auth._id) return <Redirect to="/" />

    return (
        <Container fluid className="d-flex justify-content-center">
            <Row>
                <Form className="border rounded p-4 my-5 shadow" noValidate autoComplete="off" >
                    <h1 className="mb-4">Sign Up</h1>
                    <Form.Group  >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group  >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group  >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="email" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button block variant="success" type="submit" onClick={handleSignUp}>
                        Sign Up
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

export default SignUp