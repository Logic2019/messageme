import "./chat.css"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Chat({ chat, currentUser }) {
    
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const friendId = chat?.members.find((m)=> m !==currentUser._id );
  
      const getUser = async () => {
        try {
          const res = await axios("/users?userId=" + friendId);
          setUser(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getUser();
    }, [currentUser, chat]);

    return(
       <div className = " chat">
           <img  className = " chatImg" src = "https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500  " alt = ""/>
            <span  className = " chatName" > {user?.username}</span>
       </div>
    );
}