import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'




class Authenticated extends Component {
    
    
    UNSAFE_componentWillMount(){
        const jwt = Cookies.get('JWT')
        if(!jwt){
            this.props.history.push('/auth')
        }
      
    }
    render() { 
    const jwt = Cookies.get('JWT')
    return ( 
    jwt ? 
    <div>{this.props.children}</div> : null
    
    );
    }
}
 
export default withRouter(Authenticated);

