import {z} from "zod"
export const signUpBody = z.object({
    username : z.string().max(12),
    password : z.string().min(8).max(12),
    fullName : z.string().max(20)
})

export const signInBody = z.object({
    username : z.string().max(12),
    password : z.string().min(8).max(12)
})
