import mongoose from 'mongoose'


const Db=async()=>{
   try {
    await mongoose.connect("mongodb+srv://jot77430:Sales01%402021@cluster0.l1o5djw.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0")
   } catch (error) {
    console.error("Database connection error",error);
   }
}

export default Db;