import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const User = () => {
  const [userinfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  const name = useSelector(state => state.auth.name);
  const email = useSelector(state => state.auth.email);

  useEffect(() => {
    // Fetch user info based on the user's name here if needed
    console.log("hello");
  }, []);

  return (
    <>
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
    </>
  );
};

export default User;
