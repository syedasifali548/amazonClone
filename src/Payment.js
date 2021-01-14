import React, { useState,useEffect } from 'react'
import './Payment.css'
import Checkoutproduct from './Checkoutproduct';
import { useStateValue } from './StateProvider'
import { Link , useHistory } from 'react-router-dom'
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer'
import axios from './axios';

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const[succeeded , setSucceeded] = useState(false);
    const [processing ,setProcessing] = useState("")


    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    
    useEffect(() => {
        const getClientSecret = async ()=>{
            const response = await axios({
                method:'post',
                url:`/payments/create?total=${getBasketTotal(basket)* 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
        
    }, [basket])


    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            // paymentIntent = payment confirmation
            setSucceeded(true);
            error(null);
            setProcessing(false)
            history.replace('/orders')
                
        })

    }

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>
            </div>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delievery Address:</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>North karachi</p>
                    <p>Sindh</p>
                </div>

            </div>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment_items'>
                    {basket.map(item => (
                        <Checkoutproduct
                            id={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}

                        />
                    ))}
                </div>

            </div>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className='payment_priceContainer'>
                            <CurrencyFormat
                             renderText={(value)=>(
                                <h3>Total Order:{value }</h3>
                            )}
                               decimalScale={2}
                               value={getBasketTotal(basket)}
                               displayType={"text"}
                               thousandSeparator={true}
                               prefix={"$"}
                            />
                            <button disabled={processing || disabled ||succeeded}>
                                <span>{processing?<p>processing</p>:"Buy Now"}</span>
                            </button>
                               
                        </div>
                        {/* For Errors */}
                        {error && <div>{error}</div>}
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Payment 
