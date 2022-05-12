import React from "react";
import {LANGUAGES_ARRAY, DEFAULT_MAIL} from '../utils/constants';
import axios from 'axios';


const handleMessageSend = async (e) => {
    const button = e.target;
    const language = button.value;
    const senderName = document.getElementById('senderName').value;
    const receiverMail = document.getElementById('receiverMail').value;
    const messageContent = document.getElementById('messageContent').value;

    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/messages/foreign`,
            {
                language,
                senderName,
                senderMail: DEFAULT_MAIL,
                receiverMail,
                messageContent
            });

            console.log(response)

            if(response){
                alert(`\n Mail sent:\n ${response.data.translationData.translatedText}`);
            }
    }
    catch (error) {
        alert('Something went wrong');
        console.log(error);
    }
}

function MessagesSubmit(){
    return(

        <div id="MessagesSubmit">
            <h2 className="text-2xl font-bold mb-4">Submit a test result for a pacient:</h2>
            
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="senderName">
                            Doctor name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="senderName" type="text" placeholder="Manuela Visan" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="receiverMail">
                            Pacient mail
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="receiverMail" type="text" placeholder="visanmanuela@mail.com" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="messageContent">
                            The test result
                        </label>
                        <textarea
                            rows={4}
                            name="comment"
                            id="messageContent"
                            className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-800 rounded-md p-5"
                            placeholder={'Please introduce here the result for your pacient'} />
                    </div>
                </div>
            </form>
            
            {LANGUAGES_ARRAY.map((language, index) => {
                return (
                    <button
                        key={index}
                        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 capitalize"
                        value={language}
                        onClick={handleMessageSend}>
                        {language.toLowerCase()}
                    </button>
                )
            })}

        </div>
    );
}

export default MessagesSubmit;