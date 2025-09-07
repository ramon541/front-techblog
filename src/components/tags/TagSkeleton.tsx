import { type JSX } from 'react';

//= =================================================================================
export interface ITagSkeletonProps {
    size?: 'small' | 'medium';
    count?: number;
}

//= =================================================================================
export default function TagSkeleton({
    size = 'medium',
    count = 6,
}: ITagSkeletonProps): JSX.Element {
    const sizeClasses = {
        small: 'px-3 py-0.5 h-6',
        medium: 'px-4 py-1 h-7',
    };

    const generateRandomWidth = () => {
        const widths = ['w-12', 'w-16', 'w-14', 'w-20', 'w-10', 'w-18', 'w-24'];
        return widths[Math.floor(Math.random() * widths.length)];
    };

    //= =================================================================================
    return (
        <div className="flex gap-2 flex-wrap">
            {Array.from({ length: count }, (_, index) => (
                <div
                    key={index}
                    className={`
                        animate-pulse
                        relative overflow-hidden rounded-lg
                        bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200
                        bg-[length:200%_100%]
                        ${sizeClasses[size]}
                        flex items-center justify-center
                    `}
                    style={{
                        animationDelay: `${index * 0.1}s`,
                    }}>
                    <div
                        className={`
                            ${generateRandomWidth()}
                        `}
                    />
                </div>
            ))}
        </div>
    );
}
