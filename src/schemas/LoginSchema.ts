import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email({ message: 'Digite um Email válido' }),
    password: z
        .string()
        .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
});

export type TLoginFormFields = z.infer<typeof loginSchema>;
