import Image from 'next/image'
import styles from '../styles/Cart.module.css'

const Cart = () => {
    return (
        <div className={styles.container}>
         <div className={styles.left}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                 <Image 
                 src="/img/food1.JPG" 
                 objectFit="cover" 
                 layout="fill" 
                 alt=""/>
                </div>
              </td>
              <td>
              <span className={styles.name}>Fried Rice</span>
              </td>
              <td>
              <span className={styles.extras}>
                Chicken, Turkey, Beef
              </span>
              </td>
              <td>
              <span className={styles.price}>#2000</span>
              </td>
              <td>
              <span className={styles.quantity}>2</span>
              </td>
              <td>
              <span className={styles.total}>#4000</span>
              </td>
            </tr>
          </table>
         </div>
         <div className={styles.right}>
           <div className={styles.wrapper}>
           <h2 className={styles.title}>CART TOTAL</h2>
           <div className={styles.totalText}>
           <b className={styles.totalTextTitle}>Subtotal:</b>#4000.00
         </div>
         <div className={styles.totalText}>
           <b className={styles.totalTextTitle}>Discount:</b>#0.00
         </div>
         <div className={styles.totalText}>
           <b className={styles.totalTextTitle}>Total:</b>#4000.00
         </div>
         <button className={styles.button}>CHECKOUT NOW!</button>
           </div>
         </div>
        </div>
    )
}
 
 export default Cart;