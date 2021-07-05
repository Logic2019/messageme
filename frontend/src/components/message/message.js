import  "./message.css";

export default function Message({own}) {
    return(
        <div className = {own ? "message own" : Message}>
            <div className = "messageTop">
           <img  className = " messageImg" src = "https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt = ""/>
            <p  className = "messageText">Hello Razor Grip</p>
            </div>
            <div className = "messageBottom">
                i hour ago
            </div>
        
        </div>
    )
}