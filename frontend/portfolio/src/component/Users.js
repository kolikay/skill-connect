import React, { Component} from 'react';
import axios from 'axios';
import '../App.css';
import {Card, CardTitle,  CardText} from 'react-mdl'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'


const url = process.env.REACT_APP_API

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading : false,
            users : [],
            error : '',
            
           
         }
    }
    

    
    componentDidMount() {
        this.setState({loading : true})
        axios.get(`${url}/users/`)
        .then( responce => {
        this.setState({ 
            loading : false,
            users: responce.data})
        
        
        })
        .catch(error => {console.log(error)
        this.setState({error : <h4>server timed out while loading</h4>})
        })
    }
        

    render() { 
        const { users, loading, error} = this.state
        const text = loading && ! error ? <p>Please wait while file is loaded from the server.......</p>: null
        const token = Cookies.get('JWT')
        return ( 
            <div className='container ' >
                    <h3>{text}</h3>
                    {!token ? <h3>Sessions Expired, please sign in again</h3> : null }



                    <div className='row'>
                        <div className='col user' >
                        

                            {users ? users.map(user => 
                            
                            <Card className='card' key={user.id} shadow={1}>
                                 <Link to={`/users/${user.id}`}>
                                 
                                    <CardTitle><img src={user.image} style={{ width:"150px", height:'150px'}} alt={user.username} /></CardTitle>
                                 </Link> 
                                    <CardText>
                                        <h2 style={{color:'rgb(226, 197, 29)', fontFamily:'cursive'}}>{user.username}</h2>
                                        <h5 style={{color:'black',fontWeight:'bold', fontFamily:'cursive'}}>{user.stack}</h5>
                                        <a style={{textDecoration:'none', color:'black',fontWeight:'bold', fontFamily:'cursive'  }} href={user.resume} target='_blank' rel="noopener noreferrer">Resume</a>
                                       
                                    </CardText>
                                   
                                
                            </Card>)
                            :null}
                        </div>
                    </div>
                   

                    <p>{error}</p>
            </div>);
    }
}
 
export default Homepage ;

