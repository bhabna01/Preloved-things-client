import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthProvider';

const SocialLogin = () => {
    const [createdUserEmail, setCreatedUserEmail] = useState("");
    const googleProvider = new GoogleAuthProvider();

    const { providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogleSIgnIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL,
                    role: "buyers",
                };
                saveUser(userInfo);
                console.log(user);
                navigate('/')
            })
            .catch(err => console.error(err));
    }
    const saveUser = (user) => {
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                setCreatedUserEmail(data.email);
                console.log(data);
                navigate("/");
            });
    };
    return (
        <div className="btn btn-outline w-full">

            <p className='text-center'>
                <button onClick={handleGoogleSIgnIn} className='btn btn-ghost'>Continue with Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;