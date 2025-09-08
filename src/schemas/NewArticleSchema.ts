import z from 'zod';

//= =================================================================================
const MIN_TITLE_LENGTH = 3;
const MAX_TITLE_LENGTH = 100;

const MIN_CONTENT_LENGTH = 10;
const MAX_CONTENT_LENGTH = 5000;

const MIN_TAGS_PER_ARTICLE = 1;
const MAX_TAGS_PER_ARTICLE = 3;

//= =================================================================================
export const newArticleSchema = z.object({
    title: z
        .string('Título do artigo é obrigatório')
        .min(
            MIN_TITLE_LENGTH,
            `Título deve ter no mínimo ${MIN_TITLE_LENGTH} caracteres`
        )
        .max(
            MAX_TITLE_LENGTH,
            `Título deve ter no máximo ${MAX_TITLE_LENGTH} caracteres`
        ),
    content: z
        .string('Conteúdo do artigo é obrigatório')
        .min(
            MIN_CONTENT_LENGTH,
            `Conteúdo deve ter no mínimo ${MIN_CONTENT_LENGTH} caracteres`
        )
        .max(
            MAX_CONTENT_LENGTH,
            `Conteúdo deve ter no máximo ${MAX_CONTENT_LENGTH} caracteres`
        ),
    image: z
        .string()
        .optional()
        .refine((val) => !val || z.url().safeParse(val).success, {
            message: 'URL da imagem deve ser válida',
        }),
    authorId: z.uuid('ID do autor deve ser um UUID válido'),
    tagIds: z
        .array(z.uuid('ID da tag deve ser um UUID válido'))
        .min(
            MIN_TAGS_PER_ARTICLE,
            `Um artigo deve ter no mínimo ${MIN_TAGS_PER_ARTICLE} tags`
        )
        .max(
            MAX_TAGS_PER_ARTICLE,
            `Um artigo pode ter no máximo ${MAX_TAGS_PER_ARTICLE} tags`
        ),
});

export type TNewArticleFormFields = z.infer<typeof newArticleSchema>;
