import React from 'react'
import quickLink1 from "../../../../assets/images/quickLink1.png"
import quickLink2 from "../../../../assets/images/quickLink2.png"
import quickLink3 from "../../../../assets/images/quickLink3.png"
import quickLink4 from "../../../../assets/images/quickLink4.png"
import quickLink5 from "../../../../assets/images/quickLink5.png"
import quickLink6 from "../../../../assets/images/quickLink6.png"
import quickLink7 from "../../../../assets/images/quickLink7.png"


const QuickLinks = () => {

  const quickLinks = [
    {
      image: quickLink1,
      title: "Add new Wallet"
    },
    {
      image: quickLink2,
      title: "Add new Card"
    },
    {
      image: quickLink3,
      title: "Balance Exchange"
    },
    {
      image: quickLink4,
      title: "Transfer to Account"
    },
    {
      image: quickLink5,
      title: "Generate Voucher"
    },
    {
      image: quickLink6,
      title: "Mobile Money"
    },
    {
      image: quickLink7,
      title: "Payment Link"
    }
  ]
  return (
    <div className='quickLinks'>
      <h2>Quick Links</h2>
      <p style={{color: "#94A3B8"}}>Your frequently used actions for easy access.</p>
      <div className='card_wrapper'>
      {
        quickLinks.map( (quickLink, index) => (
          <div className='card' key={index}>
            <img src={quickLink.image} alt="" />
            <p>{quickLink.title}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default QuickLinks