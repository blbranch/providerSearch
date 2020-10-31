import React from 'react'
import stateData from '../../data/states.json'
import { Input, FormGroup, Label } from 'reactstrap';

class StateDropDown extends React.Component {
    constructor(){
      super();
      this.state = {
        stateName: ""
      }
    }
  

  
    render() {
     
      const list = stateData.map(d => <option>{d.name}</option>)
      
      return (
        
        <FormGroup>
          <Label>State:</Label>
          <Input
            type="select"
            name="state"
            placeholder="State"
            value={this.state.StateName}
            onChange={e => this.setState({ stateName: e.target.value })}>
              <option value="">Choose a State</option>
              {list}

          </Input>

          </FormGroup>
        
        
      )
    }
  }
  
  export default StateDropDown;