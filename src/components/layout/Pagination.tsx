import { type JSX } from 'react';
import { clsx } from 'clsx';

//= =================================================================================
export interface IPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    maxVisiblePages?: number;
    className?: string;
}

//= =================================================================================
export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    maxVisiblePages = 5,
    className,
}: IPaginationProps): JSX.Element {
    //= =================================================================================
    const getVisiblePages = (): number[] => {
        if (totalPages <= maxVisiblePages) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const half = Math.floor(maxVisiblePages / 2);
        let start = currentPage - half;
        let end = currentPage + half;

        if (start < 1) {
            start = 1;
            end = Math.min(maxVisiblePages, totalPages);
        }

        if (end > totalPages) {
            end = totalPages;
            start = Math.max(1, totalPages - maxVisiblePages + 1);
        }

        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    //= =================================================================================
    const handlePageClick = (page: number) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            onPageChange(page);
        }
    };

    //= =================================================================================
    const visiblePages = getVisiblePages();
    const showLeftEllipsis = visiblePages[0] > 2;
    const showRightEllipsis =
        visiblePages[visiblePages.length - 1] < totalPages - 1;

    //= =================================================================================
    if (totalPages <= 1) return <></>;

    return (
        <div
            className={clsx(
                'flex items-center justify-center gap-2',
                className
            )}>
            {visiblePages[0] > 1 && (
                <>
                    <button
                        onClick={() => handlePageClick(1)}
                        className={clsx(
                            'w-8 h-8 rounded-full flex items-center justify-center',
                            'transition-all duration-200 text-sm text-text hover:bg-gray-100'
                        )}>
                        1
                    </button>
                    {showLeftEllipsis && (
                        <span className="text-text-placeholder text-sm px-1">
                            ...
                        </span>
                    )}
                </>
            )}

            {visiblePages.map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={clsx(
                        'w-10 h-10 rounded-full flex items-center justify-center cursor-pointer',
                        'transition-all duration-200',
                        page === currentPage
                            ? 'bg-secondary text-text font-bold text-[14px]'
                            : 'text-text text-sm hover:bg-gray-100'
                    )}>
                    {page}
                </button>
            ))}

            {visiblePages[visiblePages.length - 1] < totalPages && (
                <>
                    {showRightEllipsis && (
                        <span className="text-text-placeholder text-sm px-1">
                            ...
                        </span>
                    )}
                    <button
                        onClick={() => handlePageClick(totalPages)}
                        className={
                            'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 text-sm text-text hover:bg-gray-100'
                        }>
                        {totalPages}
                    </button>
                </>
            )}
        </div>
    );
}
