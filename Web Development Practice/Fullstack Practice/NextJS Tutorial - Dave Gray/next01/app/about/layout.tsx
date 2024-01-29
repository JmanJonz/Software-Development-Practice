import styles from './about.module.css';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'About Pages'
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <>
        <nav>About NavBar</nav>
        <main className={styles.main}>
            {children}
        </main>
        </>
    )
}