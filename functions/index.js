const functions = require('firebase-functions');
 const express = require("express");
 const cors = require("cors")
 const stripe = require("stripe")
 ("sk_test_51I5bysCDMSg6mIGeanPybMHgRFsCRql2a3KPfzcgQaHJlvLsMNgZOKfSGr0ZrJFIqC3p8KtSDqoNFpGoalo4f08C00STr7cgLk");


//  API

// APP CONFIG
const app = express();


// MIDDLEWARES
app.use(cors({origin:true}));
app.use(express.json())
// API ROUTES
app.get('/',(request ,response)=>response.status(200).send
('hello'))

// LISTEN COMMAND
exports.api = functions.https.onRequest(app)