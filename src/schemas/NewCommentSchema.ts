import z from 'zod';

//= =================================================================================
const MIN_CONTENT_LENGTH = 2;
const MAX_CONTENT_LENGTH = 2000;

//= =================================================================================
export const newCommentSchema = z.object({
    content: z
        .string('Conteúdo do comentário é obrigatório')
        .min(
            MIN_CONTENT_LENGTH,
            `Comentário deve ter no mínimo ${MIN_CONTENT_LENGTH} caracteres`
        )
        .max(
            MAX_CONTENT_LENGTH,
            `Comentário deve ter no máximo ${MAX_CONTENT_LENGTH} caracteres`
        ),
    articleId: z.uuid('ID do artigo deve ser um UUID válido'),
    userId: z.uuid('ID do usuário deve ser um UUID válido'),
    parentId: z
        .uuid('ID do comentário pai deve ser um UUID válido')
        .optional()
        .nullable(),
});

//= =================================================================================
export type TNewCommentFormFields = z.infer<typeof newCommentSchema>;
