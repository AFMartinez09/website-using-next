import Image from "next/image"
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>About Ground</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Harum sequi commodi esse labore eaque at rem ex molestias iure, 
          eos, illum veniam odio ullam maiores suscipit. Incidunt ipsum neque veniam!
        </p>
        <br/>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Harum sequi commodi esse labore eaque at rem ex molestias iure, 
          eos, illum veniam odio ullam maiores suscipit. Incidunt ipsum neque veniam!
        </p>
        <br/>
        <br/>
        <br/>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Harum sequi commodi esse labore eaque at rem ex molestias iure, 
          eos, illum veniam odio ullam maiores suscipit. Incidunt ipsum neque veniam!
        </p>
      </div>
      <div className={styles.imageContainer}>
      <Image src='/aboutUs.png'  alt="" fill/>
      </div>
    </div>
  )
}

export default AboutPage





