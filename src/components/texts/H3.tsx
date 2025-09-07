import clsx from 'clsx';
import type { HtmlHTMLAttributes, JSX } from 'react';

//= =================================================================================
export interface IH3Props extends HtmlHTMLAttributes<HTMLHeadingElement> {
    text: string;
}

//= =================================================================================
export default function H3({
    text,
    className,
    ...rest
}: IH3Props): JSX.Element {
    return (
        <h3
            className={clsx('text-base font-medium text-text', className)}
            {...rest}>
            {text}
        </h3>
    );
}
