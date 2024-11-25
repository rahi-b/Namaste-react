import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(){
      super();
        console.log('Parent cunstroctor')
    }
  componentDidMount(){
    console.log('parent did mount');
  }
    render(){
        console.log('parent render');
        return(
            <div>
            <h1>About page</h1>
            <h3>This is about section</h3>
    
            <UserClass />
            </div>
        )
    }
  
}

export default About;