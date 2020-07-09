import React from "react"
import {Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl'

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return( <div className='row'>
                        <div className='col'>
                            
                                {/* React Project 1 */}
                                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                    <CardTitle style= 
                                    {{color:'#fff', height:'176px', background: 'url(https://i.imgur.com/0jQQ6SU.png) center / cover'}}>My Portfolio</CardTitle>
                                    <CardText>This project is a simple portfolio website, which showcases everything about me and ways to contact me</CardText>
                                    <CardActions border>
                                    < Button colored a href='https://github.com/kolikay/my_portfolio' target="_blank">GitHub</Button>
                                    </CardActions>
                                    <CardMenu style={{color: '#fff'}}>
                                    <IconButton name='share'/>
                                    </CardMenu>

                                </Card>
                            
                        </div>
                    </div>
            
           
                )
        }else if (this.state.activeTab === 1){
            return(


                <div className="row">
                    <div className='col'>
                        {/* Python Project 1 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style= 
                        {{color:'grey', height:'176px', background: `url(https://i.imgur.com/PB6Sqgn.png) center / cover`}}>CGPA Calculator</CardTitle>
                            <CardText> This is a simple CGPA calculator, made with python that help student calculate thier CGPA easily. click the link about to view the code base on github</CardText>
                            <CardActions border>
                            < Button colored a href='https://github.com/kolikay/CGPA-Calculator' target="_blank">GitHub</Button>
                                
                            </CardActions>
                            <CardMenu style={{color: 'grey'}}>
                            <IconButton name='share'/>
                            </CardMenu>

                            </Card>
                    </div>
                    <div className='col'>    

                        {/* python Project 2 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style= 
                        {{color:'grey', height:'176px', background: `url(https://i.imgur.com/PB6Sqgn.png) center / cover`}}>Todo App</CardTitle>
                        <CardText>  Application for helping user arrange thiers to do items accordingly, click the link below to view the git repository</CardText>
                        <CardActions border>
                        < Button colored a href='https://github.com/kolikay/todoapp' target="_blank">GitHub</Button>
                        
                        </CardActions>
                        <CardMenu style={{color: 'grey'}}>
                        <IconButton name='share'/>
                            </CardMenu>

                            </Card>
                    </div>
              
                </div>


            )
        }else if (this.state.activeTab === 2){
            return( <div className='row'> 
                        <div className='col'>
                            
                            {/* Django Project 1 */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style= 
                            {{color:'white', height:'176px', background: `url(https://i.imgur.com/FrZMBdy.png) center / cover`}}>Django Rest API</CardTitle>
                                <CardText> A project based on django rest Api</CardText>
                                <CardActions border>
                                < Button colored a href='https://github.com/kolikay/profiles-rest-api' target="_blank">GitHub</Button>
                                
                                </CardActions>
                                <CardMenu style={{color: 'white'}}>
                                <IconButton name='share'/>
                                </CardMenu>

                            </Card>
                        </div> 
                        <div className='col'>  

                            {/* Django Project 2 */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style= 
                            {{color:'white', height:'176px', background: `url(https://i.imgur.com/FrZMBdy.png) center / cover`}}>Books Sales Website</CardTitle>
                            <CardText> A booksales website made with django, that allows authors of book places thiers books online for sales</CardText>
                            <CardActions border>
                                    < Button colored a href='https://github.com/kolikay/book_sales_website' target="_blank">GitHub</Button>
                    
                            </CardActions>
                            <CardMenu style={{color: 'white'}}>
                            <IconButton name='share'/>
                            </CardMenu>

                            </Card>
                        </div>
                        <div className='col'>
                            

                            {/* Django Project 3 */} 
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style= 
                                {{color:'white', height:'176px', background: `url(https://i.imgur.com/FrZMBdy.png) center / cover`}}>Personal Blog</CardTitle>
                                <CardText>A personal blog project, wherre only admin can share post. registered users can only comment and submit posts to admin </CardText>
                                <CardActions border>
                                < Button colored a href='https://github.com/kolikay/Personal-Blog-Project' target="_blank">GitHub</Button>
            
                                </CardActions>
                                <CardMenu style={{color: 'white'}}>
                                <IconButton name='share'/>
                            </CardMenu>

                            </Card>
                            
                        </div>     
                    </div>



            )
        }else if (this.state.activeTab === 3){
            return(


                <div className="row">
                    <div className='col'>
                        {/* angular Project 1 */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style= 
                        {{color:'grey', height:'176px', background: `url(https://i.imgur.com/OCa9rk7.png) center / cover`}}>Scrumy App</CardTitle>
                            <CardText> This is like a todo App, it manaes users entries. users sets weeks goals, which is monitored by the quality assurace and moved to verified and done column </CardText>
                            <CardActions border>
                            < Button colored a href='https://github.com/kolikay/scrum-master' target="_blank">GitHub</Button>
                            
                            </CardActions>
                            <CardMenu style={{color: 'grey'}}>
                            <IconButton name='share'/>
                            </CardMenu>

                        </Card>
                    </div>
                 
                </div>
            )
        }
        
    }
    render() {
        return (
            <div className="category-tab">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    
                    <Tab>React</Tab>
                    <Tab>Python</Tab>
                    <Tab>Django</Tab>
                    <Tab>Angular</Tab>
                </Tabs>
               
                    <Grid >
                        <Cell col={12}>
                            <div className="content"> {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                        
               
            </div>    
        );
    }
}
export default Project