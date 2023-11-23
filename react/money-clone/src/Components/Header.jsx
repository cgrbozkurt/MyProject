import React from 'react';

const Header = ({ money, totalPrice }) => {
  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'lightblue',
    padding: '10px',
    zIndex: 1000,
  };

  const remainingMoney = money - totalPrice;

  return (
    <div style={headerStyle}>
      <h1 className="bg-green-500 h-10 text-xl">Harcamak İçin {remainingMoney} $ Paranız Var</h1>
      <h2>{totalPrice} $ harcama yaptınız</h2>
    </div>
  );
};

export default Header;