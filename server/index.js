import express from "express"
import dotenv from "dotenv"
import Connection from "./database/db.js";
const app = express()
const port = process.env.PORT || 4000;
dotenv.config(); 
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
Connection();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})