import { useLoaderData, useParams } from "react-router-dom";
import DetailsBanner from "./DetailsBanner";



const BrandDetails = () => {
    const brandData = useLoaderData()
    const {  brand_name, image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, name1, name2, name3, name4, name5, name6, name7, name8, type } = brandData

    // const param = useParams();
    // const brands = brandData.find(datas => datas._id == param._id)

    //     const handleAddCart = () => {
    //  console.log("addedd");


    //         const addedCart =[];
    //         const addCart = JSON.parse(localStorage.getItem('addCart'))

    //         console.log('Existing cart:', addCart);
    //         if(!addCart) {
    //             addedCart.push(brandData)
    //             console.log('Item added to a new cart:', addedCart);
    //             localStorage.setItem('addCart' ,JSON.stringify(addedCart))

    //         }else{
    //             const isExists = addCart.find(brands=>brands._id == param._id)
    //             console.log('Item already exists in the cart:', isExists);

    //             if(!isExists){
    //                 addedCart.push(...addCart,brandData)
    //                 console.log('Item added to the existing cart:', addedCart);
    //                 localStorage.setItem('addCart', JSON.stringify(addedCart))
    //             }
    //         }
    //     }

    return (
        <div>

            <DetailsBanner></DetailsBanner>





            <div className="grid lg:mx-32 mx-10 text-[#3b644c] my-10 gap-16 lg:grid-cols-3">


                <div className="lg:w-[500px] bg-[#a5c7b5]">
                    <img className="lg:px-10 lg:mx-0 mx-20 lg:h-[450px] h-[200px] lg:pt-10" src={image_1} alt="" />
                    <hr />
                    <div className=" items-end mx-5">
                        <div>
                            <p className="lg:text-5xl text-2xl mb-3 font-semibold">{brand_name}</p>
                            <p className="ld:text-4xl text xl font-semibold">Type {type}</p>
                            <p className="lg:text-2xl text-lg mb-3">{name1}</p>
                            <p className="lg:text-3xl text-xl  mb-3 font-bold">Price 300$</p>

                        </div>
                        <div className="flex justify-between">
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">View Details </button>
                            <button onClick={handleAddCart} className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">Add Cart</button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[500px] bg-[#a5c7b5]">
                    <img className="lg:px-10 lg:mx-0 mx-20 lg:h-[450px] h-[200px] lg:pt-10" src={image_2} alt="" />
                    <hr />
                    <div className=" items-end mx-5">
                        <div>
                            <p className="lg:text-5xl text-2xl mb-3 font-semibold">{brand_name}</p>
                            <p className="ld:text-4xl text xl font-semibold">Type {type}</p>
                            <p className="lg:text-2xl text-lg mb-3">{name2}</p>
                            <p className="lg:text-3xl text-xl  mb-3 font-bold">Price 300$</p>

                        </div>
                        <div className="flex justify-between">
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">View Details </button>
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">Add Cart</button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[500px] bg-[#a5c7b5]">
                    <img className="lg:px-10 lg:mx-0 mx-20 lg:h-[450px] h-[200px] lg:pt-10" src={image_3} alt="" />
                    <hr />
                    <div className=" items-end mx-5">
                        <div>
                            <p className="lg:text-5xl text-2xl mb-3 font-semibold">{brand_name}</p>
                            <p className="ld:text-4xl text xl font-semibold">Type {type}</p>
                            <p className="lg:text-2xl text-lg mb-3">{name3}</p>
                            <p className="lg:text-3xl text-xl  mb-3 font-bold">Price 300$</p>

                        </div>
                        <div className="flex justify-between">
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">View Details </button>
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">Add Cart</button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[500px] bg-[#a5c7b5]">
                    <img className="lg:px-10 lg:mx-0 mx-20 lg:h-[450px] h-[200px] lg:pt-10" src={image_4} alt="" />
                    <hr />
                    <div className=" items-end mx-5">
                        <div>
                            <p className="lg:text-5xl text-2xl mb-3 font-semibold">{brand_name}</p>
                            <p className="ld:text-4xl text xl font-semibold">Type {type}</p>
                            <p className="lg:text-2xl text-lg mb-3">{name4}</p>
                            <p className="lg:text-3xl text-xl  mb-3 font-bold">Price 300$</p>

                        </div>
                        <div className="flex justify-between">
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">View Details </button>
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">Add Cart</button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[500px] bg-[#a5c7b5]">
                    <img className="lg:px-10 lg:mx-0 mx-20 lg:h-[450px] h-[200px] lg:pt-10" src={image_5} alt="" />
                    <hr />
                    <div className=" items-end mx-5">
                        <div>
                            <p className="lg:text-5xl text-2xl mb-3 font-semibold">{brand_name}</p>
                            <p className="ld:text-4xl text xl font-semibold">Type {type}</p>
                            <p className="lg:text-2xl text-lg mb-3">{name5}</p>
                            <p className="lg:text-3xl text-xl  mb-3 font-bold">Price 300$</p>

                        </div>
                        <div className="flex justify-between">
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">View Details </button>
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">Add Cart</button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[500px] bg-[#a5c7b5]">
                    <img className="lg:px-10 lg:mx-0 mx-20 lg:h-[450px] h-[200px] lg:pt-10" src={image_6} alt="" />
                    <hr />
                    <div className=" items-end mx-5">
                        <div>
                            <p className="lg:text-5xl text-2xl mb-3 font-semibold">{brand_name}</p>
                            <p className="ld:text-4xl text xl font-semibold">Type {type}</p>
                            <p className="lg:text-2xl text-lg mb-3">{name6}</p>
                            <p className="lg:text-3xl text-xl  mb-3 font-bold">Price 300$</p>

                        </div>
                        <div className="flex justify-between">
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">View Details </button>
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">Add Cart</button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[500px] bg-[#a5c7b5]">
                    <img className="lg:px-10 lg:mx-0 mx-20 lg:h-[450px] h-[200px] lg:pt-10" src={image_7} alt="" />
                    <hr />
                    <div className=" items-end mx-5">
                        <div>
                            <p className="lg:text-5xl text-2xl mb-3 font-semibold">{brand_name}</p>
                            <p className="ld:text-4xl text xl font-semibold">Type {type}</p>
                            <p className="lg:text-2xl text-lg mb-3">{name7}</p>
                            <p className="lg:text-3xl text-xl  mb-3 font-bold">Price 300$</p>

                        </div>
                        <div className="flex justify-between">
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">View Details </button>
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">Add Cart</button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[500px] bg-[#a5c7b5]">
                    <img className="lg:px-10 lg:mx-0 mx-20 lg:h-[450px] h-[200px] lg:pt-10" src={image_8} alt="" />
                    <hr />
                    <div className=" items-end mx-5">
                        <div>
                            <p className="lg:text-5xl text-2xl mb-3 font-semibold">{brand_name}</p>
                            <p className="ld:text-4xl text xl font-semibold">Type {type}</p>
                            <p className="lg:text-2xl text-lg mb-3">{name8}</p>
                            <p className="lg:text-3xl text-xl  mb-3 font-bold">Price 300$</p>

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