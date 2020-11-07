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

import ProviderApi from '../API/Api'

function SearchForm() {
    const [cityName, setCityName] = useState("");
    const [stateName, setStateName] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [specialtyName, setSpecialtyName] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleOnChangeCity = (event) => {
        event.preventDefault()
        setCityName(event.target.value)
    }
   
    const handleOnChangeState = (event) => {
      event.preventDefault()
      setStateName(event.target.value)
    }

    const handleOnChangeSpecialty = (event) => {
        event.preventDefault()
        setSpecialtyName(event.target.value)
      }

    const handleOnChangeZip = (event) => {
        event.preventDefault()
        setZipcode(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true)
        //console.log(cityName, stateName, zipcode, specialtyName)
    }
    
    return (
        <Container className="float-left">
            
        <Form className="form" onSubmit = {handleSubmit} >
          
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
            
            <Button type="submit" color="primary">Submit</Button>
        
        </Form>
        <br></br>

        <div>
            {isSubmitted && 
            <ProviderApi 
                specialtyName = { specialtyName }
                stateName = { stateName }
                cityName = { cityName }
                zipcode = { zipcode } 
             />
            }   
        </div>

            
        </Container>
        

    )

 }



export default SearchForm;
