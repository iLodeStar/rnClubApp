import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import Login from "./login";
import Home from './home';
import SignUp from './signup';

function AuthCheck(props) {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [signingin, setSigningin] = useState(false);
    const [signingup, setSigningup] = useState(false);

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    function logout() {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }

    function login(email, authCode) {
        auth().signInWithEmailAndPassword(email, authCode)
            .then((userCredential) => {
                // Signed in
                setUser(userCredential.user);
                setSigningin(false);
                setSigningup(false);
            })
            .catch((error) => {
                if (error.code === 'auth/user-disabled') {
                    alert('User account is disabled')
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    alert('Email address is invalid')
                }

                if( error.code === 'auth/user-not-found'){
                    alert('Invalid Email address');
                }

                if( error.code === 'auth/wrong-password'){
                    alert('Incorrect Password');
                }
            });

    }

    function registerUser(email, authCode) {
        auth()
            .createUserWithEmailAndPassword(email, authCode)
            .then(() => {
                console.log('User account created & signed in!');
                setSigningin(false);
                setSigningup(false);
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                    alert('Email address is already in use')
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    alert('Email address is invalid')
                }

                if( error.code === 'auth/weak-password'){
                    alert('Weak authentication password, please use strong password');
                }

                console.error(error);
            });
    }

    function signup() {
        setSigningin(false);
        setSigningup(true);
    }

    function signin() {
        setSigningin(true);
        setSigningup(false);
    }

    if (initializing) return null;
    if (signingup) return (<SignUp navigation={props.navigation} signin={signin} registerUser={registerUser} />)
    if (signingin) return <Login navigation={props.navigation} signup={signup} login={login} />
        if (!user) {
            return (
                <Login navigation={props.navigation} signup={signup} login={login} />
            );
        }

    return (
        <Home navigation={props.navigation} user={user} logout={logout} />
    );
}

export default AuthCheck;