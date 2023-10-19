import { useEffect } from "react";
import { useState } from "react";
import CartData from "./CartData";


const Cart = () => {

    const [cartAdded, setCartAdded] = useState([])
    const [noData, setNoData] = useState(false)
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        const addCart = JSON.parse(localStorage.getItem('addCart'));
        if (addCart) {
            setCartAdded(addCart)
        }
        else {
            setNoData("No Data Found")
        }
    }, [])

    console.log(cartAdded);


    return (
        <div>
            {
                noData ? <p className="h-[80vh] flex justify-center items-center font-semibold text-4xl">{noData}</p> :
                    (<div>
                        <div>
                            {
                                isShow ? cartAdded.map(card => <CartData key={card._id} card={card}></CartData>) : cartAdded.slice(0, 4).map(card => <CartData key={card._id} card={card}></CartData>)
                            }
                        </div>
                        <div>
                            {
                                cartAdded.length >= 4 && <button onClick={() => setIsShow(!isShow)} className=""> {isShow ? "See Less" : "See More"}</button>
                            }
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Cart;