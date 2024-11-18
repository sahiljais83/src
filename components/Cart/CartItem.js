// custom context hook for values (product)
import { useProductContext } from "../../productContext";
import oldStyles from "../../styles/Home.module.css";
import styles from "../../components/Cart/CartItem.module.css";

// render single cart item
export default function CartItem(props) {
  // product data from props
  const { name, image, price, category, quantity } = props.product;

  // required functions from custom hook (product)
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useProductContext();

  return (
    <>
      {/* item card container */}
      <div className={oldStyles.cardContainer}>
        <div className={styles.imageContainer}>
          <img src={image} alt={category} />
        </div>
        {/* description of the product name,price, add button */}
        <div className={styles.itemInfo}>
            <div className={styles.namePrice}>{name}</div>
            <div className={styles.priceQuant}>
            <div className={styles.price}>₹{price}</div>
            <div className={styles.quantity}>
              {/* to decrease product quantity */}
              <span className={styles.minus}>
                <i
                  class="fa-solid fa-circle-minus"
                  onClick={() => decreaseQuantity(props.product)}
                ></i>
              </span>
              {/* show quantity selected*/}
              &nbsp; {quantity} &nbsp;
              {/* increase product quantity */}
              <span className={styles.plus}>
                <i
                  class="fa-solid fa-circle-plus"
                  onClick={() => increaseQuantity(props.product)}
                ></i>
              </span>
            </div>
          </div>

          {/* remove from cart button */}
          <div className={styles.btnContainer}>
            <button
              className={styles.removeBtn}
              onClick={() => removeFromCart(props.product)}
            >
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
