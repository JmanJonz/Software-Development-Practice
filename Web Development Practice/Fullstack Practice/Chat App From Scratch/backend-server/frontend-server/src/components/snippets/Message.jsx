import styles from './message.module.css';
import {io} from 'socket.io-client'
import { useEffect, useState } from 'react';

export default function Message({updateChatListt}){
    const []

    // only run when when the component first renders not on any other updates
    // emply array as second argument to hook is what makes this function only render
    // on initial mount
        useEffect(()=>{
            const socket = io('http://localhost:4321');
            socket.on('connect', ()=>{
                updateChatListt({message: 'You connected to websocket'})
            })    

        }, []);

    function formSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const message = formData.get('message');
        updateChatListt({'message': message})
        socket.emit('newMessage', {message})
    }
    return(
        <>
        <main className={styles.main}>
            <form onSubmit={formSubmit} className='formMSG'>
                <label>
                    <input name='message' className={`${styles.input} ${styles.inputOnly}`} placeholder='Type Your Message Here' type="text" />
                </label>
                <button className={` sendMessage ${styles.input} ${styles.button}`} type='submit'>Send</button>
            </form>
            <form onSubmit={formSubmit} className='formRoom'>
                <label>
                    <input className={`${styles.input} ${styles.inputOnly}`} placeholder='Type Your ChatRoom Here' type="text" />
                </label>
                <button className={`${styles.input} ${styles.button}`} type='submit'>Enter</button>
            </form>
        </main>
        </>
    )
}