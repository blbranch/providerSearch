import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const SearchForm = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for='city'>City</Label>
                <Input type='text' name='city' placeholder="City"></Input>
            </FormGroup>
            <FormGroup>
                <Label for='state'>State</Label>
                <Input type='select' name='state' placeholder="State" id="state">
                    <option>GA</option>
                    <option>FL</option>
                    <option>NC</option>
                </Input>
                {/* TODO - Map to State abbreviations JSON or database */}
            </FormGroup>



        </Form>
    )
}


export default SearchForm;
