import React from 'react'
import {
    Card, CardText, CardBody, 
    CardTitle, CardSubtitle
} from 'reactstrap';
const axios = require('axios');

export default class ProviderApi extends React.Component {
    state = {
      providers: []
    }
  
    componentDidMount() {
      
      axios.get('http://localhost:5000/?', {
        params: {
            //version: 2.1,
            city: this.props.cityName,
            state: this.props.stateName,
            postal_code: this.props.zipcode
         }
      })
        .then(res => {
          const results = res.data.results
          this.setState({ 
            providers: results 
          });
          console.log(results)
        })
    }

  
    render() {
      const {
         providers
      } = this.state;
      return (
          <div>
              {providers.map(provider => (
                <Card>
                    <CardBody>
                        <CardTitle>{provider.basic.first_name} {provider.basic.last_name}</CardTitle>
                        <CardSubtitle>{provider.taxonomies[0].desc}</CardSubtitle>
                        <CardText>{provider.addresses[0].address_1}</CardText>   
                    </CardBody>
                </Card>    
            ))}
          </div>
      )
    }
  }
