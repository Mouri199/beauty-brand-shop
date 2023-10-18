import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../AuthContributor/AuthContibutor";
import Swal from "sweetalert2";


const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthProvider)
    const registerNavi = useNavigate()


    const [signError, setSignError] = useState();
    const [signSuccess, setSignSuccess] = useState();




    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setSignError(" ");
        setSignSuccess(" ");

        if (password.length < 6) {
            setSignError(" Password should be at least 6 characters ")
            return;
        } else if (!/[A-Z]/.test(password)) {
            setSignError('you should use one uppercase character.')
            return;
        } else if (!/[!@#$%^&*]/.test(password))
            setSignError('you should a special character')


        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                setSignSuccess("User Created successfully!")
                e.target.reset()
                registerNavi('/');
                Swal.fire({
                    icon: "success",
                    title: "Sign In Successful",
                    text: "You have successfully signed in!",
                });
            })
            .catch(error => {
                console.error(error);
                setSignError(error.message);
                Swal.fire({
                    icon: "error",
                    title: "Sign In Failed",
                    text: "An error occurred during sign in. Please try again.",
                });

            })
    }

    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                registerNavi('/');
                Swal.fire({
                    icon: "success",
                    title: "Sign In Successful",
                    text: "You have successfully signed in!",
                });
            })

            .then(error => {
                console.error(error);
                Swal.fire({
                    icon: "error",
                    title: "Sign In Failed",
                    text: "An error occurred during sign in. Please try again.",
                })


            })
    }



    return (
        <div>

            <div className="bg-[#a5c7b5] lg:h-[600px] py-28 lg:w-[600px] mx-auto px-28">
                <form onSubmit={handleLogin}>
                    <div>
                        <p className="lg:text-3xl text-xl font-semibold text-[#3b644c] mb-3">Email</p>
                        <input type="email" name="email" placeholder="Enter your email" className="border lg:p-3 p-2 lg:w-[400px] w-[250px]" />
                    </div>

                    <div>
                        <p className="lg:text-3xl text-xl font-semibold text-[#3b644c] mb-3">Password</p>
                        <input type="password" name="password" placeholder="Enter your password" className="border lg:p-3 p-2  w-[250px] lg:w-[400px]" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover lg:text-xl font-semibold text-[#3b644c]">Forgot password?</a>
                        </label>
                    </div>

                    <div className="mt-6">
                        <button className="btn-sm ml-0 lg:ml-[150px] rounded-lg mx-12 bg-[#3b644c] text-white">Sign In</button>
                    </div>
                    <div className="lg:text-xl text-sm mt-3  font-semibold text-[#3b644c]">
                        <p>
                            Dont have an account? Please <Link to='/register' className="hover:underline ">Register</Link>

                        </p>
                    </div>
                    <div className="mt-4">
                        <button onClick={handleGoogle} className="btn-sm w-[150px] ml-0 lg:ml-[110px] rounded-lg mx-12 bg-[#3b644c] text-white">Login With Google</button>
                    </div>

                </form>

                {
                    signError && <p className="mx-8 text-red-600">{signError}</p>
                }
                {
                    signSuccess && <p className="mx-8 text-green-600">{signSuccess}</p>
                }


            </div>

        </div>
    );
};

export default Login;