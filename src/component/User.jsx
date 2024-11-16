import { useState } from "react";

const User = ()=>{
    const [count]=useState(0);
    return (
        <div className="user-card">
            <h3>Count: {count}</h3>
            <h2>Name: Akshay</h2>
            <h3>Location : Dehradun</h3>
            <h4>contact : @akshaymarch</h4>
        </div>
    )
}

export default User;