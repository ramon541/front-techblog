import clsx from 'clsx';
import type { HtmlHTMLAttributes, JSX } from 'react';

//= =================================================================================
export interface IParagraphProps
    extends HtmlHTMLAttributes<HTMLParagraphElement> {
    text: string;
}

//= =================================================================================
export default function Paragraph({
    text,
    className,
    ...rest
}: IParagraphProps): JSX.Element {
    return (
        <p
            className={clsx(className || 'text-sm text-text-placeholder')}
            {...rest}>
            {text}
        </p>
    );
}
