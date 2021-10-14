const router = require("express").Router();
const stripe = require('../constants/stripe');

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
// const stripe = require('../constants/stripe');

// const postStripeCharge = res => (stripeErr, stripeRes) => {
//   if (stripeErr) {
//     res.status(500).send({ error: stripeErr });
//   } else {
//     res.status(200).send({ success: stripeRes });
//   }
// }

// const paymentApi = app => {
//   app.get('/', (req, res) => {
//     res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
//   });


//   app.post('/', (req, res) => {
//     stripe.charges.create(req.body, postStripeCharge(res));
//   });

//   return app;
// };

// module.exports = paymentApi;
