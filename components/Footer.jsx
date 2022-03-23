import styles from "../styles/Footer.module.css"
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
          <div className={styles.item}>
            <Image src="/img/bg.png" objectFit="cover" layout="fill" alt=""/>
          </div>
          <div className={styles.item}>
            <div className={styles.card}>
              <h2 className={styles.motto}>
                  Nicely cooked food, great taste at Manna. 
              </h2>
            </div>
            <div className={styles.card}>
              <h1 className={styles.title}>
                 FIND OUR RESTURANT
              </h1>
              <p className={styles.text}>
                  Abuja
                  <br /> (302) 777-1013 
              </p>
            </div>
            <div className={styles.card}>
              <h1 className={styles.title}>WORKING HOURS</h1>
               <p className={styles.text}>
                   MONDAY - FRIDAY
                   <br /> 9.00am - 7.00pm
               </p>
               <p className={styles.text}>
                   SATURDAY - SUNDAY
                   <br /> 12.00pm - 8.00pm
               </p>
            </div>
          </div>
        </div>
    )
}

export default Footer