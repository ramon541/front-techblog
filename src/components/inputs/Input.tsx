import type { JSX } from 'react';
import clsx from 'clsx';

//= =================================================================================
export default function Input({
    className,
    ...rest
}: React.InputHTMLAttributes<HTMLInputElement>): JSX.Element {
    return (
        <input
            {...rest}
            className={clsx(
                'w-full placeholder-text-placeholder px-4 py-2 focus:outline-none',
                className || ''
            )}
        />
    );
}
