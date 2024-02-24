import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { FaPaypal } from "react-icons/fa6";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (typeof price !== "number" || price < 1) {
      console.log("Price is not a number or less than 1");
      return;
    }
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      // console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    // create card element
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("Success");
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    // console.log(paymentIntent);
    if (paymentIntent.status === "succeed") {
      // console.log(paymentIntent.id);
      setCardError(`Your transactionId id ${paymentIntent.id}`);
      // payment info data
      const paymentInfo = {
        email: user.email,
        transitionId: paymentIntent.id,
        price,
        quantity: cart.length,
        status: "order pending",
        itemName: cart.map((item) => item.name),
        cartItems: cart.map((item) => item._id),
        menuItem: cart.map((item) => item.menuItemId),
      };

      console.log(paymentInfo);
      // save info for backend;
      axiosSecure.post("/payments", paymentInfo).then((res) => {
        console.log(res.data);
        alert("Payment successfull!");
      });
    }
  };
  return (
    <div className=" container flex flex-col sm:flex-row justify-start items-start gap-8">
      {/* left side */}
      <div className=" md:w-1/2 space-y-5 w-full card shrink-0 max-w-sm shadow-2xl bg-base-100 px-4 py-8">
        <h4 className="text-lg font-semibold">Order Summary</h4>
        <p>Total Price: ₹{price}</p>
        <p>
          Number of Items:
          {cart.length}
        </p>
      </div>
      {/* right side */}
      <div className=" md:w-1/3 space-y-5 w-full card shrink-0 max-w-sm shadow-2xl bg-base-100 px-4 py-8">
        <h4 className="text-lg font-semibold">Process your payment!</h4>
        <h5>Credit/Debit Card</h5>
        {/* stripe form */}
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            type="submit"
            disabled={!stripe}
            className="btn btn-sm mt-5 btn-primary w-full  text-white"
          >
            Pay
          </button>
        </form>
        {cardError ? (
          <p className="text-red italic text-xs">{cardError}</p>
        ) : (
          ""
        )}

        {/* paypal */}
        <div className="mt-5 text-center">
          <button
            type="submit"
            className="btn btn-sm mt-5 bg-orange-500  text-white"
          >
            <FaPaypal /> Pay with Paypal
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
