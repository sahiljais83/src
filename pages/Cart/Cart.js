import { useNavigate } from "react-router-dom";
// custom context hook for values from product and authentication
import { useProductContext } from "../../productContext";
import { useAuthValue } from "../../authContext";
import CartItem from "../../components/Cart/CartItem";
import firstStyles from "../../styles/Home.module.css";
import secondStyles from "../../pages/Cart/Cart.module.css";
import { toast } from "react-toastify";

// render the cart page
export default function Cart() {
  // to navigate to some page
  const navigate = useNavigate();

  // data for product from custom hook (product)
  const { cart, total, clearCart, purchaseAll, itemInCart } =
    useProductContext();

  // data of user from custom hook (authentication)
  const { userLoggedIn } = useAuthValue();

  // purchase button handler
  function handlePurchase() {
    // if cart empty return
    if (itemInCart === 0) {
      toast.error("Nothing to purchase in Cart!!");
      return;
    }
    // purchase function
    purchaseAll();
    // show notification
    toast.success("Your order has been Placed!!!");
    // navigate to myorder page when order placed
    navigate("/myorder");
  }
  return (
    <>
      {/* rendering all the products within the user's cart */}
      <div className={firstStyles.itemContainer}>
        {/* if cart is empty  */}
        {cart.length === 0 ? (
          // render this msg
          <h1>Nothing in Your Cart !!!</h1>
        ) : (
          // else render all the product's one  by one
          cart.map((product, i) => <CartItem key={i} product={product} />)
        )}
      </div>

      {/* main container of the page  to show quantity placed in the cart */}
      <div className={secondStyles.mainContainer}>
        {/* header within the page to show cart details */}
        <div className={secondStyles.header}>
          <div className={secondStyles.userInfo}>
            <h3>Your Cart has:</h3>
          </div>

          {/* cart detail and purchase button */}
          <div className={secondStyles.cartDetail}>
            <div>
              {/* items within the cart */}
              Item: {itemInCart}
              <br />
              {/* button to empty cart */}
              <button className={secondStyles.removeAll} onClick={clearCart}>
                Remove All
              </button>
            </div>

            <div>
              {/* total amount of all the products within the cart */}
              Total Amount: ₹{total}
              <br />
              {/* button to purchase product form cart */}
              <button
                className={secondStyles.purchaseAll}
                onClick={handlePurchase}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
