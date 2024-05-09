// import React, { useEffect, useState } from 'react';
//  import { jwtDecode } from 'jwt-decode';
// function SignInButton({ onSignIn }) {
//     useEffect(() => {
//       google.accounts.id.initialize({
//         client_id: "985158382898-q8kokm2o7jre9i7592gvmkn5n709b5gk.apps.googleusercontent.com",
//         callback: onSignIn
//       });
  
//       google.accounts.id.renderButton(document.getElementById('signInDiv'), {
//         theme: 'outline',
//         size: 'large'
//       });
//     }, [onSignIn]);
  
//     return (
//       <div id="signInDiv" className="signInButton"></div>
//     );
//   }

//   export default SignInButton;



import React, { useEffect } from 'react';

function SignInButton({ onSignIn }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.google && window.google.accounts && window.google.accounts.id) {
        window.google.accounts.id.initialize({
          client_id: "985158382898-q8kokm2o7jre9i7592gvmkn5n709b5gk.apps.googleusercontent.com",
          callback: onSignIn
        });

        window.google.accounts.id.renderButton(document.getElementById('signInDiv'), {
          theme: 'outline',
          size: 'large'
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [onSignIn]);

  return (
    <div id="signInDiv" className="signInButton"></div>
  );
}

export default SignInButton;
