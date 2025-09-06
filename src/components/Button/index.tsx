import type { PropsWithChildren } from 'react';
import Card from '../Card';

export interface IButtonProps
    extends PropsWithChildren,
        React.ButtonHTMLAttributes<HTMLButtonElement> {}
export default function Button({ children, ...rest }: IButtonProps) {
    return (
        <button {...rest}>
            <Card className="px-4 py-2 hover:bg-primary-900 transition-colors cursor-pointer">
                {children}
            </Card>
        </button>
    );
}
