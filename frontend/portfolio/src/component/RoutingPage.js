import React from 'react'
import { Route , Switch } from 'react-router-dom';
import Homepage from './Homepage'  
import SignIn from './SignIn'
import SignUp from './SignUp'
import Test from './Test'
import Project from './Projects'
import Profile from './Profile'
import Users from './Users'
import UserDetails from './UserDetails';
import Authenticated from './Authenticated';
import Protected from './Protected'







const RoutingPage = () => {
  
 
    return(
    
            <Switch>
                <Route exact path ="/" component={Homepage}/>
                <Route path ="/signup" component={SignUp} />
                <Route path ="/signin" component={SignIn} />
                <Route path ="/test" component={Test} />
                <Route exact path ="/auth" component={Protected} />
                <Authenticated>
                <Route exact path ="/project" component={Project}/>
                <Route exact path ="/users" component={Users} />
                <Route path = '/users/:id' component={UserDetails}/>
                <Route  exact path ="/profile/:name" component={Profile} />
                </Authenticated>
                 
            
            </Switch>
      
    )}

export default RoutingPage