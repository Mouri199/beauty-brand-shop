

const Login = () => {


    return (
        <div>

            <div className="bg-[#a5c7b5] lg:h-[500px] py-28 lg:w-[600px] mx-auto px-28">
                <form>
                    <div>
                        <p className="lg:text-3xl text-xl font-semibold text-[#3b644c] mb-3">Email</p>
                        <input type="email" name="email" placeholder="Enter your email" className="border lg:p-3 p-2 lg:w-[400px] w-[250px]" required />
                    </div>

                    <div>
                        <p className="lg:text-3xl text-xl font-semibold text-[#3b644c] mb-3">Password</p>
                        <input type="password" name="password" placeholder="Enter your password" className="border lg:p-3 p-2  w-[250px] lg:w-[400px]" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover lg:text-xl font-semibold text-[#3b644c]">Forgot password?</a>
                        </label>
                    </div>

                    <div className="mt-6">
                        <button className="btn lg:ml-[150px] rounded-lg mx-12 bg-[#3b644c] text-white">Sign In</button>
                    </div>
                </form>
            </div>
            {/* <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">

                            <div>
                                <p>Email</p>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div>
                                <p>Password</p>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn-sm rounded-lg mx-12 bg-purple-900 text-white">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default Login;