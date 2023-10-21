import { Link } from "react-router-dom";


const BrandName = ({ Info }) => {

    const {BrandName, image } = Info || {}
    return (
        <div>

            <div className="card w-96 bg-[#bdd9ca] shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="lg:text-4xl text-2xl font-semibold">{BrandName}</h2>
                  <Link to={`/brandDetails/${BrandName}`}>  <button className="btn lg:p-2 p-1 bg-[#3b644c] hover:bg-slate-600 text-white ">Show More</button></Link>
                </div>
            </div>

        </div>
    );
};

export default BrandName;