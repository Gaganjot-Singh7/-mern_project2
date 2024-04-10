import userSchema from "../db/models/userSchema.js";
import validation from "./validation.js";

const valid=async()=>{
    try {
        await validation.parseAsync(userSchema);
    console.log("zod Applied");
    } catch (error) {
        console.error(error);
    }
}

export default  valid;