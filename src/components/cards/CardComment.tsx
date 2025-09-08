import type { JSX } from 'react';
import Paragraph from '../texts/Paragraph';
import Image from '../images/Image';

//= =================================================================================
export interface ICardCommentProps {
    comment: ICommentWithRelations;
    level?: number;
    className?: string;
}

//= =================================================================================
export default function CardComment({
    comment,
    level = 0,
    className = '',
}: ICardCommentProps): JSX.Element {
    const marginLeft = level > 0 ? `ml-${Math.min(level * 4, 12)}` : '';

    //= =================================================================================
    return (
        <div className={`flex flex-col gap-3 ${marginLeft} ${className}`}>
            <div className="flex items-start gap-4 mb-3">
                {comment.user.avatar ? (
                    <Image
                        src={comment.user.avatar}
                        alt={comment.user.name}
                        className="w-10 h-10 rounded-full flex-shrink-0"
                    />
                ) : (
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Paragraph
                            text={comment.user.name.charAt(0).toUpperCase()}
                            className="text-text text-sm font-bold"
                        />
                    </div>
                )}
                <div className="flex flex-col">
                    <div className="flex gap-2">
                        <Paragraph
                            text={comment.user.name}
                            className="text-text text-sm font-bold"
                        />
                        <span className="text-sm text-text-secondary">
                            {new Date(comment.createdAt).toLocaleDateString(
                                'pt-BR',
                                {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                }
                            )}
                        </span>
                    </div>
                    <p className="text-text leading-relaxed">
                        {comment.content}
                    </p>
                </div>
            </div>

            {comment.replies && comment.replies.length > 0 && (
                <div className="ml-4  pl-4">
                    {comment.replies.map((reply) => (
                        <CardComment
                            key={reply.id}
                            comment={reply}
                            level={level + 1}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
