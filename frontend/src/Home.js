import "./home.css"
import React from "react";
import Topbar from "./components/Topbar";
import Chat from "./components/chat/chat";
import Message from "./components/message/message";
import ChatOnline from "./components/chatOnline/chatOnline";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
 import { useAuth0} from "@auth0/auth0-react";
import Profile from "./components/Profile";





export default function Messenger(){
  const [chats, setChat] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef();
  const socket = useRef();
  const {user, isLoading} = useAuth0();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);


  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((pre) => [...pre, arrivalMessage]);
  }, [arrivalMessage, currentChat]);


  useEffect(() => {
    socket.current?.emit("addUser", user?._id);
    socket.current?.on("getUsers", (users) => {
      setOnlineUsers(
        user?.data.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);

  useEffect(() => {
    const getChat = async () => {
      try {
        const res = await axios.get("conversation/" + user.sub.slice(6));
        setChat(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getChat();
  }, [user]);

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/message/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post("/message", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  if(isLoading){
    return <div>Loading...</div>
}


    return(

        <>
         <Topbar />
        <div className = "home">
            <div className = "chatMenu">
                <div className = "chatMenuWrapper">
                    <div className = "chatMenuInput">
                      <Profile/>
                    </div>
                 {chats.map((c)=>(
                   <div onClick={()=>setCurrentChat(c)}>
                   <Chat chat={c} currentUser = {user}/>
                   </div>
                 ))}    
           </div>
            </div>
            <div className = "chatBox">
            <div className = "chatBoxWrapper">
             {
               currentChat ? (
             <>
                <div  className = "chatBoxTop">
                {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                   
                </div>
                <div  className = "chatBoxBottom">
                <textarea
                    className="chatMessageInput"
                    placeholder="send message..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton"  onClick={handleSubmit}>
                    Send
                  </button>
            </div>
            </> ):( <span  className="noConversationText">Click to open a message.</span> )} 
            </div>

            </div>
            <div className = "chatBlocked">
            <div className = "chatBlockedwrapper">
                <p>Blocked Chat</p>
                <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user?._id}
              setCurrentChat={setCurrentChat}
            />
          
            </div>

            </div>
        </div>
        </>

    );
}