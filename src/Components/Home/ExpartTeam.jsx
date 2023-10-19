import { AiFillFacebook, AiFillGoogleCircle, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";


const ExpartTeam = () => {
    return (
        <div>
            <div className="text-center my-20 text-[#3b644c] ">
                <h3 className="lg:text-3xl font-semibold text-xl ">Our Team</h3>
                <h1 className="lg:text-5xl font-bold text-3xl">Our Beauty Experts</h1>
            </div>
            <div className="lg:flex justify-center mx-6 gap-10 py-10">
                <div className="card w-96 card-compact bg-base-100 shadow-xl mb-8">
                    <img className="mx-auto rounded-full w-[200px]" src="https://i.ibb.co/9cVxwpX/decollete-skin-care-in-light-medical-room-2021-09-03-14-19-55-utc.jpg" alt="Shoes" />
                    <div className="text-center  mb-5">
                        <p className="lg:text-3xl text-2xl font-semibold">Danielle Welling</p>
                        <h3 className="lg:text-lg font-semibold">Nail Master</h3>
                    </div>
                    <div className="flex justify-center mb-10">
                        <AiFillInstagram></AiFillInstagram>
                        <AiFillFacebook></AiFillFacebook>
                        <AiFillGoogleCircle></AiFillGoogleCircle>
                        <AiFillTwitterCircle></AiFillTwitterCircle>
                    </div>
                </div >
                <div className="card w-96 card-compact bg-base-100 shadow-xl mb-8">
                    <img className="mx-auto rounded-full w-[200px]" src="https://i.ibb.co/S7mhkvr/female-therapist-giving-laser-epilation-treatment-2022-04-05-15-41-37-utc.jpg" alt="Shoes" />
                    <div className="text-center   mb-5" >
                        <p className="lg:text-3xl text-2xl font-semibold">Danielle Welling</p>
                        <h3 className="lg:text-lg font-semibold">Hair Stylish</h3>
                    </div>
                    <div className="flex justify-center mb-10">
                        <AiFillInstagram></AiFillInstagram>
                        <AiFillFacebook></AiFillFacebook>
                        <AiFillGoogleCircle></AiFillGoogleCircle>
                        <AiFillTwitterCircle></AiFillTwitterCircle>
                    </div>
                </div>
                <div className="card w-96 card-compact bg-base-100 shadow-xl mb-8">
                    <img className="mx-auto rounded-full w-[200px]" src="https://i.ibb.co/sq4VsVr/woman-cosmetologist-working-with-client-2022-04-14-19-24-54-utc.jpg" alt="Shoes" />
                    <div className="text-center  mb-5" >
                        <p className="lg:text-3xl text-2xl font-semibold">Cali Lees</p>
                        <h3 className="lg:text-lg font-semibold">Administrator</h3>
                    </div>
                    <div className="flex justify-center mb-10">
                        <AiFillInstagram></AiFillInstagram>
                        <AiFillFacebook></AiFillFacebook>
                        <AiFillGoogleCircle></AiFillGoogleCircle>
                        <AiFillTwitterCircle></AiFillTwitterCircle>
                    </div>
                </div>
             
            </div>
        </div>
    );
};

export default ExpartTeam;