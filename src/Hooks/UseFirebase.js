import React, { useState } from 'react';
import { GoogleAuthProvider,getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import auth from '../Firebase/Firebase';

const UseFirebase = () => {
    const [user,setUser] = useState({});
    // google sign in
    const googleSignIn =()=>{
        const auth = getAuth();
        const googleprovider = new GoogleAuthProvider();
        signInWithPopup(auth, googleprovider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            setUser(user);
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            });
        }
    // github sign in
    const githubSignIn =()=>{
            const auth = getAuth();
            const githubprovider = new GithubAuthProvider();
            signInWithPopup(auth, githubprovider)
            .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
                const user = result.user;
                setUser(user)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GithubAuthProvider.credentialFromError(error);
            });
        }
    return {user,setUser,googleSignIn,githubSignIn}
};

export default UseFirebase;