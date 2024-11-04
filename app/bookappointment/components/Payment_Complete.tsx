import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { FaCheckCircle } from 'react-icons/fa';
import { AiOutlineBank } from 'react-icons/ai';
// import { RiMoneyTransfer } from 'react-icons/ri';
import { MdPayment } from 'react-icons/md';

// Load your publishable key from your Stripe account
const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

const PaymentForm = ({ paymentMethod, setPaymentStatus }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentStatus, setPaymentStatusLocal] = useState('');
    const [amount] = useState(10000); // Amount in paise (100.00 INR)
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        if (paymentMethod === 'card') {
            const cardElement = elements.getElement(CardElement);
            // Create payment intent on the server
            const response = await fetch('/api/payment_intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount }),
            });

            const { clientSecret } = await response.json();

            // Confirm card payment
            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                },
            });

            if (error) {
                setPaymentStatus(`Payment failed: ${error.message}`);
            } else {
                if (paymentIntent.status === 'succeeded') {
                    setPaymentStatus('Payment Successful!');
                }
            }
        } else {
            // Handle UPI and Net Banking here
            setPaymentStatus(`Payment via ${paymentMethod} is currently not supported in this demo.`);
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg max-w-md w-full mx-auto">
            <h2 className="text-xl font-semibold mb-4">Complete Your Payment</h2>
            <form onSubmit={handleSubmit}>
                {paymentMethod === 'card' && (
                    <>
                        <CardElement className="border rounded p-2 mb-4" />
                        <button
                            type="submit"
                            disabled={!stripe}
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                        >
                            Pay Now
                        </button>
                    </>
                )}
                {paymentMethod === 'upi' && (
                    <div className="mb-4">
                        <p className="text-gray-700">UPI Payment Instructions...</p>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                            Pay via UPI
                        </button>
                    </div>
                )}
                {paymentMethod === 'netbanking' && (
                    <div className="mb-4">
                        <p className="text-gray-700">Net Banking Instructions...</p>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                            Pay via Net Banking
                        </button>
                    </div>
                )}
            </form>
            {paymentStatus && <p className="mt-4 text-gray-700">{paymentStatus}</p>}
        </div>
    );
};

const PaymentComplete = () => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [paymentStatus, setPaymentStatus] = useState('');

    return (
        <Elements stripe={stripePromise}>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="mb-4">
                    <h1 className="text-2xl font-bold">Select Payment Method</h1>
                    <div className="flex flex-col space-y-2">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value="card"
                                checked={paymentMethod === 'card'}
                                onChange={() => setPaymentMethod('card')}
                                className="mr-2"
                            />
                            <MdPayment className="text-xl" />
                            <span className="ml-2">Credit/Debit Card</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value="upi"
                                checked={paymentMethod === 'upi'}
                                onChange={() => setPaymentMethod('upi')}
                                className="mr-2"
                            />
                            {/* <RiMoneyTransfer className="text-xl" /> */}
                            <span className="ml-2">UPI</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value="netbanking"
                                checked={paymentMethod === 'netbanking'}
                                onChange={() => setPaymentMethod('netbanking')}
                                className="mr-2"
                            />
                            <AiOutlineBank className="text-xl" />
                            <span className="ml-2">Net Banking</span>
                        </label>
                    </div>
                </div>
                <PaymentForm paymentMethod={paymentMethod} setPaymentStatus={setPaymentStatus} />
            </div>
        </Elements>
    );
};

export default PaymentComplete;
