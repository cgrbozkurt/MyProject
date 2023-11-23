import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ShowProduct from './Components/ShowProduct'

function App() {
  const [money, setMoney]=useState(3000000000)
  const [totalPrice,setTotalPrice]=useState(0);

  return (
    <>
     <Header totalPrice={totalPrice} setTotalPrice={setTotalPrice} money={money} />
     <ShowProduct totalPrice={totalPrice} setTotalPrice={setTotalPrice} money={money}/>
    </>
  )
}

export default App
