import type { JSX } from 'react';
import { Edit } from '../../assets/icons';
import Image from '../images/Image';
import H3 from '../texts/H3';
import Paragraph from '../texts/Paragraph';
import Tag from '../tags/Tag';
import { useNavigate } from 'react-router';
import { useAuth } from '../../providers/auth';

//= =================================================================================
export interface ICardArticleProps {
    image?: string | null;
    articleId: string;
    authorId: string;
    title: string;
    content: string;
    tags: Array<{ tagId: string; tag: { name: string } }>;
}

//= =================================================================================
export default function CardArticle({
    articleId,
    authorId,
    content,
    tags,
    title,
    image,
}: ICardArticleProps): JSX.Element {
    const navigate = useNavigate();
    const { user } = useAuth();

    //= =================================================================================
    function handleClickEdit() {
        navigate(`/articles/${articleId}/edit`);
    }

    //= =================================================================================
    function handleClickArticle() {
        navigate(`/articles/${articleId}`);
    }

    //= =================================================================================
    return (
        <>
            <button
                onClick={handleClickArticle}
                className="w-full cursor-pointer p-2 rounded-2xl hover:bg-gray-50 transition-colors">
                <div key={articleId} className="flex gap-4 items-center">
                    <Image src={image || ''} />
                    <div className="flex flex-col w-full">
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col gap-1 md:flex-row ">
                                <H3
                                    text={title}
                                    className="line-clamp-1 text-left"
                                />
                                <div className="flex gap-2 mb-4 flex-wrap">
                                    {tags.map((tag) => (
                                        <Tag
                                            key={articleId + tag.tagId}
                                            tagId={tag.tagId}
                                            size="small"
                                            name={tag.tag.name}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Paragraph
                            text={content}
                            className="line-clamp-2 text-left"
                        />
                    </div>
                </div>
            </button>
            {user?.id === authorId && (
                <button
                    onClick={handleClickEdit}
                    className="absolute cursor-pointer p-2 rounded-2xl hover:bg-gray-100 transition-colors">
                    <Edit
                        color="var(--color-text-placeholder)"
                        width={12}
                        height={12}
                    />
                </button>
            )}
        </>
    );
}
