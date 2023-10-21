

const Product = ({ Item }) => {
    const { image, name, brand, type, price, short } = Item || {}

    return (
        <div>
            <div className="lg:w-[400px] rounded-xl my-10 py-4 shadow-xl bg-[#a5c7b5]">
                <img className="lg:px-10 lg:mx-0 mx-20 lg:h-[450px] h-[200px] lg:pt-10" src={image} alt="" />
                <hr />
                <div className=" items-end mx-5">
                    <div>
                        <p className="lg:text-5xl text-2xl mb-3 text-[#3b644c] font-semibold">{brand}</p>
                        <p className="ld:text-4xl text xl text-[#3b644c] font-semibold">{name}</p>
                        <p className="lg:text-2xl text-lg text-[#3b644c] mb-3">{type}</p>
                        <p className="mb-3 text-[#3b644c]">{short}</p>
                        <div className='lg:flex justify-between'>
                            <p className="lg:text-3xl text-xl  mb-3 text-[#3b644c] font-bold">{price} tk</p>
                            <button className=" btn p-2 rounded-lg bg-[#3b644c] text-white mb-5">Add Cart</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;