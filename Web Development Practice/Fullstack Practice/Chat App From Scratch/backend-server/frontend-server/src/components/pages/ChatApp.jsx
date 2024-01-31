import Chats from "../snippets/Chats"
import styles from './ChatApp.module.css'
import Message from "../snippets/Message"
import MessageList from "../snippets/MessageList"
import { useState } from "react"

export default function ChatApp(){
    const [chatList, setChatList] = useState([]);

    function updateChatList(message){
        setChatList(currentChatList => [...currentChatList, message])
        console.log(chatList)
    }

    return(
        <>
        <main className={styles.main}>
            <Chats/>
            <Message updateChatListt={updateChatList}/>
            <MessageList chatList={chatList}/>
        </main>
        </>
    )
}