import Swal from "sweetalert2";



const CartData = ({ ItemData , handleDetele}) => {

  const { _id, Image, Name, Price, Rating, BrandName } = ItemData || {}

  

  return (
    <div>
      <div className="card lg:w-[500px] bg-[#bdd9ca] w-96 text-[#3b644c] shadow-xl">
        <figure className="lg:w[500px] lg:h-[500px]">
          <img src={Image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="lg:text-4xl text-2xl font-semibold">Brand:{BrandName}</h2>
          <p className="lg:text-xl text-lg font-medium">{Name}</p>
          <p className="lg:text-3xl font-semibold">{Price}TK</p>
          <div className="lg:flex justify-between">

            <button onClick={() => handleDetele(ItemData._id)} className="btn lg:p-2 p-1 bg-[#3b644c] hover:bg-slate-600 text-white">Delete</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartData;