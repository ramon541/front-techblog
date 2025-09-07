import type { PropsWithChildren } from 'react';
import Card, { type ICardProps } from '../../cards/Card';

export interface IButtonProps
    extends PropsWithChildren,
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        Pick<ICardProps, 'variant'> {}
export default function Button({ children, variant, ...rest }: IButtonProps) {
    return (
        <button {...rest}>
            <Card
                className="px-4 py-2 hover:bg-primary-900 transition-colors cursor-pointer"
                variant={variant}>
                {children}
            </Card>
        </button>
    );
}
