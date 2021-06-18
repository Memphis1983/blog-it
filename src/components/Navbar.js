import { Avatar } from "@material-ui/core";
import  React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectSignedIn, selectUserData, setInput } from "../features/userSlice";

 

const Navbar = () => {
    const [input, setInput] = useState("tech")
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);


    return (
        <div className="navbar">
            <h1 className="navbar__header">Blog It 🖊</h1>
        {isSignedIn && (
            <div className="blog__search"> 
            <input 
                type="text" 
                placeholder="Search for a blog" 
                value="inputValue" 
                onChange={(e) => setInputValue(e.target.value)} 
                className="search" 
            /> 
            <button className="submit" onClick={handleClick}>Search</button>
            </div> 
            )}
        
        {isSignedIn ? 
            <div className="navbar__user__data">
                <Avatar src={userData?.imageUrl} alt={userData?.name}/>
            </div> : ""}
        </div>
    )
}

export 

default Navbar
