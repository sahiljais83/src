import { useRef } from "react";
import {useNavigate} from "react-router-dom";
import styles from "./SignIn/SignIn.module.css"
//using custom Hook
import { useAuthValue } from "../authContext";
export function SignUp(){
    //ref variables
    const nameRef=useRef();
    const emailRef=useRef();
    const paswordRef=useRef();

    //navigate variable
    const navigate=useNavigate();

    //function for creating user
    const {createUser}=useAuthValue();

    //handle form submit
    function handleSubmit(e){
        e.preventDefault();
        //create new user with firebase auth and then create a doc in firestore
        const data={
            name:nameRef.current.value,
            email:emailRef.current.value ,  
            password:paswordRef.current.value
        }

        //creating user
        createUser(data);
         // if user created redirect to corresponding page
        navigate("/signin")

    }
    return(
    <>
    <div className={styles.container}>
        <div className={styles.inputForm}>
            {/* heading */}
            <h1>Sign Up</h1>
            {/* signup form to get user's data */}
            <form onSubmit={handleSubmit}>
            {/* user's name */}
            <input type="text"
            placeholder="Name"
            required
            ref={nameRef}/>
            {/* user's mail id  */}
            <input type="text"
            placeholder="Enter Email"
            required
            ref={emailRef}/>
            {/* user's passowrd*/}
            <input type="text"
            placeholder="Password"
            required
            ref={paswordRef}/>
            <button>Submit</button>
            </form> 
        </div>
    </div>
    </>
    );
}