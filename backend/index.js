require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const allRoutes = require("./Routes/Routes");

const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const PORT = process.env.PORT || 8080;
const mongoURL = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: [
    process.env.VITE_FRONTEND_URL,
    process.env.VITE_DASHBOARD_URL,],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

main().then(() => {
  console.log("database connected");
}).catch((err) => {
  console.log(err);
});

async function main() {
  await mongoose.connect(mongoURL);
}


app.use("/api", authRoute);
app.use("/api", allRoutes);


app.listen(PORT, () => {
  console.log("App Started");
});

