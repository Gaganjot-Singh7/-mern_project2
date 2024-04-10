import mongoose from 'mongoose'


const Db=async()=>{
   try {
    await mongoose.connect("mongodb+srv://jot77430:gaganjot03082002@cluster0.l1o5djw.mongodb.net/mern")
   } catch (error) {
    console.error("Database connection error");
   }
}

export default Db;