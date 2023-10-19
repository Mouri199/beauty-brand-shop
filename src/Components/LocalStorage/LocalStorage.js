const storedBrandData = () => {
    const storedData = localStorage.getItem('addCart')
    if(storedData){
        return JSON.parse(storedData)
    }
    return[]
}

const storeData = _id => {
    const storedCartData = storedBrandData ()
    const exits = storedCartData.find(cartId=>cartId._id == _id._id)
    if(!exits){
        storedCartData.push(_id)
        localStorage.setItem('addCart', JSON.stringify(storedCartData) )
    }
} 

export {storedBrandData, storeData}