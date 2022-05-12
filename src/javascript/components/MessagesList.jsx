import axios from "axios";
import React, {useState, useEffect} from "react";

// const messages = [
//     {
//         entryID: 1,
//         senderName: 'John Doe',
//         receiverMail: 'john@mail.com',
//         messageContent: 'Your test is pos',
//     },
//     {
//         entryID: 2,
//         senderName: 'John Doe',
//         receiverMail: 'john@mail.com',
//         messageContent: 'Your test is negative',
//     },
//     {
//         entryID: 3,
//         senderName: 'John Doe',
//         receiverMail: 'john@mail.com',
//         messageContent: 'Your test is positive',
//     }
// ];

function MessagesList(){

    const [messages, setMessages] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/messages`);
            //const result = await axios.get(`http://localhost:8080/messages`);

            if(result.data.messages){
                let messagesArray = result.data.messages;
                messagesArray.reverse();
                setMessages(messagesArray);
            }
        };

        fetchData();
    }, []);

    return(
        <div id="MessagesList">
            <h2 className="text-2xl font-bold mb-4">Recent test results communicated to pacients:</h2>
           <ul>
                {
                    messages.length ? messages.map(message => 
                        <li key={message.entryID}>
                            <p>
                                <span className="text-bold">
                                    {message.senderName}
                                </span>
                                <span className="text-gray-600">
                                    {` sent the test result to ${message.receiverMail}: ${message.messageContent}`}
                                </span>
                            </p>
                        </li>
                    )
                    : <li>No test results yet.</li>
                }
           </ul>
            
        </div>
    );
}

export default MessagesList;