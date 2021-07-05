import "./home.css"
import React from "react";
import Topbar from "./components/Topbar";
import Chat from "./components/chat/chat";
import Message from "./components/message/message";
import ChatOnline from "./components/chatOnline/chatOnline";



export default function Messenger(){

    return(

        <>
         <Topbar />
        <div className = "home">
            <div className = "chatMenu">
                <div className = "chatMenuWrapper">
                    <p className = "chatMenuInput">Email</p>
                    <ChatOnline/>
                    <ChatOnline/>
                    <ChatOnline/>
                    <ChatOnline/>
                    <ChatOnline/>
                    
                </div>
            </div>
            <div className = "chatBox">
            <div className = "chatBoxWrapper">
                <div  className = "chatBoxTop">
                    <Message/>
                   
                    <Message  own = {true}/>
                    <Message  own = {true}/>
                    <Message  own = {true}/>
                    <Message  own = {true}/>
                    <Message/>
                    <Message/>
                    <Message/>
                   
                    <Message/>
                    <Message/>
                   
                    <Message/>
                </div>
                <div  className = "chatBoxBottom">
                <textarea
                    className="chatMessageInput"
                    placeholder="send message..."
                  ></textarea>

                  <button className="chatSubmitButton" >
                    Send
                  </button>

            </div>
            </div>

            </div>
            <div className = "chatBlocked">
            <div className = "chatBlockedWrapper">
                <p>Blocked Chat</p>
            <Chat/>
            <Chat/>
            <Chat/>
            </div>

            </div>
        </div>


        </>

    );
}