import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Link href='/'>Ground</Link>
      </div>
      <div className={styles.text}>
        Copytrigth ©2024 Ground has reserved
      </div>

    </div>
  )
}

export default Footer