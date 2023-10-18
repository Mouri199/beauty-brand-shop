import { AiFillGoogleCircle, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const ContactUs = () => {
    return (
        <div>

            <div className="lg:flex py-20 justify-evenly">
                <div className="bg-[#dbede3] lg:p-10 p-7 lg:w-[700px]">
                    <div className="text-center">
                        <h4 className="lg:text-6xl text-3xl font-semibold text-[#3b644c]">Contact Us</h4>
                        <p className="lg:text-3xl text-xl mb-5 font-semibold text-[#3b644c]">Feel Free To Write</p>
                    </div>

 
                    <form>
                        <div className="flex justify-between">
                            <input className="border lg:w-[300px] lg:p-2 p-1" type="text" name="name" placeholder="Your name" id="" />
                            <br />
                            <input className="border lg:w-[300px] lg:p-2 p-1 " type="text" name="name" placeholder="Email address" id="" />
                        </div>

                        <div className="flex my-5 justify-between">
                            <input className="border lg:w-[300px] lg:p-2 p-1" type="text" name="number" placeholder="Phone number" id="" />
                            <br />
                            <input className="border lg:w-[300px] lg:p-2 p-1" type="text" name="problem" placeholder="Your problem" id="" />
                        </div>
                        <input className="border lg:p-2 mb-5 p-1 w-full" type="text" placeholder="Write your problem" name="detailsprob" id="" />
                        <br />
                        <button className="btn bg-[#a5c7b5] text-[#3b644c]">Send a message</button>
                    </form>
                </div>

                <div className="bg-[#dbede3] lg:block hidden lg:w-[400px] px-20 py-16">
                    <div>
                        <h3 className="lg:text-3xl font-semibold mb-2 text-[#3b644c]">Call anytime</h3>
                        <p className="lg:text-xl mb-5 text-[#3b644c]">+989001808</p>
                        <h3 className="lg:text-3xl font-semibold mb-2 text-[#3b644c]">Send email</h3>
                        <p className="lg:text-xl mb-5 text-[#3b644c]">entice@gmail.com</p>
                        <h3 className="lg:text-3xl font-semibold mb-2 text-[#3b644c]">Visit Office</h3>
                        <p className="lg:text-xl text-[#3b644c]">579/A,Mogbazar,Dhaka</p>
                    </div>
                    <div className="flex justify-center mt-8 gap-5">
                      <AiFillGoogleCircle></AiFillGoogleCircle>
                      <AiFillInstagram></AiFillInstagram>
                      <AiFillTwitterCircle></AiFillTwitterCircle>
                    </div>
                </div>
            </div>

        </div>





    );
};

export default ContactUs;