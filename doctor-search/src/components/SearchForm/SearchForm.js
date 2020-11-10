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
const axios = require('axios');


function SearchForm() {
    const [cityName, setCityName] = useState("");
    const [stateName, setStateName] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [specialtyName, setSpecialtyName] = useState("");
    const [providers, setProviders] = useState([])

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

        axios.get('http://localhost:5000/?', {
            params: {
                //version: 2.1,
                city: cityName,
                state: stateName,
                postal_code: zipcode,
                taxonomy_description: specialtyName
             }
          })
            .then(res => {
              const results = res.data.results
              setProviders( 
                results 
              );
            })
         
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
            {providers.length > 0 && 
            <ProviderApi 
                providers = { providers }
             />
            }   
        </div>

            
        </Container>
        

    )

 }



export default SearchForm;
