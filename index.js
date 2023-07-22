const express = require("express");
const app = express();
const { numbers } = require("./controller/number");
app.use(express.json());
app.post("/numbers/prime",numbers)
app.post("/numbers/odd",numbers)
app.post("/numbers/fibo",numbers)
app.post("/numbers/rand",numbers)
app.listen(8008,()=>{console.log("app is listening ")});