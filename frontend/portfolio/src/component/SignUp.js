
import React from 'react';
import { useFormik } from 'formik'
import axios from 'axios'
import GetToken from './Helpers/GetToken'








function SignUp () {
    
    const token = GetToken()
    const url = 'http://127.0.0.1:8000/signup/'
    const formik = useFormik({
        initialValues: {
            name : '',
            age  : '',
            email : '',   
            phone  : '',    
            address : '',  
            about : '',  
            username  : '',
            password : '',
            password2 : '',
            stack: '',
            error:  ''
            
        },
        onSubmit: values => {
                    console.log(values)
                    // axios.post('http://127.0.0.1:8000/signup/', values)
                    axios.post(url, values, {
                        headers: {
                            'authorization': token,
                            'Accept' : 'application/json',
                            'Content-Type': 'application/json'
                        }
                    })
                 





                    .then(responce=> {console.log(responce)
                        if(responce.status===201){
                            alert('Registration was Successful, Signin to continue')
                            window.location = "/signin"
                        }
                    })
                   .catch(error => {
                    error = <p>Registration Failed</p>
                    alert(error.props.children)
                    window.location = '/signup'
                    })
        },
        validate: values => {
            let errors = {}

            if (!values.name){
                errors.name = 'Required'
            }
            if (!values.age){
                errors.age = 'Required'
            }
            if (!values.email){
                errors.email = 'Required'
            }else if (!/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/.test(values.email)){
                errors.email = "Invalid Email Format"
            }
            if (!values.phone){
                errors.phone = 'Required'
            }
            if (!values.address){
                errors.address = 'Required'
            }
            if (!values.about){
                errors.about = 'Required'
            }
            if (!values.username){
                errors.username = 'Required'
            }
            if (!values.password){
                errors.password = 'Required'
            }
            if (!values.password2){
                errors.password2 = 'Required'
            }
            if (!values.stack){
                errors.stack = 'Required'
            }


            return errors
        }

    })

    return (
        <div className='container'style={{display:'block', marginLeft:'auto', marginRight:'auto', width:'50%'}}>
            <form style={{paddingTop:'7%'}} onSubmit = {formik.handleSubmit}>
            <div className="form-group">
                <label htmlFor='name'>Name</label>
                <input 
                id = 'name'
                name = 'name'
                value = {formik.values.name}
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}
                type="text" 
                className="form-control" 
                placeholder="Name" />
                {formik.touched.name && formik.errors.name ? <div style = {{color:'red'}}>{formik.errors.name}</div> : null}
            </div>

            <div className="form-group">
                <label  htmlFor='name'>Username</label>
                <input 
                id = 'username'
                name = 'username'
                value = {formik.values.username}
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}
                type="text" 
                className="form-control" 
                placeholder="Username" />
                {formik.touched.username &&formik.errors.username ? <div style = {{color:'red'}}>{formik.errors.username}</div> : null}
            </div>

            <div className="form-group">
                <label  htmlFor='name'>Stack</label>
                <input 
                name = 'stack'
                value = {formik.values.stack}
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}
                type="text" 
                className="form-control" 
                placeholder="Stack" />
                {formik.touched.stack &&formik.errors.stack ? <div style = {{color:'red'}}>{formik.errors.stack}</div> : null}
            </div>

            <div className="form-group">
                <label  htmlFor='name'>Address</label>
                <input
                name = 'address'
                value = {formik.values.address}
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}
                type="text" 
                className="form-control" 
                placeholder="Address" />
                {formik.touched.address && formik.errors.address ? <div style = {{color:'red'}}>{formik.errors.address}</div> : null}
            </div>

            <div className="form-group">
                <label  htmlFor='name'>Age</label>
                <input
                name = 'age'
                value = {formik.values.age}
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}
                type="number" 
                className="form-control" 
                placeholder="Age" />
                {formik.touched.age && formik.errors.age ? <div style = {{color:'red'}}>{formik.errors.age}</div> : null}
            </div>

            <div className="form-group">
                <label  htmlFor='name'>Phone</label>
                <input
                name = 'phone'
                value = {formik.values.phone}
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}
                type="number" 
                className="form-control" 
                placeholder="Phone" />
                {formik.touched.phone && formik.errors.phone ? <div style = {{color:'red'}}>{formik.errors.phone}</div> : null}
            </div>

            <div className="form-group">
                <label  htmlFor='name'>about</label>
                <textarea
                name = 'about'
                value = {formik.values.about}
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}
                className="form-control" 
                placeholder="about "> 
                {formik.touched.about && formik.errors.about ? <div style = {{color:'red'}}>{formik.errors.about}</div> : null}
                </textarea>
            </div>

            <div className="form-group">
                <label  htmlFor='email'>Email address</label>
                <input
                name = 'email'
                value = {formik.values.email}
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}
                type="email" 
                className="form-control" 
                placeholder="Enter email" />
                {formik.touched.email && formik.errors.email ? <div style = {{color:'red'}}>{formik.errors.email}</div> : null}
            </div>

            <div className="form-group">
                <label  htmlFor='password'>Password</label>
                <input
                name = 'password'
                value = {formik.values.password}
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}
                type="password" 
                className="form-control" 
                placeholder="Enter password" />
                {formik.touched.password && formik.errors.password ? <div style = {{color:'red'}}>{formik.errors.password}</div> : null}
            </div>
            <div className="form-group">
                <label  htmlFor='password2'>Confirm Password</label>
                <input
                name = 'password2'
                value = {formik.values.password2}
                onChange = {formik.handleChange}
                onBlur = {formik.handleBlur}
                type="password" 
                className="form-control" 
                placeholder="Confirm password" />
                {formik.touched.password2 && formik.errors.password2 ? <div style = {{color:'red'}}>{formik.errors.password2}</div> : null}
            </div>

            <button 
            style={{backgroundColor: 'rgb(255, 233, 110)'}}
            type="submit" 
            className="btn-lg">
            Sign Up
            </button>
           
            
        </form>
    </div>
    )}

export default SignUp



// import React, { Component } from "react";
// import {Link} from 'react-router-dom'
// import axios from 'axios'


// export default class SignUp extends Component {
//     constructor(props){
//         super(props)
//         this.changeHandler = this.changeHandler.bind(this)
//         this.submitHandler = this.submitHandler.bind(this)

//         this.state = {
//             name : '',
//             age  : '',
//             email : '',   
//             phone  : '',    
//             address : '',  
//             about : '',  
//             username  : '',
//             password : '',
//             password2 : '',
//             error: '' ,
//             stack: '',
            
//         }
//     }
//     changeHandler = (e) => {
//         this.setState({[e.target.name] : e.target.value})
//     }
//     submitHandler = e => {
//         e.preventDefault()
//         axios.post('http://127.0.0.1:8000/signup/', this.state)
//         .then(responce=> {console.log(responce)
//             if(responce.status===201){
//                 window.location = "/"
//             }else {
//                 window.location = "signUp"
//             }
//         })
       
//         .catch(error => {
//             this.setState({
//                 error : <p>Registration Failed</p>
//             })
//         })

//     }
    
  

//     render() {
     
       
//         const {stack, error, name, age, email, phone, address, about, username, password, password2} = this.state
        


//         return (
//             <div className='container container-fluid'>
                
//              <form style={{paddingTop:'7%'}} onSubmit = {this.submitHandler}>
//                 <h3>Sign Up</h3>

//                 <div className="form-group">
//                     <label>Name</label>
//                     <input 
//                     name = 'name'
//                     value = {name}
//                     onChange = {this.changeHandler}
//                     type="text" 
//                     className="form-control" 
//                     placeholder="Name" required/>
//                 </div>

//                 <div className="form-group">
//                     <label>Username</label>
//                     <input 
//                      name = 'username'
//                      value = {username}
//                      onChange = {this.changeHandler}
//                     type="text" 
//                     className="form-control" 
//                     placeholder="Last name" />
//                 </div>

//                 <div className="form-group">
//                     <label>Stack</label>
//                     <input 
//                      name = 'stack'
//                      value = {stack}
//                      onChange = {this.changeHandler}
//                     type="text" 
//                     className="form-control" 
//                     placeholder="Stack" />
//                 </div>

//                 <div className="form-group">
//                     <label>Address</label>
//                     <input
//                      name = 'address'
//                      value = {address}
//                      onChange = {this.changeHandler}
//                     type="text" 
//                     className="form-control" 
//                     placeholder="Address" />
//                 </div>

//                 <div className="form-group">
//                     <label>Age</label>
//                     <input
//                      name = 'age'
//                      value = {age} 
//                      onChange = {this.changeHandler}
//                     type="number" 
//                     className="form-control" 
//                     placeholder="Age" />
//                 </div>

//                 <div className="form-group">
//                     <label>Phone</label>
//                     <input
//                      name = 'phone'
//                      value = {phone}
//                      onChange = {this.changeHandler} 
//                     type="number" 
//                     className="form-control" 
//                     placeholder="Phone" />
//                 </div>

//                 <div className="form-group">
//                     <label>about</label>
//                     <textarea
//                      name = 'about'
//                      value = {about}
//                      onChange = {this.changeHandler} 
//                     className="form-control" 
//                     placeholder="about "> 
//                     </textarea>
//                 </div>

//                 <div className="form-group">
//                     <label>Email address</label>
//                     <input
//                      name = 'email'
//                      value = {email} 
//                      onChange = {this.changeHandler}
//                     type="email" 
//                     className="form-control" 
//                     placeholder="Enter email" />
//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input
//                      name = 'password'
//                      value = {password} 
//                      onChange = {this.changeHandler}
//                     type="password" 
//                     className="form-control" 
//                     placeholder="Enter password" />
//                 </div>
//                 <div className="form-group">
//                     <label>Confirm Password</label>
//                     <input
//                      name = 'password2'
//                      value = {password2} 
//                      onChange = {this.changeHandler}
//                     type="password" 
//                     className="form-control" 
//                     placeholder="Confirm password" />
//                 </div>

//                 <button 
//                 style={{backgroundColor: 'rgb(255, 233, 110)'}}
//                 type="submit" 
//                 className="btn btn-block">
//                 Sign Up
//                 </button>
//                 <h2>{error}</h2>

//                 <p className="forgot-password text-right">
//                     Already registered {<Link style={{textDecoration: 'none', color:'black'}} to='/signin'>Sign IN</Link>}
//                 </p>
//             </form>
//             </div>
//         );
//     }
// }
