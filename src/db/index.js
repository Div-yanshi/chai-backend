import mongoose from 'mongoose';

const { connection } = mongoose;
import { DB_NAME } from "../constants.js";  


const connectDB =async ()=> {
    try{
        console.log("MONGODB_URI:", process.env.MONGODB_URI);

      const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error){
       console.log("MONGODB connections error",error);
        process.exit(1)
    }
}
export default connectDB