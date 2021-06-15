const MyMessage = ({message}) => {  

    if (message.attachments && message.attachments.length > 0)  
        return (
            <img 
                src={message.attachments[0].file}
                alt="message-attachment"   
                className="message-image" 
                style={{float:"right"}}
            />  

            
        )

    
    return (
            <div className="message" style={{float:"right", marginRight: "18px", color:"white" , backgroundColor:"teal" , borderRadius: "10px 10px 0px 10px " }}>
                {message.text}
            </div>



    )



}   


export default  MyMessage;