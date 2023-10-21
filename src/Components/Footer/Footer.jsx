
const Footer = () => {
    return (
        <div className="mt-10">

            <div className="bg-[#a5c7b5] p-5">
                <div className="text-center py-5 text-[#3b644c]">
                    <h3 className="lg:text-5xl text-3xl mb-7 font-bold">Entice</h3>
                    <p className="lg:text-3xl text-xl mb-7  font-semibold">We do not spam.We send offers instead</p>
                    <label>
                        <input className="p-2 border w-full lg:w-1/2" type="text" name="" id="" placeholder="Your email here..." />
                    </label>
                </div>

                <div className="flex mx-auto max-w-[300px] mt-7 ">
                    <img src="https://i.ibb.co/c8tDBXK/paypal-card.png" alt="" />
                    <img src="https://i.ibb.co/KmZsQ54/card-apple.png" alt="" />
                    <img src="https://i.ibb.co/j4nH5gk/master-card.png" alt="" />
                    <img src="https://i.ibb.co/VCzWPxX/visa.png" alt="" />
                    <img src="https://i.ibb.co/C1zbmdG/skril-card.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;