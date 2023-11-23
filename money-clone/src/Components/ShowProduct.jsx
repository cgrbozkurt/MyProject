
import { useEffect, useState } from "react"
import { Product } from "./Product"
import Products from "./Products/Products"


const ShowProduct = ({totalPrice,setTotalPrice}) => {
 
  const [basket,setBasket]=useState([])
  useEffect(()=>{
    console.log(basket);
  },[basket])


  return (
    <>
    <div className="show grid grid-cols-4">
    <div className="total">
        Toplam Fiyat {totalPrice} $
      </div>
    {Product.map(product=>
    <Products key={product.id} totalPrice={totalPrice} setTotalPrice={setTotalPrice} product={product} basket={basket} setBasket={setBasket} /> )}
    </div>
    </>
  )
}

export default ShowProduct