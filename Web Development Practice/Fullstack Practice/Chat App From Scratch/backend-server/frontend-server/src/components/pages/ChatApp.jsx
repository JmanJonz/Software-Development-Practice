import Chats from "../snippets/Chats"
import styles from './ChatApp.module.css'
import Message from "../snippets/Message"
import MessageList from "../snippets/MessageList"

export default function ChatApp(){
    return(
        <>
        <main className={styles.main}>
            <Chats/>
            <Message/>
            <MessageList/>
        </main>
        </>
    )
}