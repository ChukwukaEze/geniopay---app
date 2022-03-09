import React from 'react'

const Card = ({wallet}) => {
  return (
    <div className='card' style={{background: wallet.background}}>
      <div className='flex_between_max'>
        <div>
          <p><strong>{wallet.title}</strong></p>
          <p>{wallet.currency}</p>
        </div>
        <img src={wallet.image} alt="" />
      </div>
      <p className='wallet_price'><strong>{wallet.amount}</strong></p>
    </div>
  )
}

export default Card