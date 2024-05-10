import Image from 'next/image';
import styles from './singleBlog.module.css';
import Users from '@/components/users/Users';
import { Suspense } from 'react';

const getData = async (slug: any) => {
    const response  = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    if(!response.ok){
      throw new Error('Error fetching data')
    }
    
    return response.json()
  }

const singleBlogPage = async({ params }:any ) => {
  // slug comes from params
    const {slug} = params;

    const post = await getData(slug)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='https://images.unsplash.com/photo-1656049471454-ff3c59812741?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxwZXJzb25hbCUyMGZpbmFuY2V8ZW58MHx8MHx8fDA%3D'
          alt='finances' 
          fill
          className={styles.image}
          />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image src='https://images.unsplash.com/photo-1711843250836-5d3869042f3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D' 
            alt='finances' 
            width={50}
            height={50}
            className={styles.avatar}
            />
            {/* we use it when we need to get two kind of data (get post and get user(author)) 
              sometimes the data will comes late (one of them) so we use suspense to show the 
              user a loader and they will see the data
            */}
            <Suspense fallback={<div> Loading... </div>}>
              <Users userId = {post.userId}/>
            </Suspense>
        </div>
        <div className={styles.infoContainer}>
          {post.body}
        </div>
      </div>
    </div>
  )
}

export default singleBlogPage