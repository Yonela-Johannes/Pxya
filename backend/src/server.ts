import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import productRouter from './router/product.router'
import userRouter from './router/user.router'
import orderRouter from './router/order.router'
import { dbConnect } from './configs/database.configs';
dotenv.config();
dbConnect()

const app = express()

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}));

app.use("/api/products", productRouter);
app.use("/api/users", userRouter)
app.use("/api/orders", orderRouter)

const port  = 5000;
app.listen(port, () => {
    console.log("Backend is running on port=> http://localhost:"+port)
})
