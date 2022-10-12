import Link from 'next/link';
import  styles from '../styles/Home.module.css'
import React, {  useEffect } from "react";
import { CountProvider, useCount } from "../context";

const Card = ({ links  }) => {
    const { increment, count, decrement } = useCount();

    if(increment){
        window.scrollTo(0,0)
    }
console.log(count);
return(
    <div className={styles.mainContainer}>
        {links?.map((link, i) => (
            <div className={styles.cardContainer} key={i}>
                <div>
                    <Link href={link.url}>
                        <img className={styles.cardImage}   src={link.image} loading='lazy'/>
                    </Link>
                </div>
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}> {link.title} </h2>
                        <h3> Time : {link.duration} </h3>         
                </div>
           </div>
        ))}
        <div className={styles.buttons}>
            <button onClick={decrement} className={styles.prev}>
                prev
            </button>
            <button onClick={increment} className={styles.next}>
                Next
            </button>
        </div>

    </div>
  )
}
Card.provider = CountProvider;
export default Card