import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Login extends Component {
    static propTypes = {
        prop: PropTypes
    }
     onClick=(event)=> {
        const eventType = event.type; 
      
        setTimeout(function() {
          console.log(event.type); 
          console.log(eventType); 
        }, 0);
    }
    render() {
        return (
            <div >
               cdujduij
                
            </div>
        )
    }
}
