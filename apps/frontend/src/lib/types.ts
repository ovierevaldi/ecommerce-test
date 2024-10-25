import { z } from 'zod'

export type SignUpProp = {
    error? : {
        username?: string[],
        fullname?: string[],
        password?: string[],
    },
    success?: boolean,
    message?: string
} | undefined


export type SignInProp = {
    error? : {
        username?: string[],
        password?: string[],
    },
    success?: boolean,
    message?: string
} | undefined


export const SignUpZodSchema = z.object({
    username: z
    .string()
    .min(4, {message: 'Please enter a minimum 4 character username'})
    .max(20, {message: "Please don't add more than 20 characters for username"})
    .regex(/^[a-zA-Z0-9_]+$/, { message: "Username can only contain letters, numbers, and underscores" })
    .trim(),

    fullname: z
    .string()
    .min(1, {message: 'Please enter a minimum 1 character for fullname'})
    .max(35, {message: 'Please enter 35 character maximum for fullname'})
    .regex(/^[a-zA-Z0-9_]+$/, { message: "Fullname can only contain letters, numbers, and underscores" })
    .trim(),

    password: z
    .string()
    .min(8, {message: 'Please enter a minimum 8 character for password'}),
})