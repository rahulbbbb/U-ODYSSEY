import React, { useState } from 'react';
import styles from './SignUpForm.module.css';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {

  const Navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
  });
  const [errmsg, setErrmsg] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;    
    const passwordRegex = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/ ;
    const nameRegex = /^[a-zA-z]+([\s][a-zA-Z]+)*$/ ;
    const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
    const date = Date.now();

    if(!nameRegex.test(user.name)){
      setErrmsg({...errmsg, name: "Please enter a valid name"});
    }
    if(!emailRegex.test(user.email)){
      setErrmsg({...errmsg, email: "Please enter a valid email"});
    }
    if(!phoneRegex.test(user.phone)){
      setErrmsg({...errmsg, phone: "Please enter a valid phone number"});
    }
    if(!passwordRegex.test(user.password)){
      setErrmsg({...errmsg, password: "Please enter a valid password"});
    }
    if(user.dob < date){
      setErrmsg({...errmsg, dob: "Enter valid date of birth"});
    }
    else if (nameRegex.test(user.name) && emailRegex.test(user.email) && phoneRegex.test(user.phone) && passwordRegex.test(user.password) ){

      storedUsers.push(user);
    
      localStorage.setItem('users', JSON.stringify(storedUsers));
    
      setUser({
        name: '',
        email: '',
        phone: '',
        dob: '',
        password: '',
      });
      setErrmsg({
        name: '',
        email: '',
        phone: '',
        dob: '',
        password: '',
      });
      Navigate ('/');
    }
  };

  return (
    <form className={styles.logobox} onSubmit={handleSignUp}>
        <h1>Create your account</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        placeholder="Name"
        required
        className={styles.inputField}
      />
      <p>{errmsg.name}</p>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
        className={styles.inputField}
      />
      <p>{errmsg.email}</p>
      <input
        type="tel"
        name="phone"
        value={user.phone}
        onChange={handleInputChange}
        placeholder="Phone"
        required
        className={styles.inputField}
      />
      <p>{errmsg.phone}</p>
      <input
        type="date"
        name="dob"
        value={user.dob}
        onChange={handleInputChange}
        placeholder="Date of Birth"
        required
        className={styles.inputField}
      />
      <p>{errmsg.dob}</p>
      <input
      type="password"
      name="password"
      value={user.password}
      onChange={handleInputChange}
      placeholder='Create New Password'
      required
      className={styles.inputField}
      />
      <p>{errmsg.password}</p>

      <button  style={{ background: 'black', color: 'white' }} className={styles.submitButton} type="submit">
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;


