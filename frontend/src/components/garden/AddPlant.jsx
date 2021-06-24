import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import ToggleButton from "react-bootstrap/ToggleButton";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { addPlant } from '../../store/actions/gardenActions'

const AddPlant = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [checked, setChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        let plant = {
            name,
            isInGarden: checked,
        }

        dispatch(addPlant(plant))
    }

    return (
        <Container fluid className="d-flex justify-content-center">
            <Row>
                <Form className="border rounded p-4 my-4 shadow" onSubmit={handleSubmit} >
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Plant Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                        </Form.Group>

                    </Form.Row>
                    <Form.Group>
                        <ToggleButton
                            type="checkbox"
                            checked={checked}
                            value="1"
                            onChange={(e) => setChecked(e.currentTarget.checked)}
                        >
                            &nbsp;Currently in Garden?
                        </ToggleButton>
                    </Form.Group>

                    <Button block variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

export default AddPlant