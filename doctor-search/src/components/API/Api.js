import React from 'react'
import {
    Card, CardText, CardBody, 
    CardTitle, CardSubtitle, Col, Row
} from 'reactstrap';


export default class ProviderApi extends React.Component {


  
    render() {

      
      return (
          <div>
              {this.props.providers.map(provider => (
              <Row>
              <Col sm="6">

             
                <Card key={provider.number}>
                    <CardBody>
                        <CardTitle>
                          {provider.enumeration_type === 'NPI-1' ?   provider.basic.first_name + ' ' + provider.basic.last_name : provider.basic.organization_name}
                         </CardTitle>
                        <CardSubtitle>{provider.taxonomies[0].desc}</CardSubtitle>
                        <CardText>{provider.addresses[0].address_1}</CardText>
                        {provider.addresses[0].address_2.length > 0 ? <CardText> {provider.addresses[0].address_2} </CardText> : <span></span>}
                        <CardText>{`${provider.addresses[0].city}, ${provider.addresses[0].state} ${provider.addresses[0].postal_code}`}</CardText>
                        
                    </CardBody>
                </Card>
                <br></br>
            </Col>
            </Row>
            
            ))}
          </div>
      )
    }
  }