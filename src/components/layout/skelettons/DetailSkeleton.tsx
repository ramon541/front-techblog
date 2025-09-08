import { type JSX } from 'react';

//= =================================================================================
export interface IDetailSkeletonProps {
    hasImage?: boolean;
}

//= =================================================================================
export default function DetailSkeleton({
    hasImage = true,
}: IDetailSkeletonProps): JSX.Element {
    const generateRandomWidth = () => {
        const widths = ['w-3/4', 'w-2/3', 'w-4/5', 'w-5/6', 'w-2/4'];
        return widths[Math.floor(Math.random() * widths.length)];
    };

    const generateRandomTagWidth = () => {
        const widths = ['w-16', 'w-20', 'w-24', 'w-18', 'w-14'];
        return widths[Math.floor(Math.random() * widths.length)];
    };

    const generateRandomParagraphWidth = () => {
        const widths = ['w-full', 'w-11/12', 'w-5/6', 'w-4/5'];
        return widths[Math.floor(Math.random() * widths.length)];
    };

    //= =================================================================================
    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-2">
                <div
                    className={`
                        h-8 md:h-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 
                        bg-[length:200%_100%] animate-pulse rounded
                        ${generateRandomWidth()}
                    `}
                />

                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-pulse rounded w-64" />
            </div>

            {hasImage && (
                <div className="w-full h-64 md:h-80 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-pulse rounded-lg" />
            )}

            <div className="flex gap-2 flex-wrap">
                {Array.from(
                    { length: Math.floor(Math.random() * 4) + 2 },
                    (_, tagIndex) => (
                        <div
                            key={tagIndex}
                            className={`
                            h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 
                            bg-[length:200%_100%] animate-pulse rounded-full
                            ${generateRandomTagWidth()}
                        `}
                            style={{
                                animationDelay: `${tagIndex * 0.1}s`,
                            }}
                        />
                    )
                )}
            </div>

            <div className="flex flex-col gap-3">
                {Array.from(
                    { length: 8 + Math.floor(Math.random() * 4) },
                    (_, lineIndex) => (
                        <div
                            key={lineIndex}
                            className={`
                            h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 
                            bg-[length:200%_100%] animate-pulse rounded
                            ${
                                lineIndex === 3 || lineIndex === 7
                                    ? 'w-3/4'
                                    : generateRandomParagraphWidth()
                            }
                        `}
                            style={{
                                animationDelay: `${lineIndex * 0.05}s`,
                            }}
                        />
                    )
                )}
            </div>
        </div>
    );
}
