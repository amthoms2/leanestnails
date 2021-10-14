const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_51JiqwFECtP9ThSLbF70vXMam1YEqfVL5yCURkw3IDyLFmrOkRl01gKYOC9Ym8L4XUfSSjm9c1XKexvCxFSSLWnzr00T0ox9nMF'
    : 'sk_test_51JiqwFECtP9ThSLbF70vXMam1YEqfVL5yCURkw3IDyLFmrOkRl01gKYOC9Ym8L4XUfSSjm9c1XKexvCxFSSLWnzr00T0ox9nMF';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
