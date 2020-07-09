import React, { Component } from 'react';
import GetUser from './Helpers/GetUser'
import axios from 'axios'
import Cookies from 'js-cookie'



const user = GetUser()


class Profile extends Component {
    constructor(props){
        super(props)

        this.state = {
            user: [],
            error: '',
        }
    }


    componentDidMount(){

        axios.get(`http://127.0.0.1:8000/${user}`)
        .then(user => {console.log(user.data.name)
            this.setState({
                user:user.data.name})
        })
        .catch( error => {
            console.log(error)
            this.setState({
                error: 'User is Un available'
            })
        })
        
      }
  render(){

    const token = Cookies.get('JWT')
    return ( 
            <div className='container-fluid'>
                <div className='row'>
                    <h3>{this.state.error ? this.state.error : null }</h3>
                   {!token ? <h3>Sessions Expired, please sign in again</h3> : null }


                            <div className='col profile-top'>
                <h1  style={{ margin:'0px',fontFamily: 'cursive'}}>{this.state.user}</h1>
                                    <h4 style={{color:'white', marginTop:'0px',fontFamily: 'cursive'}}>Full Stack Web Developer</h4>
                            </div>
                </div>
                <div className='row container' style={{paddingTop:'10%'}}>
                    <div className='col'>
                        <p style={{ color:'rgb(226, 197, 29)',fontFamily: 'cursive', fontWeight:'bold', fontSize:'20px'}}>Few Words</p>
                        <h3 style={{fontSize:'40px', fontWeight:'bolder', fontFamily:'cursive'}}>About Me</h3>
                        <p style={{color:'grey'}}>
                            The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                           "Sed ut perspiciatis unde omnis iste natus error sit voluptatem The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                         
                        </p>
                    </div>
                    <div className='col'>
                        <img style={{height:'600px', width:'600px', paddingLeft:'50px', paddingBottom:'80px', paddingTop:'40px'}}
                        src="https://i.imgur.com/McUrjwj.jpg"
                        alt='icon'
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
                        <img src="https://i.imgur.com/HpqP9AH.png" alt='icon'/>  
                        <h4 style={{ fontFamily: 'Times New Roman', fontWeight:'bold', fontSize:'30px'}}>Professionalism</h4>
                        <p> The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div> 
                    <div className='col'>
                        <img style={{color:'rgb(226, 197, 29)'}} src="https://i.imgur.com/5tmRRWH.png" alt='icon'/>  
                        <h4 style={{ fontFamily: 'Times New Roman', fontWeight:'bold', fontSize:'30px'}}>Experience</h4>
                        <p> The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div> 
                    <div className='col'>
                        <img src="https://i.imgur.com/ydG3ZSv.png" alt='icon'/>  
                        <h4 style={{ fontFamily: 'Times New Roman', fontWeight:'bold', fontSize:'30px'}}>Honors</h4>
                        <p> The standard Lorem Ipsum passage, used since the 1500s
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>

                </div>
           
            </div> 
    );
}
}

export default Profile




// class  Profile extends Component  {
//     constructor(props){
//         super(props)
//         this.state = {
//             profiles : [],
//             loading : false,
//             errors : ''

//         }


//     }

//     componentDidMount() {
//         this.setState({loading : true})
//         axios.get(`http://127.0.0.1:8000/users/`)
//         .then( responce => {console.log(responce.data)
//         this.setState({ 
//             loading : false,
//             profiles: responce.data})
        
        
//         })
//         .catch(error => {console.log(error)
//         this.setState({error : <h4>server timed out while loading</h4>})
//         })
//     }
        

//     render(){