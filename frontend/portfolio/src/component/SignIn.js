import React, { Component } from "react";
import axios from "axios";
import Cookies from 'js-cookie'



const AUTH_TOKEN = Cookies.get('JWT')
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
const url = 'http://127.0.0.1:8000/signin/'



export default class Signin extends Component {
        constructor(props){
            super(props)
           
            this.changeHandler = this.changeHandler.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
          


            this.state = {
                username : '',
                password : '',
                error: '',
            }
        }
        


        changeHandler = e => {
        this.setState({ [e.target.name] : e.target.value })
        }

        handleSubmit = e => {
        e.preventDefault();

        axios.post(url, this.state)
      
     
        .then(res => {
            let inThirtyMinutes = new Date(new Date().getTime() + 60 * (1000 * 30));
            Cookies.set('JWT', res.data.token, { expires: inThirtyMinutes})
            
            // localStorage.setItem('JWT', res.data.token)
            localStorage.setItem('username', this.state.username);
            window.location = '/'
            // this.props.history.push('/')
            
            }).catch( error => {
                
                this.setState({
                    error: <p>Login Detail provided is invalid</p>
                })
            })
           
          
        }

        

    render() {

        const {username, password} = this.state
       
        return (
            <div className='container' style={{display:'block', marginLeft:'auto', marginRight:'auto', width:'50%'}}>
                <div className='row'>
                  
                    <div className='col-sm-12 col-md-8 col-lg-8 '>


                    <form style={{paddingTop:'35%', width: '100%'}} onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>
                {this.state.error}

                <div className="form-group">
                    <label>Username</label>
                    <input 
                    name = 'username'
                    value={username}
                    type="text" 
                    onChange = {this.changeHandler}
                    className="form-control"
                     placeholder="Username" 
                     
                     />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    name ='password'
                    value = {password}
                    onChange = {this.changeHandler}
                    type="password"
                     className="form-control" 
                     placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                 
                </div>

                <button style={{backgroundColor: 'rgb(255, 233, 110)', color:'white'}} type="submit" className="btn-lg ">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/signin">password?</a>
                </p>
            </form>
         

                    </div>

                </div>
            
            </div>
        );
    }
}

