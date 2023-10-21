import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {

    const product = useLoaderData()
    console.log(product);

    const { Description, BrandName
        , Image, Name, Price } = product
 

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const short = form.short.value;

        const addProduct = { name, brand, type, image, price, short };
        console.log(addProduct);

        fetch(`https://entice-server.vercel.app/brands/${_id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Sign In Successful",
                        text: "You have successfully signed in!",
                    });
                    form.reset()
                }
            })
    }

    return (
        <div>

           
            <div className=" bg-[#a5c7b5] my-10 mx-auto lg:px-10 py-20 lg:w-[1000px]">
                <h3 className="text-center lg:text-5xl font-semibold text-[#3b644c] mb-5">Update Products</h3>
                <form onSubmit={handleUpdate}>
                    <div className="flex gap-5">
                        <div>
                            <p className="lg:text-3xl text-xl font-semibold text-[#3b644c] mb-3">Product Name</p>
                            <input type="text" name="name" placeholder="Enter product name" className="border lg:p-3 p-2 lg:w-[400px]" />
                        </div>
                        <div>
                            <p className="lg:text-3xl text-xl font-semibold text-[#3b644c] mb-3">Brand</p>
                            <input type="text" name="brand" placeholder="Enter brand name" className="border lg:p-3 p-2 lg:w-[400px]" />
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div>
                            <p className="lg:text-3xl text-xl font-semibold text-[#3b644c] mb-3">Image</p>
                            <input type="text" name="image" placeholder="Enter URL" className="border lg:p-3 p-2 lg:w-[400px]" />
                        </div>
                        <div >
                            <p className="lg:text-3xl text-xl font-semibold text-[#3b644c] mb-3">Type</p>

                            <input type="text" name="type" placeholder="Enter product type" className="border lg:p-3 p-2 lg:w-[400px]" />
                         
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div>
                            <p className="lg:text-3xl text-xl font-semibold text-[#3b644c] mb-3">Price</p>
                            <input type="text" name="price" placeholder="Enter Price" className="border lg:p-3 p-2 lg:w-[400px]" />
                        </div>
                        <div>
                            <p className="lg:text-3xl text-xl font-semibold text-[#3b644c] mb-3">Short Description</p>
                            <input type="text" name="short" placeholder="Enter product description" className="border lg:p-3 p-2 lg:w-[400px]" />
                        </div>
                    </div>

                    <div className="mt-6 ">
                        <button className="btn-sm ml-0 lg:ml-[450px] rounded-lg mx-12 bg-[#3b644c] text-white">Add Product</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Update;