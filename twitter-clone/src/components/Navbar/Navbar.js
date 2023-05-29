import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.subcontainer}>
            <div className={styles.text}>
              <p className={styles.text1}>
               Don’t miss what’s happening
              </p>
              <p className={styles.text2}> People on Twitter are the first to know.</p>
            </div>
     

            <div>
              <button className={styles.btn1}>Log in</button>
              <button className={styles.btn2}>Sign up</button>
            </div>
        </div>
       

    </div>
  )
}

export default Navbar;