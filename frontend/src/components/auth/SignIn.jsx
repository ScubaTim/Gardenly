import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignIn = () => {
    return (
        <Container fluid className="d-flex justify-content-center">
            <Row>
                <Form className="border rounded p-4 my-5 shadow" noValidate autoComplete="off" >
                    <h1 className="mb-4">Sign In</h1>
                    <Form.Group  >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group  >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="email" placeholder="Enter Password" />
                    </Form.Group>
                    <Button block variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

export default SignIn