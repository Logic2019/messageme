import "./chat.css"
import axios from "axios";
import { useEffect, useState } from "react";



export default function Chat({ chat, currentUser }) {
    
    const [user ,setUser] = useState(null);
  
    useEffect(() => {
      const friendId = chat.members.find((c)=> c !==currentUser._id);
  
      const getUser = async () => {
        try {
          const res = await axios("/user?userId="+friendId );
         setUser(res.data)
        } catch (err) {
          console.log(err);
        }
      };
      getUser();
    }, [currentUser, chat]);

    return(
       <div className = " chat">
           <img  className = " chatImg" src = {user?.picture}   alt = ""/>
            <span  className = " chatName" >{user?.username}</span>
       </div>
    );
}