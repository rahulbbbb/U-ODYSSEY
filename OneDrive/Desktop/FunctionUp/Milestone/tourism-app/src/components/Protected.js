import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn); 

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
