
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../AuthContributor/AuthContibutor";
import Swal from "sweetalert2";



const Register = () => {
    const { createRegister, signInWithGoogle } = useContext(AuthProvider);
    const registerNavi = useNavigate()

    const [userError, setUserError] = useState();
    const [userSuccess, setUserSuccess] = useState();

    const handleRegi = e => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.name.value;

        console.log(email, password, name, photo);

        setUserError(" ");
        setUserSuccess(" ");

        if (password.length < 6) {
            setUserError(" Password should be at least 6 characters ")
            return;
        } else if (!/[A-Z]/.test(password)) {
            setUserError('you should use one uppercase character.')
            return;
        } else if (!/[!@#$%^&*]/.test(password))
            setUserError('you should a special character')

        createRegister(email, password)
            .then(result => {
                console.log(result.user);
                setUserSuccess("User Created successfully!")
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
                setUserError(error.message);
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

            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: "success",
                    title: "Sign In Successful",
                    text: "You have successfully signed in!",
                });
              


            })
    }
    return (
        <div>

            <div className="bg-[#a5c7b5] lg:h-[750px] py-28 lg:w-[600px] mx-auto px-28">
                <form onSubmit={handleRegi}>
                    <div>
                        <p className="lg:text-3xl text-xl font-semibold text-[#3b644c] mb-3">Email</p>
                        <input type="email" name="email" placeholder="Enter your email" className="border lg:p-3 p-2 lg:w-[400px] w-[250px]"  />
                    </div>
                    <div>
                        <p className="lg:text-3xl text-xl font-semibold text-[#3b644c] mb-3">Your Name</p>
                        <input type="name" name="name" placeholder="Enter your name" className="border lg:p-3 p-2 lg:w-[400px] w-[250px]" />
                    </div>
                    <div>
                        <p className="lg:text-3xl text-xl font-semibold text-[#3b644c] mb-3">Photo Url</p>
                        <input type="text" name="photo" placeholder="Enter photo URL" className="border lg:p-3 p-2 lg:w-[400px] w-[250px]" />
                    </div>

                    <div>
                        <p className="lg:text-3xl text-xl font-semibold text-[#3b644c] mb-3">Password</p>
                        <input type="password" name="password" placeholder="Enter your password" className="border lg:p-3 p-2  w-[250px] lg:w-[400px]"  />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover lg:text-xl font-semibold text-[#3b644c]">Forgot password?</a>
                        </label>
                    </div>

                    <div className="mt-6">
                        <button className="btn-sm ml-0 lg:ml-[150px] rounded-lg mx-12 bg-[#3b644c] text-white">Sign In</button>
                    </div>
                    <div className="lg:text-xl text-sm mt-3  font-semibold text-[#3b644c]">
                        <p>
                            All ready have an account? Please <Link to='/register' className="hover:underline ">Login</Link>

                        </p>
                    </div>
                    <div className="mt-4">
                        <button onClick={handleGoogle} className="btn-sm w-[150px] ml-0 lg:ml-[110px] rounded-lg mx-12 bg-[#3b644c] text-white">Login With Google</button>
                    </div>

                </form>

                {
                    userError && <p className="mx-8 text-red-600">{userError}</p>
                }
                {
                    userSuccess && <p className="mx-8 text-green-600">{userSuccess}</p>
                }


            </div>
        </div>
    );
};

export default Register;