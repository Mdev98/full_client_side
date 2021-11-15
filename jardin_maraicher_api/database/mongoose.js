require("dotenv/config");

/* ---DATABASE CONNECTION--- */

const mongoose = require("mongoose");

const connectionString = process.env.CONNECTION_STRING;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Database connection is establish");
})
.catch((e) => {
  console.log(e);
});

/*___________________*/