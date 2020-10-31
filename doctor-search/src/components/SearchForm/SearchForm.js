import React, { Component } from 'react'
import { 
    Container, Col, Form,
    FormGroup, Label, Input, 
    Button,
  } from 'reactstrap';

import StateDropDown 
from '../StateDropDown/StateDropdown';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateName: props.stateName
        }
    }
}  


const SearchForm = (props) => {
    
    return (
        <Container className="float-left">
            
        <Form className="form">
          
            <Col  md="6"> 
            <FormGroup>
                <Label className="float-left" for='city'>City</Label>
                <Input type='text' name='city' placeholder="City"></Input>
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>                      
                <StateDropDown/>        
            </FormGroup>
            </Col>
            <Col md="6">
            <FormGroup>
                <Label className="float-left" for = 'zipcode'>Zipcode</Label>
                <Input type='text' name='zipcode' placeholder="Zipcode"></Input>
            </FormGroup>
            </Col>
            <Col md="9">
            <FormGroup>
                <Label className="float-left" for='specialty'>Specialty</Label>
                <Input type='select' name='specialty' placeholder="State" id="specialty">
                    <option value="">Choose a Specialty</option>
                    <option>Family Medicine</option>
                    <option>Internal Medicine</option>
                    <option>Psychology</option>
                </Input>
            </FormGroup>
            </Col>
            <Button color="primary">Submit</Button>{' '}
        </Form>
        </Container>

    )
}


export default SearchForm;
