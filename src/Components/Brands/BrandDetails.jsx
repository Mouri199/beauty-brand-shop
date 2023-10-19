import { useLoaderData, useParams } from "react-router-dom";


const BrandDetails = () => {
    const brandData = useLoaderData()

    const param = useParams();
    const brands = brandData.find(datas => datas._id == param._id)

    return (
        <div>

            <div className="grid lg:mx-32 mx-10 text-[#3b644c] my-10 gap-16 lg:grid-cols-3">
                <div className="lg:w-[500px] bg-[#a5c7b5]">
                    <img className="lg:px-10 lg:mx-0 mx-20 lg:h-[450px] h-[200px] lg:pt-10" src={brands.image_1} alt="" />
                    <hr />
                    <div className=" items-end mx-5">
                        <div>
                            <p className="lg:text-5xl text-2xl mb-3 font-semibold">{brands.brand_name}</p>
                            <p className="lg:text-2xl text-lg mb-3">{brands.name1}</p>
                            <p className="lg:text-3xl text-xl  mb-3 font-bold">Price 300$</p>
                        </div>
                        <div className="flex justify-between">
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">View Details </button>
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">Add Cart</button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[500px] bg-[#a5c7b5]">
                    <img className="lg:px-10 lg:mx-0 mx-20 lg:h-[450px] h-[200px] lg:pt-10" src={brands.image_2} alt="" />
                    <hr />
                    <div className=" items-end mx-5">
                        <div>
                            <p className="lg:text-5xl text-2xl mb-3 font-semibold">{brands.brand_name}</p>
                            <p className="lg:text-2xl text-lg mb-3">{brands.name2}</p>
                            <p className="lg:text-3xl text-xl mb-3 font-bold">Price 1500$</p>
                        </div>
                        <div className="flex justify-between">
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">View Details </button>
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">Add Cart</button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[500px] bg-[#a5c7b5]">
                    <img className="lg:px-10 lg:mx-0 mx-20 lg:h-[450px] h-[200px] lg:pt-10" src={brands.image_3} alt="" />
                    <hr />
                    <div className=" items-end mx-5">
                        <div>
                            <p className="lg:text-5xl text-2xl mb-3 font-semibold">{brands.brand_name}</p>
                            <p className="lg:text-2xl text-lg mb-3">{brands.name3}</p>
                            <p className="lg:text-3xl text-xl mb-3 font-bold">Price 1300$</p>
                        </div>
                        <div className="flex justify-between">
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">View Details </button>
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">Add Cart</button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[500px] bg-[#a5c7b5]">
                    <img className="lg:px-10 lg:mx-0 mx-20 lg:h-[450px] h-[200px] lg:pt-10" src={brands.image_4} alt="" />
                    <hr />
                    <div className=" items-end mx-5">
                        <div>
                            <p className="lg:text-5xl text-2xl mb-3 font-semibold">{brands.brand_name}</p>
                            <p className="lg:text-2xl text-lg mb-3">{brands.name4}</p>
                            <p className="lg:text-3xl text-xl mb-3 font-bold">Price 1300$</p>
                        </div>
                        <div className="flex justify-between">
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">View Details </button>
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">Add Cart</button>
                        </div>
                    </div>
                </div>

                <div className="lg:w-[500px] bg-[#a5c7b5]">
                    <img className="lg:px-10 lg:mx-0 mx-20  lg:h-[450px] h-[200px] lg:pt-10" src={brands.image_5} alt="" />
                    <hr />
                    <div className=" items-end mx-5">
                        <div>
                            <p className="lg:text-5xl text-2xl mb-3 font-semibold">{brands.brand_name}</p>
                            <p className="lg:text-2xl text-lg mb-3">{brands.name5}</p>
                            <p className="lg:text-3xl text-xl mb-3 font-bold">Price 1000$</p>
                        </div>
                        <div className="flex justify-between">
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">View Details </button>
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">Add Cart</button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[500px] bg-[#a5c7b5]">
                    <img className="lg:px-10 lg:mx-0 mx-20 lg:h-[450px] h-[200px] lg:pt-10" src={brands.image_6} alt="" />
                    <hr />
                    <div className=" items-end mx-5">
                        <div>
                            <p className="lg:text-5xl text-2xl mb-3 font-semibold">{brands.brand_name}</p>
                            <p className="lg:text-2xl text-lg mb-3">{brands.name6}</p>
                            <p className="lg:text-3xl text-xl mb-3 font-bold">Price 1600$</p>
                        </div>
                        <div className="flex justify-between">
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">View Details </button>
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">Add Cart</button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[500px] bg-[#a5c7b5]">
                    <img className="lg:px-10 lg:mx-0 mx-20 lg:h-[450px] h-[200px] lg:pt-10" src={brands.image_7} alt="" />
                    <hr />
                    <div className=" items-end mx-5">
                        <div>
                            <p className="lg:text-5xl text-2xl mb-3 font-semibold">{brands.brand_name}</p>
                            <p className="lg:text-2xl text-lg mb-3">{brands.name7}</p>
                            <p className="lg:text-3xl text-xl mb-3 font-bold">Price 1800$</p>
                        </div>
                        <div className="flex justify-between">
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">View Details </button>
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">Add Cart</button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[500px] bg-[#a5c7b5]">
                    <img className="lg:px-10 lg:mx-0 mx-20 lg:h-[450px] h-[200px] lg:pt-10" src={brands.image_8} alt="" />
                    <hr />
                    <div className="items-end mx-5">
                        <div>
                            <p className="lg:text-5xl text-2xl mb-3 font-semibold">{brands.brand_name}</p>
                            <p className="lg:text-2xl text-lg mb-3">{brands.name8}</p>
                            <p className="lg:text-3xl text-xl mb-3 font-bold">Price 1800$</p>
                        </div>
                        <div className="flex justify-between">
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">View Details </button>
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">Add Cart</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default BrandDetails;