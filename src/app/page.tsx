import Image from "next/image";
import styles from './home.module.css';
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
      <Image src='/home.png' alt='' fill className={styles.logo}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Ground</h1>
        <p className={styles.description}>
        In Ground you could growth your skills in different areas such as:
        </p>
        <div className={styles.list}>
        <li>Personal Finance</li>
        <li>Motivational Self-Help</li>
        <li>Assertive communication</li>
        </div>
        <div>
          <Link href='/blog' >
            <button className={styles.btn}>Learn More</button>
            <button className={styles.btn}>Register me</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
