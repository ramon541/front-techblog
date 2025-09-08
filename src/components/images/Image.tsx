import clsx from 'clsx';
import type { ImgHTMLAttributes, JSX } from 'react';

//= =================================================================================
export default function Image({
    className,
    ...props
}: ImgHTMLAttributes<HTMLImageElement>): JSX.Element {
    return (
        <img
            className={clsx(className || 'rounded-lg w-14 h-14 object-cover')}
            {...props}
        />
    );
}
