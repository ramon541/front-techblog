import type { JSX, PropsWithChildren } from 'react';
import clsx from 'clsx';

//= =================================================================================
export interface ICardProps
    extends PropsWithChildren,
        Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
    variant?: 'primary' | 'secondary' | 'none';
}

//= =================================================================================
export default function Card({
    variant = 'primary',
    children,
    className,
    ...props
}: ICardProps): JSX.Element {
    const variantClasses = {
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary text-text',
        none: '',
    };

    return (
        <div
            className={clsx('rounded-xl', variantClasses[variant], className)}
            {...props}>
            {children}
        </div>
    );
}
