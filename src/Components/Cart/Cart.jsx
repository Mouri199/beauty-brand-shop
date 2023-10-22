import { useLoaderData } from "react-router-dom";
import CartData from "./CartData";
import { useState } from "react";
import Swal from "sweetalert2";


const Cart = () => {
    const cartInfo = useLoaderData();
    const [cart,setCart] = useState(cartInfo)
    console.log(cartInfo);
    const handleDetele = id => {
      
        Swal.fire({ 
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
    
            fetch(`https://entice-server.vercel.app/cart/${id}`, {
              method: 'DELETE'
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  const remaining = cart.filter(cof => cof._id !== id)
                  setCart(remaining)
                }
              })
          }
        })
    
      }

    return (
        <div>
            <div className="grid mx-5 lg:mx-10 gap-10 lg:grid-cols-3 grid-cols-1 mt-20">
                {
                   cart?.map(itemData => <CartData key={itemData._id} ItemData={itemData} handleDetele={handleDetele} cart={cart} setCart={setCart}></CartData>)
                }
            </div>
        </div>
    );
};

export default Cart;