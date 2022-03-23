import Image from 'next/image'
import { useState } from "react"
import styles from '../../styles/Product.module.css'

const Product = () => {
   const [size, setSize] = useState(0)

    const food = {
        id: 1,
        img: "/img/Capture5.JPG",
        name: "FISH BARBEQUE",
        price: [2000, 3500, 5000],
        desc: "The best fish barbeque you could ever eat"
    };
    return (
        <div className={styles.container}>
          <div className={styles.left}>
           <div className={styles.imgContainer}>
             <Image src={food.img} layout="fill" alt=""/>
           </div>
          </div>
          <div className={styles.right}>
          <h1 className={styles.title}>{food.name}</h1>
          <span className={styles.price}>#{food.price[size]}</span>
          <p className={styles.desc}>{food.desc}</p>
          <h3 className={styles.choose}> Choose plate size </h3>
          <div className={styles.sizes}>
          <div className={styles.size} onClick={()=> setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt=""/>
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={()=> setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt=""/>
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={()=> setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt=""/>
            <span className={styles.number}>Large</span>
          </div>
          </div>
          <h3 className={styles.choose}>Choose additional ingredients</h3>
          <div className={styles.ingredients}>
             <div className={styles.options}>
               <input 
               type="checkbox" 
               id='sauce' 
               name="sauce"
                className={styles.checkbox}
                />
                <label htmlFor='sauce'>Spicy Sauce</label>
             </div>
             <div className={styles.options}>
             <input 
             type="checkbox" 
             id='ketchup' 
             name="ketchup"
              className={styles.checkbox}
              />
              <label htmlFor='ketchup'>Ketchup</label>
           </div>
           <div className={styles.options}>
           <input 
           type="checkbox" 
           id='prinkle' 
           name="prinkle"
            className={styles.checkbox}
            />
            <label htmlFor='prinkle'>Prinkle spicy</label>
         </div>
          </div>
          <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity}/>
          <button className={styles.button}>Add to Cart</button>
          </div>
          </div>
        </div>
    )
}

 export default Product