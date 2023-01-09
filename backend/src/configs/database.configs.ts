import { connect, ConnectOptions } from "mongoose";
import mongoose from 'mongoose'
mongoose.set('strictQuery', false);
export const dbConnect = () => {
    connect(process.env.MONGO_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions).then(
        () => console.log("connect successfully"),
        (error) => console.log(error)
    )
}

