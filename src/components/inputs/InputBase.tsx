import type { PropsWithChildren } from 'react';
import Card from '../cards/Card';

export interface IInputBaseProps extends PropsWithChildren {
    label: string;
}

export default function InputBase({ children, label }: IInputBaseProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-text text-left font-semibold text-base ">
                {label}
            </label>
            <Card variant="secondary">{children}</Card>
        </div>
    );
}
