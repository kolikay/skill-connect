import React from 'react';


const Footer = () => {
    return ( <div className='container-fluid'>

    
        <div className='row' style={{backgroundColor:'black', 
                                 color:'rgb(226, 197, 29)',
                                 paddingTop:'70px',
                                 paddingLeft:'20px',
                                 }}>
                <div className='col-sm-12 col-md-6 col-lg-3'>
                    <i className="fa fa-address-book" aria-hidden="true" style={{fontSize:'30px'}}></i>
                    <h5 style={{marginTop:'10px', marginBottom:'10px'}}>Address</h5>
                    <p style={{color:'white'}}>No 9, Usman balogun street, adeson-ile epo street, igando akensan</p>
                </div> 
                
                <div className='col-sm-12 col-md-6 col-lg-3' >
                <i className="fa fa-envelope-o" aria-hidden="true" style={{fontSize:'30px'}}></i>
                    <h5 style={{marginTop:'10px', marginBottom:'10px'}}>Email</h5>
                    <p style={{color:'white'}}>kolikay1989@gmail.com</p>
                </div> 
                
                <div className=' col-sm-12 col-md-6 col-lg-3' >
                <i className="fa fa-phone-square" aria-hidden="true" style={{fontSize:'30px'}}></i>
                    <h5 style={{marginTop:'10px', marginBottom:'10px'}}>Call Us</h5>
                    <p style={{color:'white'}}>08062842978</p>
                </div> 
                
                <div className='col-sm-12 col-md-6 col-lg-3' >
                    <h5 style={{marginTop:'10px', marginBottom:'10px'}}>Social media</h5>
                    <p>
                        <i style={{paddingRight:'30px', fontSize:'30px'}} className="fa fa-facebook-square" aria-hidden="true"></i>
                        <i style={{paddingRight:'30px', fontSize:'30px'}} className="fa fa-twitter-square" aria-hidden="true"></i>
                        <i style={{paddingRight:'30px', fontSize:'30px'}} className="fa fa-google" aria-hidden="true"></i>
                    
                    </p>
                </div>

            </div>
        </div>
     );
}
 
export default Footer;


