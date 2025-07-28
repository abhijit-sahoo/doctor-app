import mongoose from "mongoose"

const connectDB = async () =>{
    mongoose.connection.on('connected',()=>console.log("Database connected"))
    const {connection} = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`)
    console.log(connection.host)
    
    
}

export default connectDB;