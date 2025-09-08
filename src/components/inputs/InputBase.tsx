import type { JSX, PropsWithChildren } from 'react';

import Card, { type ICardProps } from '../cards/Card';

//= =================================================================================
export interface IInputBaseProps
    extends PropsWithChildren,
        Pick<ICardProps, 'variant'> {
    label?: string;
}

//= =================================================================================
export default function InputBase({
    children,
    label,
    variant = 'secondary',
}: IInputBaseProps): JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="text-text text-left font-semibold text-base ">
                    {label}
                </label>
            )}
            <Card variant={variant}>{children}</Card>
        </div>
    );
}
