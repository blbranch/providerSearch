import React  from 'react'
import specialtyData from '../../data/specialties.json'
import { Input, FormGroup, Label } from 'reactstrap';

function SpecialtyDropDown(props) {



  const list = specialtyData.map(specialty => <option key={specialty.id}>{specialty.desc}</option>)

  
  return (          
     
        
        <FormGroup>
          <Label>Specialty:</Label>
          <Input
            type="select"
            name="specialty"
            placeholder="Specialty"
            value={props.specialtyName}
            onChange={props.handleOnChangeSpecialty}>
              <option value="">Choose a Specialty</option>
              {list}

          </Input>

          </FormGroup>
        
        
      )
  }
    
  
  
  export default SpecialtyDropDown;