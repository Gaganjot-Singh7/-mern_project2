import { z } from "zod";

const validation = z.object({
    username: z.string({
        required_error: "Username is must ",
        invalid_type_error: "Please Enter only String"
    }).min(3, { message: "Username should be atleast 3" }).trim(),

    email: z.string({
        required_error: "This is required-email"
    }),
    phone: z.number({
        required_error: "This is required-phone"
    }),
    password: z.string({
        required_error: "This is required-password"
    }),
    isActive: z.boolean({
        required_error: "This is required-isAdmin"
    })
})
export default validation;