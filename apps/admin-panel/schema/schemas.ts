import z from 'zod'

export const LogInSchema = z.object({
    username: z
        .string()
        .min(4,  {message: `Min character is 4`})
        .max(25, {message: 'Max character is 25'}).trim(),
    
    password: z
        .string()
        .min(8, {message: 'Min character is 8'})
        .max(20, {message: 'Max character is 20'}).trim(),
})
