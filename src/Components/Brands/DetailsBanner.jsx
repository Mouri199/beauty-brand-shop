import { Link } from "react-router-dom";

const DetailsBanner = () => {
    return (
        <div className="lg:flex bg-[#a5c7b5] items-center justify-around ">
            <div>
                < img className="lg:w-[400px] lg:pt-0 pt-9 w-[200px] lg:ml-0 ml-28" src="https://i.ibb.co/hFKwCV9/Untitled-2-removebg-preview.png" alt="" />
            </div>
            <div>
                <p className="lg:text-6xl lg:mx-0 mx-8 text-3xl font-semibold lg:w-[600px] text-[#3b644c] mb-5">Discover The Secter Of Beauty</p>
                <Link to='/contactus'> <button className="lg:p-2 p-2 rounded-lg lg:ml-0 ml-40 bg-[#3b644c] hover:bg-slate-600 my-5 text-white"> Contact Us</button>
                   </Link>
            </div>

        </div>
    );
};

export default DetailsBanner;