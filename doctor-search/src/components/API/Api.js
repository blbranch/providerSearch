import React, { useEffect, useState } from 'react'
import {
    Card, CardText, CardBody, 
    CardTitle, CardSubtitle
} from 'reactstrap';
const axios = require('axios');

const ProviderApi = (props) => {
const [providers, setProviders] = useState([])

    useEffect(() => {

      axios.get('http://localhost:5000/?', {
        params: {
            //version: 2.1,
            city: props.cityName,
            state: props.stateName,
            postal_code: props.zipcode
         }
      })
        .then(res => {
          const results = res.data.results
          
          setProviders({ 
            providers: results 
          })
        })
    
    
      });

    const providerData = providers.map(provider => 
              <Card>
                    <CardBody>
                        <CardTitle>{provider.basic.first_name} {provider.basic.last_name}</CardTitle>
                        <CardSubtitle>{provider.taxonomies[0].desc}</CardSubtitle>
                        <CardText>{provider.addresses[0].address_1}</CardText>   
                    </CardBody>
              </Card>    
    )

    
      return (
        <div>
          {providerData}
        </div>
      )
  }

export default ProviderApi