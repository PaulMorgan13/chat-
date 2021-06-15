import {useState} from "react";   
import axios from "axios" 
import logo from  "../components/img/chat.svg"



const LoginForm = () => {


        
        const [username, setUserName] = useState("");  
        const [password, setPassword] = useState("");   
        const [error, setError] = useState(""); 
        


        const handleSubmit  = async (e)=>{  
            e.preventDefault();     

            const authObject = { 
                    "Project-ID":"b84ec7d7-09ba-4ad4-9f85-83ec52731410", 
                    "User-Name":username, 
                    "User-Secret":password 
                }  



                try {  

                   await  axios.get("https://api.chatengine.io/chats",{headers: authObject})
                    

                   localStorage.setItem("username", username);
                   localStorage.setItem("password", password);  

                   window.location.reload()
;
                } catch (error) {
                        setError("woah wrong username or password")




                }
  


        }

        return (

            <div className="wrapper">  
                <div className="form"> 
                    <h1 className="title"> 
                            <img src={logo} alt="logo"   width="200px"/>
                    </h1>   

                    <form onSubmit={handleSubmit}>   

                        <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)}  className="input"     placeholder="username"   required/> 
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  className="input"     placeholder="password"   required/> 


                        <div align="center">   
                            <button type="submit" className="button"> 
                                <span>
                                    Start Chatting     
                                </span>

                            </button>

                        </div>
                        <h2 className="error">
                            {error}
                        </h2>
                    </form>


                </div>

            </div>



        );



}   


export default LoginForm;