import { Fragment } from 'react';
import PropTypes from 'prop-types';

const Products = ({ product, basket, setBasket  ,totalPrice, setTotalPrice}) => {
  const basketItem = basket.find((item) => item.id === product.id);
  const notBasket = basket.filter((item) => item.id !== product.id);

 



  const buyClickHandler = () => {
    if (basketItem) {
      basketItem.amount += 1;
      setBasket([...notBasket, basketItem]);
      setTotalPrice(totalPrice+product.price)
    } else {
      setBasket([...basket, {
        id: product.id,
        amount: 1
      }]);
      setTotalPrice(totalPrice+product.price)

    }
  };

  const selClickHandler = () => {
    if (basketItem && basketItem.amount > 0) {
      basketItem.amount -= 1;
      setBasket([...basket.filter((item) => item.id !== product.id), basketItem]);
      setTotalPrice(totalPrice-product.price);

    }
  };

  const resetHandler=()=>{
    setBasket([])
    setTotalPrice(0)
  }

  return (
    <Fragment>
      <div className="flex-col p-3 mb-3 border-l-stone-950">
        <img src={product.image} alt={product.title} />
        <h6 className="pb-3 text-lg">{product.title}</h6>
        <div>${product.price}</div>
        <div className="actions">
          <button onClick={selClickHandler} className="border-solid border-2 rounded-lg w-auto">
            Sat
          </button>
          <span> {(basketItem && basketItem.amount) || 0}</span>
          <button onClick={buyClickHandler} className="border-solid border-2 rounded-lg w-auto">
            Satın Al
          </button>
        </div>
      </div>
      <div className="reset">
        <button onClick={resetHandler}>Sıfırla</button>
      </div>
      
    </Fragment>
  );
};

Products.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  basket: PropTypes.array.isRequired,
  setBasket: PropTypes.func.isRequired,
};

export default Products;