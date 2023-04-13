import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import productRouter from './router/product.router'
import userRouter from './router/user.router'
import orderRouter from './router/order.router'
import { dbConnect } from './configs/database.configs';
import path from 'path'
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

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'public', 'index.html'))
})

const port  = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Backend is running on port=> http://localhost:"+port)
})
