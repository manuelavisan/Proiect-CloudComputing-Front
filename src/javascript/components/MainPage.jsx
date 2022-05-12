import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MessagesList from "./MessagesList";
import MessagesSubmit from "./MessagesSubmit";

function MainPage(props){

    const currentDate = new Date(); 
    const datetime = "Today's date: " + currentDate.getDate() + "/"
                + (currentDate.getMonth()+1)  + "/" 
                + currentDate.getFullYear() 
    return(
        <div id="MainPage">
            <Header title={"Covid test results: mails to pacients and translation in different languages 📧"}></Header>
            <h1 className='mt-10 text-blue-600 text-2xl font-bold'>Please note that Ukrainian refugees can be tested free of charge at any center. #supportUkraine </h1>
            <h2 className='text-yellow-500 text-s font-bold'>{datetime}</h2>
            <div className="flex max-w-7xl m-auto px-14 py-14">
                <div className="w-1/2 pl-5 pr-5">
                    <MessagesSubmit></MessagesSubmit>
                </div>
                <div className="w-1/2 pr-5 pl-5">
                    <MessagesList></MessagesList>
                </div>
            </div>
            <Footer title={"We are in this together - and we will get through this together! ❤️"}></Footer>
        </div>
    );
}

export default MainPage;