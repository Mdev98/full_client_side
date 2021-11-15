require("dotenv/config");
require("./database/mongoose");




/* ________________ROUTES________________ */

const authRouter    = require("./routes/auth");
const userRouter    = require("./routes/user");
const productRouter = require("./routes/product");
const orderRouter   = require('./routes/order');

/* ______________________________________ */

// const compression = require('compression')
const morgan      = require('morgan');
const cors        = require('cors');
const express     = require("express");
const app         = express();


/* ____________Express Middleware________ */

app.use(morgan('tiny'));
app.use(cors()); 
app.use(express.json());
// app.use(compression());

app.use(authRouter);
app.use(userRouter);
app.use(productRouter);
app.use(orderRouter);

app.use('/public/uploads', express.static(__dirname + '/public/uploads')) 

/* ______________________________________ */

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});