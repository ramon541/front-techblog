import { type JSX } from 'react';

//= =================================================================================
export interface ICardArticleSkeletonProps {
    count?: number;
}

//= =================================================================================
export default function CardArticleSkeleton({
    count = 3,
}: ICardArticleSkeletonProps): JSX.Element {
    const generateRandomWidth = () => {
        const widths = ['w-32', 'w-40', 'w-36', 'w-44', 'w-28', 'w-48'];
        return widths[Math.floor(Math.random() * widths.length)];
    };

    const generateRandomTagWidth = () => {
        const widths = ['w-12', 'w-16', 'w-14', 'w-20', 'w-10'];
        return widths[Math.floor(Math.random() * widths.length)];
    };

    //= =================================================================================
    return (
        <div className="flex flex-col gap-6 w-full">
            {Array.from({ length: count }, (_, index) => (
                <div
                    key={index}
                    className="flex gap-4 items-center"
                    style={{
                        animationDelay: `${index * 0.1}s`,
                    }}>
                    <div className="w-24 h-24 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-pulse rounded-lg flex-shrink-0" />

                    <div className="flex flex-col w-full gap-2">
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col gap-1 md:flex-row flex-1 min-w-0">
                                <div className="flex flex-col gap-2 flex-1">
                                    <div
                                        className={`
                                            h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 
                                            bg-[length:200%_100%] animate-pulse rounded
                                            ${generateRandomWidth()}
                                        `}
                                    />

                                    <div className="flex gap-2 flex-wrap">
                                        {Array.from(
                                            {
                                                length:
                                                    Math.floor(
                                                        Math.random() * 3
                                                    ) + 1,
                                            },
                                            (_, tagIndex) => (
                                                <div
                                                    key={tagIndex}
                                                    className={`
                                                    h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 
                                                    bg-[length:200%_100%] animate-pulse rounded-full
                                                    ${generateRandomTagWidth()}
                                                `}
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="w-3 h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-pulse rounded flex-shrink-0" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-pulse rounded w-full" />
                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-pulse rounded w-3/4" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
