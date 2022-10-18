const express = require("express");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
dotenv.config({
    path:"./Configure.env",
})
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
const {
  Router1,
  Router2,
  Router3,
  Router4,
  Router5,
  Router6,
  Router7,
} = require("./Routers/Router.config");
const {PORT}= process.env;
// console.log(PORT);

app.use("/api/v1", Router1);
app.use("/api/v1", Router2);
app.use("/api/v1", Router3);
app.use("/api/v1", Router4);
app.use("/api/v1", Router5);
app.use("/api/v1", Router6);
app.use("/api/v1", Router7);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "404 Error",
    message: "Page not found",
  });
});

app.listen(PORT, () => {
  console.log("server listening on port:", PORT);
});
