import React from 'react';
import {Link } from 'react-router-dom'

const Protected =()=>{
    return( <div >
        <h4 style={{padding:'15%', textAlign:'center'}}>Please<Link to='/signin'> Sign In</Link>  or  <Link to='/signup'>Register</Link> to continue</h4>

        </div>
    )
}

export default Protected