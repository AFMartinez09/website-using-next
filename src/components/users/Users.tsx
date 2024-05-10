import styles from './Users.module.css';

const getData = async ( userId: any) => {
const response  = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
if(!response.ok){
  throw new Error('Error fetching data')
}

return response.json()
}

const Users = async({ userId }:any) => {
  const user = await getData(userId)
  
  return (
    <div className={styles.container}>
      <div className={styles.tag}>
        <span className={styles.title}>Author   </span>
        <span className={styles.author}>{user.username}</span>
      </div>
      <div className={styles.tag}>
        <span className={styles.title}>Published   </span>
        <span className={styles.detailValue}>10/04/2024</span>
      </div>
      <div className={styles.tag}>
        <span className={styles.title}>Category   </span>
        <span className={styles.topic}>Personal Finance</span>
      </div>
    </div>
  )
}

export default Users