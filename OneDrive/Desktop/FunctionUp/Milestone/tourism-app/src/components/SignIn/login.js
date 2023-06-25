import { useEffect } from "react";
import styles from "./login.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "./Redux/LoginSlice";
import { useSelector } from 'react-redux';

export default function Login() {
  let userArr = JSON.parse(localStorage.getItem("users"));

  const Dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    userArr.map(function (elem) {
      let userEmail = document.getElementById("email").value;
      let userPass = document.getElementById("pass").value;

      if (elem.email === userEmail && elem.password === userPass) {
        alert("Login Successfull");
        Dispatch(userLogin(true));
        navigate("/home");
      } else if (elem.pass !== userPass || elem.email !== userEmail) {
        alert("Invalid Email OR Password");
      }
    });
  }


  const isLoggedIn = useSelector((state) => state.login.isLoggedIn); 
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home');
    }
  }, [isLoggedIn, navigate]);


function handleRegister(){
  navigate('./signup')
}



  return (
    <>
    <div className={styles.page}>
      <div className={styles.logo_box}>
        
        

        <h1 style={{ marginBottom: "35px",marginTop: "15px" ,fontWeight:"600" }}>Sign in to U-ODYSSEY</h1>
        <button className={styles.btn}>
          <FcGoogle size={19} style={{ marginRight: "5px" }} />
          Sign up with Google
        </button>

        <button className={styles.btn}>
          <FaApple size={19} style={{ marginRight: "5px" }} />
          Sign up with Apple
        </button>
        <hr></hr>
        <span style={{ backgroundColor: "transparent" }}>or</span>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="email"
            id="email"
            placeholder="Email"
            required
          />
          <br />
          <input
            className={styles.input}
            type="password"
            id="pass"
            placeholder="Password"
            required
          />
          

          <Link
          to="/forgotPass"
          className={styles.next_btn}
          
        >
          Forgot Password?
        </Link>
          <input className={styles.input_submit} type="submit" id="login" />
        </form>

       

        <p className={styles.last_line}>
          Don't Have an account ?{" "}
          <button onClick={handleRegister} style={{ color: "darkblue", borderRadius:'8px',backgroundColor:'lightblue', width:'120px' }}>
            Register now
          </button>
        </p>
      </div>
      </div>
    </>
  );
}