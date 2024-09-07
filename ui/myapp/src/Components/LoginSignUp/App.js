// AuthPage.js
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

function AuthPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    
    const handleLogin = (status) => {
        setIsLoggedIn(status);
    };

    const handleSignup = (status) => {
        setIsLoggedIn(status);
    };

    const toggleAuth = () => {
        setIsSignup(!isSignup);
    };

    return (
        <div>
            {!isLoggedIn ? (
                isSignup ? (
                    <div>
                        <Signup onSignup={handleSignup} />
                        <p>Already have an account? <button onClick={toggleAuth}>Login</button></p>
                    </div>
                ) : (
                    <div>
                        <Login onLogin={handleLogin} />
                        <p>Don't have an account? <button onClick={toggleAuth}>Sign Up</button></p>
                    </div>
                )
            ) : (
                <div>
                    <h2>Welcome!</h2>
                    <p>You are logged in.</p>
                </div>
            )}
        </div>
    );
}

export default AuthPage;
