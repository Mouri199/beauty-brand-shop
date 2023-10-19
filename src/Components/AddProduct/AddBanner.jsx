import { Link } from "react-router-dom";


const AddBanner = () => {
    return (
        <div>
              <div>
            <div className="flex lg:px-0 px-5 lg:py-0 py-5 bg-[#a5c7b5] justify-around gap-20 items-center">
                <div className="">
                    <h3 className="lg:text-5xl text-[#3b644c] lg:w-[500px] w-[200px] font-bold text-xl mb-5">Glow Your Face & Vitality With Our Best Service</h3>
                   <Link to='/contactus'> <button className="lg:p-2  bg-[#3b644c] hover:bg-slate-600 text-white"> Contact Us</button>
                   </Link>
                </div>
                <div>
                    <img className="lg:w-[250px]" src="https://i.ibb.co/R4KTHc7/about-3-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddBanner;