import React, { useState, useEffect } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase-config';
import { Pub } from '../../components/pub';
import { Form } from '../../components/form';
export const Crawl = () => {
  const [user, setUser] = useState(null);
    const signOutUser = async() => {
        await signOut(auth);
        window.location.href = '/';
    }
    useEffect(() => {
      onAuthStateChanged(auth, (u) => {
        if(u) {
          const userObj = {
            name : auth._currentUser?.displayName,
            email : auth._currentUser?.email,
          }
          setUser(userObj);
        } else {
          window.location.href = '/';
        }
      });
    }, []);

  return (
    <div>
        <button
            onClick={signOutUser}
        >Sign Out</button>
        <h1>Welcome {user?.name}</h1>
        <Form />
        <Pub />
    </div>
  );
};