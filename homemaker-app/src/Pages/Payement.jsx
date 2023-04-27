import React , { useState } from 'react'
// import { usePaymentInputs } from 'react-payment-inputs';
import '../Pages/pay.css'

import sofa from '../Images/Frame.png'

export default function Payement() {

  return (
    <div>
        <div>
            <div className='row '>
                <div className='col-lg-6 col-sm-12 main-pay-box'>
                    <div className='payement-box-1 p-5'>
                        <img src={sofa}></img>
                        <p className='pay-txt-p mt-3'>This pack contains a variety of different styles ranging from minimalist. Perfect for changing your room interior plan.</p>
                        <div className='pay-sub-1'>
                            <div className='mini-sub-1'>
                                <input type='radio'>

                                </input>
                                <p>Collection 01 <br/>
                                <span>10 renders</span>
                                </p>
                            </div>
                            <div className='money-box'>$10</div>
                        </div>
                        {/* box2 */}
                        <div className='pay-sub-1 mt-3'>
                            <div className='mini-sub-1'>
                                <input type='radio'>

                                </input>
                                <p>Collection 02 <br/>
                                <span>50 renders</span>
                                </p>
                            </div>
                            <div className='money-box'>$49</div>
                        </div>
                        {/* box3 */}
                        <div className='pay-sub-1 mt-3'>
                            <div className='mini-sub-1'>
                                <input type='radio'>

                                </input>
                                <p>Collection 03 <br/>
                                <span>100 renders</span>
                                </p>
                            </div>
                            <div className='money-box'>$99</div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 col-sm-12'>
<div className='form-main-box p-5'>
    <h3 className='form-txt-h3'>Payment <span>Details</span></h3>

 

</div>
                </div>
            </div>
        </div>
    </div>
  )
}
