import { Link } from "react-router-dom";


const BrandBanner = () => {
    return (
        <div>
            <div className="lg:flex lg:px-0 px-5 lg:py-0 py-5 bg-[#a5c7b5] justify-center gap-20 items-center">
                <div className="">
                    <h3 className="lg:text-5xl  text-center text-2xl lg:w-[500px] font-bold text-[#3b644c] mb-5">Glow Your <span className="text-black"> Face & Vitality </span> With Our Best Service</h3>
                   <Link to='/contactus'> <button className="lg:p-2 p-2 rounded-lg lg:ml-48 ml-40 bg-[#3b644c] hover:bg-slate-600 text-white"> Contact Us</button>
                   </Link>
                </div>
                <div>
                    <img className="lg:w-[500px]" src="https://i.ibb.co/r6zF6V3/skin-care-concept-beautiful-woman-touching-face-2021-08-26-16-33-46-utc-1-removebg-min.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BrandBanner;