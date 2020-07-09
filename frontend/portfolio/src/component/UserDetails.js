import React, { Component, Fragment} from 'react';
import axios from 'axios'



class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading : false,
            user : [],
            error : '',
           
         }
    }
    

    
    componentDidMount() {
        console.log(this.props.match)
        this.setState({loading : true})
        axios.get(`http://127.0.0.1:8000/users/${this.props.match.params.id}`)
        
        
        .then( responce => {
        this.setState({ 
            loading : false,
            user: responce.data})
        
        
        })
        .catch(error => {console.log(error)
        this.setState({error : <h4>server timed out while loading</h4>})
        })
        
 
    }

    render() {
        const { user } = this.state
        return( <Fragment >
                        <div className='container-fluid'>
                                <div className='row'>
                                            <div className='col profile-top'>
                                                <h1  style={{ margin:'0px',fontFamily: 'cursive'}}>{user.name}</h1>
                                                <h4 style={{color:'white', marginTop:'0px',fontFamily: 'cursive'}}>{user.stack}</h4>
                                            </div>
                                </div>
                                <div className='row container' style={{paddingTop:'10%'}}>
                                    <div className='col'>
                                        <p style={{ color:'rgb(226, 197, 29)',fontFamily: 'cursive', fontWeight:'bold', fontSize:'20px'}}>Few Words</p>
                                        <h3 style={{fontSize:'40px', fontWeight:'bolder', fontFamily:'cursive'}}>About Me</h3>
                                        <p style={{color:'grey'}}>{user.about}</p>
                                    </div>
                                    <div className='col'>
                                        <img alt='icon' style={{height:'600px', width:'600px', paddingLeft:'50px', paddingBottom:'80px', paddingTop:'40px'}}
                                        src={user.image}
                                        />

                                    </div>
                                </div>
                                <div className='row' >
                                    <div className='col'>  
                                        <img src="https://i.imgur.com/2zXVvU6.png" alt='icon'/>                      
                                                            
                                        <h4 style={{ fontFamily: 'Times New Roman', fontWeight:'bold', fontSize:'30px'}}>Quality</h4>
                                        <p> The standard Lorem Ipsum passage, used since the 1500s
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                        </p>
                                    </div> 
                                    <div className='col'>
                                        <img src={"https://i.imgur.com/HpqP9AH.png"} alt='icon'/>  
                                        <h4 style={{ fontFamily: 'Times New Roman', fontWeight:'bold', fontSize:'30px'}}>Professionalism</h4>
                                        <p> The standard Lorem Ipsum passage, used since the 1500s
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                        </p>
                                    </div> 
                                    <div className='col'>
                                        <img alt='icon' style={{color:'rgb(226, 197, 29)'}} src="https://i.imgur.com/5tmRRWH.png"/>  
                                        <h4 style={{ fontFamily: 'Times New Roman', fontWeight:'bold', fontSize:'30px'}}>Experience</h4>
                                        <p> The standard Lorem Ipsum passage, used since the 1500s
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                        </p>
                                    </div> 
                                    <div className='col'>
                                        <img alt='icon' src="https://i.imgur.com/ydG3ZSv.png"/>  
                                        <h4 style={{ fontFamily: 'Times New Roman', fontWeight:'bold', fontSize:'30px'}}>Honors</h4>
                                        <p> The standard Lorem Ipsum passage, used since the 1500s
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                        </p>
                                    </div>

                                </div>
                        
                            </div> 
            </Fragment>

        )}
}
export default UserDetails;