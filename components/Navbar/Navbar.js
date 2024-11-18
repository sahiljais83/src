// custom context hook
import { useAuthValue } from "../../authContext";
import { useProductContext } from "../../productContext";
import styles from "../Navbar/Navbar.module.css";
import { Outlet, NavLink } from "react-router-dom";

// Navbar Component
export default function Navbar() {
  // user's login status
  const { isLoggedIn, signOut } = useAuthValue();
  const { itemInCart } = useProductContext();
  return (
    <>
      {/* main container */}
      <div className={styles.navbarContainer}>
        {/* app heading */}
        <div className={styles.appName}>
          <NavLink to="/">
            {/* logo of the app */}
            <i class="fa-solid fa-store"></i>
            Buy Busy I
          </NavLink>
        </div>

        {/* all the navigation link */}
        <div className={styles.navLinks}>
          <NavLink to="/">
            <span>
              <i class="fa-solid fa-house"></i>
              Home
            </span>
          </NavLink>

          {/* myorder link shown when user is logged in */}
          {isLoggedIn && (
            <NavLink to="/myorder">
              <span>
                Orders
              </span>
            </NavLink>
          )}

          {/* cart link show when user is logged in */}
          {isLoggedIn && (
            <NavLink to="/cart">
              <span>
                <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                <sup>
                  <strong>{itemInCart}</strong>
                </sup>
              </span>
            </NavLink>
          )}

          {/* for signIN and signOut */}
          <NavLink to={!isLoggedIn ? "/signin" : "/"}>
            <span>
              {!isLoggedIn ? (
                <>
                  <i class="fa-solid fa-right-to-bracket"></i>
                  SignIn
                </>
              ) : (
                <>
                  <span onClick={signOut}>Logout</span>
                </>
              )}
            </span>
          </NavLink>
        </div>
      </div>
      {/* render child pages */}
      <Outlet />
    </>
  );
}
