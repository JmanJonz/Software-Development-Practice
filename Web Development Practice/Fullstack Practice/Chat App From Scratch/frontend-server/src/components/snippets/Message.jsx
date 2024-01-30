import styles from './message.module.css';

const input = document.querySelector('input');
const button = document.querySelector('button');
const form = document.querySelector('form');

// // send message button is clicked
//     form.addEventListener("submit", (e)=>{
//         e.preventDefault();
//         input.value = '';
//     })

export default function Message(){
    return(
        <>
        <main className={styles.main}>
            <form>
                <label>
                    <input className={`${styles.input} ${styles.inputOnly}`} placeholder='Type Your Message Here' type="text" />
                </label>
                <button className={`${styles.input} ${styles.button}`} type='submit'>Send</button>
            </form>
            <form>
                <label>
                    <input className={`${styles.input} ${styles.inputOnly}`} placeholder='Type Your ChatRoom Here' type="text" />
                </label>
                <button className={`${styles.input} ${styles.button}`} type='submit'>Enter</button>
            </form>
        </main>
        </>
    )
}