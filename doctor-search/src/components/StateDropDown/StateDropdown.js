import React, { useState } from 'react'
import stateData from '../../data/states.json'
import { Input, FormGroup, Label } from 'reactstrap';

function StateDropDown(props) {
//   const [stateName, setStateName] = useState("");
  
//   const handleOnChange = (event) => {
//     event.preventDefault()
//     console.log(event.target.value)
//     setStateName(event.target.value)
// }



  const list = stateData.map(d => <option>{d.name}</option>)

  
  return (          
     
        
        <FormGroup>
          <Label>State:</Label>
          <Input
            type="select"
            name="state"
            placeholder="State"
            value={props.stateName}
            onChange={props.handleOnChangeState}>
              <option value="">Choose a State</option>
              {list}

          </Input>

          </FormGroup>
        
        
      )
  }
    
  
  
  export default StateDropDown;