import { useLoaderData } from "react-router-dom";
import BrandName from "../Brands/BrandName";
import Service from "./Service";
import Ourservice from "./Ourservice";
import ExpartTeam from "./ExpartTeam";

import BrandBanner from "../Brands/BrandBanner";
import { useEffect, useState } from "react";



const Home = () => {

    const [brandInfo, setBrandInfo] = useState([])

    useEffect(() => {
        fetch("https://entice-server.vercel.app/brands")
            .then(res => res.json())
            .then(data => {
                setBrandInfo(data);
            })
    }, [])

    console.log(brandInfo);

    return (
        <div >


            <BrandBanner></BrandBanner>
            <div className="lg:block hidden">

                <Service></Service>
            </div>
            <h1 className="lg:text-6xl text-4xl text-[#3b644c] font-semibold text-center mt-5 ">
                Our Trusted Brand Name
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 lg:mx-64 mx-6 gap-7 my-20">
                {
                    brandInfo?.map(item => <BrandName key={item.id} Info={item}></BrandName>)
                }
            </div>

            <Ourservice></Ourservice>

            <div className="lg:flex gap-32 items-center bg-[#a5c7b5] lg:px-32 lg:py-10">
                <div className="lg:w-[800px] text-[#3b644c]">
                    <h3 className="lg:text-5xl text-3xl lg:mx-0 mx-8 font-semibold  mb-8">Everything
                        <span className="text-[#3b644c]"> You Need to Create</span> a Beauty Website</h3>
                    <p className="lg:text-3xl text-xl lg:mx-0 mx-8 mb-5">Beautifo offers stunning beauty designs and layouts for cosmetics shop, make up and beauty spa with multiple styles.</p>
                    <button className="btn bg-[#3b644c] hover:bg-slate-600 lg:ml-0 ml-36 mb-8 text-white">SHOP NOW</button>
                </div>
                <div>
                    <img src="https://i.ibb.co/KN0FrgW/ldp-banner-1.png" alt="" />
                </div>
            </div>

            <ExpartTeam></ExpartTeam>
        </div>
    );
};

export default Home;