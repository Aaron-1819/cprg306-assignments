"use client"

import { useUserAuth } from "./_utils/auth-context";

export default function Page(){
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    function handleSignIn(){
        gitHubSignIn();
    };
    function handleSignOut(){
        firebaseSignOut();
    };
 
    return (
        <div >
          <h1>Week 8 assignment</h1>
          <p>Use Firebase Authentication in a Next.js app</p>
          {!user && <button onClick={handleSignIn}>Sign In with GitHub</button>}
          {user && (
            <div>
              <p>
                Welcome, {user.displayName} ({user.email})
              </p>
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          )}
        </div>
      );
}