

const BrandName = ({ Info }) => {

    const { brand_name, image } = Info || {}
    return (
        <div>
        
                <div className="card w-96 bg-[#bdd9ca] shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="lg:text-4xl text-2xl font-semibold text-[#3b644c]">{brand_name}</h2>
                        <button className="btn lg:p-2 p-1 bg-[#3b644c] text-white ">Show More</button>
                    </div>
                </div>
           
        </div>
    );
};

export default BrandName;