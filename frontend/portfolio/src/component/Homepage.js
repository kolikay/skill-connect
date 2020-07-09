import React, { Component } from 'react';
import HomepageDetail from './HomepageDetails';






class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
                    <div className='homepage' >
                    
                        <div className='container-fluid'>
                            <div className='row'>
                                    <div className='col-12'>
                                        <h2>Welcome to our page</h2>
                                        <h4>A Webpage that showcases devolopers portfolios </h4>
                                        <div className='btn btn-lg btn-secondary'>Read More > </div>
                                    </div>
                                </div>
                            </div>
                    
                    </div>
                <HomepageDetail />   
                </div>
                
               
        );
    }
}
 
export default HomePage;