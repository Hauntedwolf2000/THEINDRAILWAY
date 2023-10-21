import React, { useState } from 'react';

function loadRazorpayScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.body.appendChild(script);
  });
}

const Pay = ({ onPaymentStatusChange }) => {
  const [loading, setLoading] = useState(false);

  async function loadRazorpay() {
    setLoading(true);

    try {
      await loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js');
    } catch (error) {
      alert('Razorpay SDK failed to load. Please check your internet connection.');
      setLoading(false);
      return;
    }

    const data = await fetch('http://localhost:8081/razorpay', { method: 'POST' }).then((t) =>
      t.json()
    );

    // After the script is loaded, you can use the Razorpay object
    const options = {
      id: data.id,
      currency: data.currency,
      amount: data.amount.toString(),
      key: 'rzp_test_cbYRQnjrIYjfzM',
      name: ' INDIAN RAILWAY',
      description: 'book your seat now <--booking made easy-->',
      callback_url: '',
      prefill: {
        name: '',
        email: '',
        contact: ' ',
      },
      handler: function (response) {
        // Inform the parent component (e.g., PaymentPage) about the payment status
        onPaymentStatusChange(response);
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    setLoading(false);
  }

  return (
    <div>
      <button onClick={loadRazorpay} disabled={loading}>
        {loading ? 'Loading Razorpay...' : 'Pay now'}
      </button>
    </div>
  );
};

export default Pay;
