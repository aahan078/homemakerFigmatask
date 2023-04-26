import React from 'react'
import '../Pages/pay.css'
import sofa from '../Images/Frame.png'

export default function Payement() {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 '>
                    <div className='payement-box-1 p-5'>
                        <img src={sofa}></img>
                        <p className='pay-txt-p mt-3'>This pack contains a variety of different styles ranging from minimalist. Perfect for changing your room interior plan.</p>
                        <div className='pay-sub-1'>
                            <div className='mini-sub-1'>
                                <input type='radio'></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
