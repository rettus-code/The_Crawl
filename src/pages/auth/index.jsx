import { auth, provider } from '../../config/firebase-config';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
export const Auth = () => {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if(user) {
            window.location.href = '/Crawl';
          }
        });
      }, []);
    const signInWithGoogle = async() => {
        const result = await signInWithPopup(auth, provider);
        window.location.href = '/Crawl';
    };
  return (
    <div className='login-page'>
      <h3>Sign In With Google</h3>
        <button
            onClick={signInWithGoogle}
        >Sign In</button>
    </div>
  );
};