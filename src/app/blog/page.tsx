import Cards from '@/components/cards/Cards';
import styles from './blog.module.css';

const getData = async () => {
  // we use cache for data is constantly changing (no-store will do that path slower 
  // becuase it will need to rendering again, but if your data changing 1 day per week 
  // you don't need to use it)
    const response  = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'})
    if(!response.ok){
      throw new Error('Error fetching data')
    }
    
    return response.json()
  }

  
const BlogPage = async () => {
  const posts = await getData()
  
  return (
    <div className={styles.container}>
      {posts.map((post: any) => (
      <div className={styles.post} key={post.id}>
        <Cards post={post}/>
      </div>

      ))}
    </div>
  )
}

export default BlogPage