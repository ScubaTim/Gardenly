import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { signIn } from '../../store/actions/authActions'

import { Redirect } from 'react-router-dom';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignIn = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = (e) => {
        e.preventDefault()

        let credentials = {
            email,
            password
        }

        dispatch(signIn(credentials))
    }

    if (auth._id) return <Redirect to="/" />

    return (
        <Container fluid className="d-flex justify-content-center">
            <Row>
                <Form className="border rounded p-4 my-5 shadow" noValidate autoComplete="off" onSubmit={handleSignIn} >
                    <h1 className="mb-4">Sign In</h1>
                    <Form.Group  >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group  >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                    </Form.Group>
                    <Button block variant="success" type="submit">
                        Sign In
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

export default SignIn