import styles from "../styles/FoodCard.module.css"
import Image from 'next/image'

const FoodCard = () => {
    return (
        <div className={styles.container}>
          <Image src="/img/Capture3.JPG" alt="" width="500" height="500"/>
          <h1 className={styles.title}>Fruit Salad</h1>
          <span className={styles.price}>#2000</span>
          <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. 
          </p>
        </div>
    )
}

export default FoodCard