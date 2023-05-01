import React , { useState } from 'react'
// import { usePaymentInputs } from 'react-payment-inputs';
import '../Pages/pay.css'
import { Link } from 'react-router-dom'

import sofa from '../Images/Frame.png'
import Header from '../Header'

export default function Payement() {

  return (
    <div>
         <Header/>
        <div className='container'>
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

 <div className='card-paypal-box'>
    <div className='credit-card'>
        <p className='mt-3'>Credit Card</p>
        <input type='radio'></input>
    </div>
    <div className='credit-card'>
        <p className='mt-3'>PayPal</p>
        <input type='radio'></input>
    </div>
 </div>
<p className='p-txt-pay mt-2'>Email</p>
<input className='email-input-pay' required type='email'></input>
<p className='p-txt-pay mt-2'>Credit Card Number</p>
<input className='email-input-pay' required type='text' placeholder='xxxx xxxx xxxx xxxx'></input>

<div className='date-cvv mt-2'>
   <div className='expire-txt'>
<p>Expiry Date</p>
   <input type='text' placeholder='mm/yy'></input>
   </div>
   <div className='expire-txt'>
<p>CVV</p>
   <input type='text' placeholder='CVV'></input>
   </div>


</div>
<div className='sub-total mt-2'>
    <p>Subtotal</p>
    <p>$49</p>
</div>
<div className='sub-total mt-2'>
    <p>Platform Fee</p>
    <p>$2</p>
</div>
<hr/>
<div className='sub-total mt-2'>
    <p>Total Amount</p>
    <p>$52</p>
</div>

<button className='pay-btn-1 mt-2'>Pay $52</button>
<Link to='/newshome' ><button className='pay-btn-1 mt-2'>Go to our News App</button></Link>

</div>
                </div>
            </div>
        </div>
    </div>
  )
}
