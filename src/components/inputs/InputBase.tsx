import type { JSX, PropsWithChildren } from 'react';

import Card from '../cards/Card';

//= =================================================================================
export interface IInputBaseProps extends PropsWithChildren {
    label?: string;
}

//= =================================================================================
export default function InputBase({
    children,
    label,
}: IInputBaseProps): JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="text-text text-left font-semibold text-base ">
                    {label}
                </label>
            )}
            <Card variant="secondary">{children}</Card>
        </div>
    );
}
