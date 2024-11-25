import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:'dummy',
                location:'hyderabad',
            }
            
        }
        console.log('child constructor');
    }
     async componentDidMount(){

        const data=await fetch('https://api.github.com/users/rahi-b');
        const json= await data.json();

        this.setState({
            userInfo:json,
        })

        console.log(json);

        console.log('child didMount');
    }

    componentDidUpdate(){
        // console.log('component didupdate');
    }

    componentWillUnmount(){
        // console.log('component willunmount');
    }
    render(){
        const {name,location,avatar_url}=this.state.userInfo;
        console.log('child render');
        return(
            <div className="user-card">
            
            <img src={avatar_url} />
            <h2>Name: {name}</h2>
            <h3>Location :{location}</h3>
            <h4>contact : 8086158928</h4>
        </div>
        )
    }
}

export default UserClass;