import styles from './messageList.module.css'

export default function MessageList({chatList}){
    return(
        <>
        <main className={styles.main}>
            <ul>
                {chatList.map((message)=>{
                    return <li key={Date.now}>{message.message}</li>
                })}
            </ul>
        </main>
        </>
    )
}