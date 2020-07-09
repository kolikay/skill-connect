import React, { Component} from 'react';
import axios from 'axios';
import '../App.css';



class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading : false,
            posts : [],
            error : '',
           
         }
    }

    
    componentDidMount() {
        this.setState({loading : true})
        axios.get('http://127.0.0.1:8000/users/')
        .then( responce => {console.log(responce.data)
        this.setState({ 
            loading : false,
            posts: responce.data})
        
        
        })
        .catch(error => {console.log(error)
        this.setState({error : <h4>server timed out while loading</h4>})
        })
        }
        

    render() { 
        const { posts, loading, error} = this.state
        const text = loading && !error ? <p>Please wait while file is loaded from the server.......</p>: null
        
        return (
             <div>
             <h3>{text}</h3>
             {posts ? posts.map(post => <ul key={post.id}><b>username</b> {  post.username}  <b>fullname</b> {  post.name} {post.title} </ul>):null}
             <p>{error}</p>
             </div>);
    }
}
 
export default Homepage ;