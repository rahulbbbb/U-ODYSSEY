import styles from './SignUp.module.css';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import SignUpForm from '../SignUpForm/SignUpForm';
import { useNavigate } from "react-router-dom";



export default function SignUp() {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    setShowForm(true);
  };

  const handleLogin=()=>{
    navigate('/')
  }

  return (
    <>
    <div className={styles.page}>
      <div className={styles.logoBox}>
        
        <h2>Join Now</h2>

        <button>
          <FcGoogle size={25} />
          Sign up with Google
        </button>

        <button>
          <FaApple size={25} />
          Sign up with Apple
        </button>

        <hr />

        <span style={{ backgroundColor: "transparent" }}>or</span>

        {!showForm ? (
          <button
            style={{ background: 'black', color: 'white' }}
            onClick={handleCreateAccount}
          >
            Create account
          </button>
        ) : (
          <SignUpForm />
        )}

        <p className={styles.text}>
          By signing up, you agree to the <a style={{ color: 'lightblue' }}>Terms of Service</a> and{' '}
          <a style={{ color: 'skyblue' }}>Privacy Policy</a>, including{' '}
          <a style={{ color: 'skyblue' }}>Cookie Use</a>.
        </p>

        <p className={styles.lastLine}>
          Have an account already? <a style={{ color: 'skyblue', fontWeight:'700',fontSize:'15px' }} onClick={handleLogin}>Log in</a>
        </p>
      </div>
      </div>
    </>
  );
}
