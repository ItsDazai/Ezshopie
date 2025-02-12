import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-container">
      <h2>Login</h2>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
};

export default Login;
