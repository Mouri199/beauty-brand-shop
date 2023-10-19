import { Link } from "react-router-dom";


const BrandName = ({ Info }) => {

    const {_id, brand_name, image } = Info || {}
    return (
        <div>

            <div className="card w-96 bg-[#bdd9ca] shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="lg:text-4xl text-2xl font-semibold">{brand_name}</h2>
                  <Link to={`/brandDetails/${_id}`}>  <button className="btn lg:p-2 p-1 bg-[#3b644c] text-white ">Show More</button></Link>
                </div>
            </div>

        </div>
    );
};

export default BrandName;