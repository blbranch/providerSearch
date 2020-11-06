import React, { useState, useEffect } from 'react'
const axios = require('axios');

export default class ProviderApi extends React.Component {
    state = {
      providers: []
    }
  
    componentDidMount() {
      axios.get('http://localhost:5000/?', {
        params: {
            //version: 2.1,
            city: 'Jacksonville',//props.cityName,
            state: 'FL', //props.stateName,
            
            //postal_code: '', //props.zipcode,
            //pretty: true
        }
      })
        .then(res => {
          const results = res.data.results[0].addresses[0].address_1;
          this.setState({ providers: results });
          console.log(results)
        })
    }

  
    render() {
      const {
         providers
      } = this.state;
      return (
        <div>
            <ul>
      {<li>{providers}</li> }
            </ul>
        </div>
      )
    }
  }





// function ProviderApi() {

//     const [providerResults, setProviderResults] = useState("test");
    
//     useEffect(() => {
//         const apiCall = () => {        
//             //     // console.log(props)
//             //     //let results = 
//             //     axios.get('http://localhost:5000/?', {
//             //     params: {
//             //         //version: 2.1,
//             //         city: 'Jacksonville',//props.cityName,
//             //         state: 'FL', //props.stateName,
                    
//             //        //postal_code: '', //props.zipcode,
//             //         //pretty: true
//             //     }
                
//             // })
//             // .then(res => {
//             //     const results = res.data.results[0]
//             let results = 'data'
//             setProviderResults(results)
//             //    //return <p>hello</p>
              
//             //     //response.data.results[0]
//             //    //return <h1>{response.data.results[0]}</h1>
               
//             // })
        
//              return <h1>{providerResults}</h1>
             


//     }
//      })



// return (

//     <div>
//     {providerResults}
//     <h1>Provider API component</h1>
//     </div>
//   )
// }




//export default ProviderApi


