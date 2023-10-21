import { useLoaderData } from "react-router-dom";

import Brands from "./Brands";



const BrandDetails = () => {
    const brandData = useLoaderData()

    console.log(brandData);





    return (
        <div>
{/* 
            <DetailsBanner></DetailsBanner> */}

            <div className="grid mx-5 lg:mx-56 gap-10 lg:grid-cols-2 grid-cols-1 mt-20">
                {
                    brandData?.map((items) => <Brands key={items._id} item={items}></Brands>)
                }
            </div>



        </div>
    );
};

export default BrandDetails;