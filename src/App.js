import { ChatEngine } from "react-chat-engine";   

import LoginForm from "./components/LoginForm"
import ChatFeed from "./components/ChatFeed";


import "./App.css"   


const App = ()=> {    
        if(!localStorage.getItem("username")) return <LoginForm />



    return (

            <ChatEngine  
                height="100vh"
                projectID = "b84ec7d7-09ba-4ad4-9f85-83ec52731410"
                userName=  {localStorage.getItem("username")} 
                userSecret= {localStorage.getItem("password")}
                renderChatFeed= {(chatAppProps)=> <ChatFeed {...chatAppProps} />


                }      
            
            />




    )

}  

export default App;