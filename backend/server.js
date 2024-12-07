import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import productRoutes from "./routes/product.route.js"

dotenv.config();

const app  = express();
const port = process.env.PORT || 5000;
app.use(express.json()); //allows us to accept JSON data in the req.body

app.use("/api/products",productRoutes);

app.listen(port, () => {
    connectDb();
    console.log("server started at http://localhost:"+ port);
})

