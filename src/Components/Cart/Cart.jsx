import { useLoaderData } from "react-router-dom";
import CartData from "./CartData";
import { useState } from "react";


const Cart = () => {
    const cartInfo = useLoaderData();
    const [coffees,setCofees] = useState(cartInfo)
    console.log(cartInfo);

    return (
        <div>
            <div className="grid mx-5 lg:mx-10 gap-10 lg:grid-cols-3 grid-cols-1 mt-20">
                {
                    cartInfo.map(itemData => <CartData key={itemData._id} ItemData={itemData} coffes={coffees} setCofees={setCofees}></CartData>)
                }
            </div>
        </div>
    );
};

export default Cart;