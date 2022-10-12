import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import Card from './Card'
const SitesName = ({ data }) => {
const [index, setIndex] = useState(0);

console.log(data);
  return (
    <div>
      <div className={styles.slideContainer}>
          {data?.map((data, i) => (
          <button className={styles.slideText} key={i} onClick={() => setIndex(i)}> {data.site.name}</button>
          ))}
      </div>
      <div>
        {data &&
          <Card  links={data[index].links}/>
      }
        
      </div>
    </div>

  )
}

export default SitesName