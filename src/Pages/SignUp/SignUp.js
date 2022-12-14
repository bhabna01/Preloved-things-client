import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
// import useToken from "../../Hooks/useToken";
import SocialLogin from "../SocialLogin/SocialLogin";
const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState("");
    const [createdUserEmail, setCreatedUserEmail] = useState("");
    const [userImg, setUserImg] = useState("");
    // const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    // if (token) {
    //     navigate('/');
    // }
    const handleSignUp = (data) => {

        setSignUPError("");


        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast("User Created Successfully.");
                handleUpdateUserProfile(data.name, userImg);
                const person = {
                    name: data.name,
                    email: data.email,
                    role: data.role,
                };
                saveUser(person);



            })
            .catch((error) => {
                console.log(error);
                setSignUPError(error.message);
            });
    };
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUser(profile)
            .then(() => {

            })
            .catch((error) => console.error(error));
    };
    const saveUser = (user) => {
        fetch("https://preloved-things-server.vercel.app/users", {
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
        <div className="h-[800px] flex justify-center items-center">
            <div className="w-100 p-7">
                <h2 className="text-xl text-center">Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            {" "}
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", {
                                required: "Name is Required",
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.name && (
                            <p className="text-red-500">{errors.name.message}</p>
                        )}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            {" "}
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is Required",
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.email && (
                            <p className="text-red-500">{errors.email.message}</p>
                        )}
                    </div>
                    <div className="form-control w-full max-w-xs my-5">
                        <label className="label">
                            {" "}
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be 6 characters long",
                                },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                    message:
                                        "Password must have uppercase, number and special characters",
                                },
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.password && (
                            <p className="text-red-500">{errors.password.message}</p>
                        )}

                        <select
                            {...register("role")}
                            className="select select-bordered w-full max-w-xs mt-3"
                            defaultValue={"buyer"}
                        >
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>

                    <input
                        className="btn btn-accent w-full mt-4"
                        value="Sign Up"
                        type="submit"
                    />
                    {signUpError && <p className="text-red-600">{signUpError}</p>}
                </form>
                <p>
                    Already have an account{" "}
                    <Link className="text-primary" to="/login">
                        Please Login
                    </Link>
                </p>
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
                {/* <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button> */}
            </div>
        </div>
    );
};

export default Signup;