import { useRef } from "react";
import {useNavigate,NavLink} from "react-router-dom";
import styles from "../SignIn/SignIn.module.css";
//using custom Hook
import { useAuthValue } from "../../authContext";
export default function SignIn(){
    //ref variables
    const emailRef=useRef();
    const passwordRef=useRef();
    //navigate variable
    const navigate=useNavigate();

    //signIn function
    const {signIn}=useAuthValue();

    //handle form submit
    async function handleSubmit(e){
        e.preventDefault();
        // storing user's data
        const data={
            email:emailRef.current.value,
            password:passwordRef.current.value
        }
       // sign in user
       const status=await signIn(data);
       // if user signed in redirect to corresponding page
       {status?navigate("/"):navigate("/signin")};  
    }
    return(
    <>
    <div className={styles.container}>
        <div className={styles.inputForm}>
            {/* heading */}
            <h1>Sign In</h1>
            {/* signup form to get user's data */}
            <form onSubmit={handleSubmit}>
            
            {/* user's mail id  */}
            <input type="text"
            placeholder="Enter Email"
            required
            ref={emailRef}/>
            {/* user's passowrd*/}
            <input type="text"
            placeholder="Password"
            required
            ref={passwordRef}/>
            <button>Submit</button>
            <br/>
            {/* link for signup page */}
            <NavLink to="/signup">
                    Create New Account
           </NavLink>
            </form> 
        </div>
    </div>

    </>
    );
}