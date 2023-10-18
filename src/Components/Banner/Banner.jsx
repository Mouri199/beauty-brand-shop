

const Banner = () => {
    return (
        <div>
           <div className="relative">
           <img className="lg:w-[2000px] opacity-50" src="https://i.ibb.co/Wc35yRb/89.jpg" alt="" />
           </div> 

           <div className="absolute lg:left-20 left-24 bottom-[340px] lg:bottom-[440px]">
            <p className="lg:text-3xl lg:mb-2 text-xl text-[#3b644c] font-semibold">Premium Quality</p>
            <h3 className="lg:text-5xl text-2xl font-semibold text-[#3b644c] lg:mb-8">Beauty & Personal Care</h3>
            <p className="lg:text-2xl lg:block hidden text-[#3b644c] w-[500px]">These simple tips have stood the test of time and have proven to be effective on all skin types.</p>
           </div>
        </div>
    );
};

export default Banner;