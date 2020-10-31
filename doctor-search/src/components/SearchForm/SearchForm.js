import React, { useState } from 'react'
import { 
    Container, Col, Form,
    FormGroup, Label, Input, 
    Button,
  } from 'reactstrap';

import StateDropDown 
from '../StateDropDown/StateDropdown';

import SpecialtyDropDown
from '../SpecailtyDropDown/SpecialtyDropDown';

function SearchForm() {
    const [cityName, setCityName] = useState("");
    const [stateName, setStateName] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [specialtyName, setSpecialtyName] = useState("");

    const handleOnChangeCity = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        setCityName(event.target.value)
    }
   
  
    const handleOnChangeState = (event) => {
      event.preventDefault()
      console.log(event.target.value)
      setStateName(event.target.value)
    }

    const handleOnChangeSpecialty = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        setSpecialtyName(event.target.value)
      }

    const handleOnChangeZip = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        setZipcode(event.target.value)
    }

  



    
    return (
        <Container className="float-left">
            
        <Form className="form">
          
            <Col  md="6"> 
            <FormGroup>
                <Label className="float-left" for='city'>City</Label>
                <Input type='text' name='city' placeholder="City" value={cityName} onChange={handleOnChangeCity}/>               
            </FormGroup>
            </Col>
            
            <Col md="6">
            <FormGroup>                      
                <StateDropDown handleOnChangeState = {handleOnChangeState} stateName = { stateName } />        
            </FormGroup>
            </Col>
            
            <Col md="6">
            <FormGroup>
                <Label className="float-left" for = 'zipcode'>Zipcode</Label>
                <Input type='text' name='zipcode' placeholder="Zipcode" value={zipcode} onChange={handleOnChangeZip}></Input>
            </FormGroup>
            </Col>
            
            <Col md="9">
            <FormGroup>   
                <SpecialtyDropDown handleOnChangeSpecialty = {handleOnChangeSpecialty} specialtyName = { specialtyName } />            
            </FormGroup>
            </Col>
            
            <Button color="primary">Submit</Button>{' '}
        
        </Form>
        </Container>

    )

 }



export default SearchForm;
