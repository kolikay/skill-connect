import React from 'react';

const HomepageDetail = () => {
    return ( 
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    <h4 style={{paddingTop:'50px', 
                    color:'rgb(226, 197, 29)',
                    fontSize: '20px',
                    lineHeight: '26px',
                    fontWeight: '900',
                    letterSpacing: '0px',
                    fontFamily: 'cursive',}}
                    > Our Specification</h4>

                    <h2>Programming</h2>
                    <p>Computer programming is the process of designing and building 
                        an executable computer program to accomplish a specific computing result. 
                        Programming involves tasks such as: analysis, generating algorithms, 
                        profiling algorithms' accuracy and resource consumption, and the 
                        implementation of algorithms in a chosen programming language 
                        (commonly referred to as coding).</p>
                </div>
                <div className='col-sm-12 col-md-3 ' style={{paddingTop:'100px', paddingRight:'50px'}}>
                <i className="fa fa-desktop" aria-hidden="true" style={{color:'rgb(226, 197, 29)', fontSize:'40px'}}></i>
                    <h4 > Web App Development</h4>
                    <p>A web developer or programmer is someone who takes a web design – 
                        which has been created by either a client or a design team – 
                        and turns it into a website. They do this by writing lines and 
                        lines of complicated code, using a variety of languages.</p>
                </div>
                <div className='col-sm-12 col-md-3' style={{paddingTop:'100px'}}>
                <i className="fa fa-database"style={{color:'rgb(226, 197, 29)', fontSize:'40px'}}></i>
                    <h4 >Mobile App Development</h4>
                    <p>Mobile app development is the act or process by which a mobile app 
                        is developed for mobile devices, such as personal digital assistants, 
                        enterprise digital assistants or mobile phones. ... The user is often 
                        the focus of interaction with their device, and the interface entails 
                        components of both hardware and software.</p>
                    
                </div>

            </div>

           

            
            <div className='row'>
                <div className='col-sm-6   col-lg-6'>
                    <img style={{height:'150px', width:'150px', position:'center center', backgroundSize:'cover'}}
                    src='https://i.imgur.com/N2Rk4fR.png' 
                    alt='icon'
                    />
                    <h2>About Us</h2>
                    <p>Every developer, either web, mobile , devops etc generally requires a portfolio to showcase their
                        project, skills and details but due to huge time and work required to come up with each personal portfolio
                        many developers doesnt have a portfolio, out website tries to change that. Our site helps developers created
                        personal portfolios but just  registering and filing up the required datas. After registration, a link is generated
                        for each developer which can be submitted to prospectibve client and employers to access thier pages.
                    </p>
                    <p>Our website tries to help developers all over the world showcase thier work to potential client or 
                        or employers without having to build thier personal portfolio them self.
                    </p>

                </div>
                <div className='col-sm-6 dev-pix  col-lg-6'>
                    {/* dev image*/}


                </div>

            </div>

           
        </div>
     );
}
 
export default HomepageDetail;