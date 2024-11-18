import { Link } from "react-router-dom";
// custom context hook for value (product)
import { useProductContext } from "../../productContext"
import OrderDetail from "../../components/Orders/OrderDetail";
import styles from "../MyOrder/MyOrder.module.css";

// render my order page
export default function MyOrder() {
  // getting all order's from custom context hook
  const { myorders } = useProductContext();

  return (
    <>
        {/* main page container */}
        <div className={styles.mainContainer}>
          {/* page heading */}
          <h1 className={styles.orderHeading}>My Orders</h1>
          {/* to show message if no order in list */}
          {myorders.length === 0 ? (
            <>
              {/* message of no order */}
              <h1>You haven't placed any order yet !!</h1>
              {/* link to redirect to home page */}
              <Link to="/">!!! Start Shopping !!!</Link>
            </>
          ) : (
            // if contains order than render them one by one
            // order list container
            <div className={styles.orderListContainer}>
              {myorders.map((order, i) => (
                <OrderDetail key={i} order={order} />
              ))}
            </div>
          )}
        </div>
      
    </>
  );
}
