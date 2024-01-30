import styles from './message.module.css';

export default function Message(){
    function formSubmit(e){
        e.preventDefault();
    }
    return(
        <>
        <main className={styles.main}>
            <form onSubmit={formSubmit} className='formMSG'>
                <label>
                    <input className={`${styles.input} ${styles.inputOnly}`} placeholder='Type Your Message Here' type="text" />
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