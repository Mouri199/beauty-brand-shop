
import AddBanner from "./AddBanner";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";



const AddProduct = () => {

    const product = useLoaderData()
    console.log(product);


    const handleAdded = e => {
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

        fetch('https://entice-server.vercel.app/brands', {
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
                        title: "Add Product",
                        text: "You have successfully added product!",
                    });
                    form.reset()
                }
            })

    }
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="my-20 carousel-item relative w-full">
                    <img  src="https://i.ibb.co/f4GNtz3/ezgif-com-webp-to-jpg.jpg" className="w-full lg:h-[1000px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className=" my-20 carousel-item relative w-full">
                    <img  src="https://i.ibb.co/nQnnYXh/BIODERMA-THUY-12.jpg" className="w-full lg:h-[1000px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="my-20 carousel-item relative w-full">
                    <img  src="https://i.ibb.co/WykkdKg/cosrx-top-10-best-selling-korean-skincare-products-2023.webp" className="w-full lg:h-[1000px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="my-20 carousel-item relative w-full">
                    <img  src="https://i.ibb.co/Sn21464/All-About-Cosrx-Acids-1.webp" className="w-full lg:h-[1000px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {/* <AddBanner></AddBanner> */}

            <div className=" bg-[#a5c7b5] my-10 mx-auto lg:px-10 py-20 lg:w-[1000px]">
                <h3 className="text-center lg:text-5xl font-semibold text-[#3b644c] mb-5">Add Products</h3>
                <form onSubmit={handleAdded}>
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
            <div className="grid lg:grid-cols-4 grid-cols-1 lg:mx-32 mx-10 gap-10">

                {
                    product?.map(item => <Product key={item._id} Item={item}></Product>)
                }
            </div>
            <Product></Product>
        </div>
    );
};

export default AddProduct;