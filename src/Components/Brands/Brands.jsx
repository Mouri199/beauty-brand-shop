
import { Link } from "react-router-dom";

const Brands = ({ item }) => {
    const {_id, Image,Name,Type,Price,Rating,BrandName } = item || {}

    // const brandData = useLoaderData()
    return (
        <div>
            <div className="card lg:w-[600px] bg-[#bdd9ca] w-96 text-[#3b644c] shadow-xl">
                <figure className="lg:w[500px] lg:h-[500px]">
                    <img src={Image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="lg:text-4xl text-2xl font-semibold">Brand:{BrandName}</h2>
                    <p className="lg:text-xl text-lg font-medium">{Name}</p>
                    <p className="lg:text-xl font-bold">Type: {Type}</p>
                    <p className="lg:text-3xl font-semibold">{Price}TK</p>
                    <p className="lg:text-3xl font-semibold">Rating: {Rating}</p>
                    <div className="lg:flex justify-between">
        
                      <Link to={`/details/${_id}`}>  <button className="btn lg:p-2 p-1 bg-[#3b644c] hover:bg-slate-600 text-white">Details</button></Link>
                      <Link to={`/update/${_id}`}>  <button className="btn lg:p-2 p-1 bg-[#3b644c] hover:bg-slate-600 text-white">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;

