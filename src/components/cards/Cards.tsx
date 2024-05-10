import Image from 'next/image';
import styles from './Cards.module.css';
import Link from 'next/link';

const Cards = ({post}: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image src='https://images.unsplash.com/photo-1711730131609-6a5cb68e6d59?q=80&w=1153&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  
          alt="" 
          fill
          className={styles.img}
          />
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}> {post.body} </p>
          <Link href={`/blog/${post.id}`}>READ MORE</Link>
        </div>
      </div>
    </div>
  )
}

export default Cards