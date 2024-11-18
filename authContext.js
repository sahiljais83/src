import { createContext, useContext, useEffect, useState } from "react";
// firebase database
import { db } from "./firebaseInit";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//create context API for authentication
const authContext = createContext();

//create customHook to return values
export function useAuthValue() {
  const value = useContext(authContext);
  return value;
}

//custom context provider
export function AuthContext({ children }) {
  const [userList, setUserList] = useState([]);
  // loggedIn user's status
  const [isLoggedIn, setLoggedIn] = useState(false);
  // user who is logged in
  const [userLoggedIn, setUserLoggedIn] = useState(null);

  // getting all the users from data base on first render of page
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "buybusy1"), (snapshot) => {
      const users = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setUserList(users);
    });
  }, [isLoggedIn]);

  //creating new user
  async function createUser(data) {
    try {
      //check whether user present or not first
      const index = userList.findIndex((user) => user.email === data.email);
      //if found display notification
      if (index !== -1) {
        toast.error("Email already exist!! Try again.");
        return;
      }
      //if not found then create new user
      const docRef = await addDoc(collection(db, "buybusy1"), {
        name: data.name,
        email: data.email,
        password: data.password,
        cart: [],
        orders: [],
      });
      toast.success("User created successfully! login to continue.");
    } catch (err) {
      console.log("Error is", err);
    }
  }

  //SignIn user
  async function signIn(data) {
    // finding user in database
    const index = userList.findIndex((user) => user.email === data.email);

    // if user not found show notification
    if (index === -1) {
      toast.error("Email does not exist, Try again or SignUp Instead!!!");
      return false;
    }
    // if email found in database then match password
    if (userList[index].password === data.password) {
      toast.success("Sign In Successfully!!!");
      // logging in user and storing its data in local variable
      setLoggedIn(true);
      setUserLoggedIn(userList[index]);
      // generating user's login token and store user's data
      window.localStorage.setItem("token", true);
      window.localStorage.setItem("index", JSON.stringify(userList[index]));
      return true;
    } else {
      // if password doesn't match in database
      toast.error("Wrong UserName/Password, Try Again");
      return false;
    }
  }

  //signout function
  function signOut() {
    //remove token and user's data
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("index");
    setLoggedIn(false);
    setUserLoggedIn(null);
    toast.success("Logged out successfully");
  }

  return (
    <authContext.Provider
      value={{
        createUser,
        signOut,
        signIn,
        isLoggedIn,
        setLoggedIn,
        userLoggedIn,
        setUserLoggedIn,
      }}
    >
      <ToastContainer />
      {children}
    </authContext.Provider>
  );
}
