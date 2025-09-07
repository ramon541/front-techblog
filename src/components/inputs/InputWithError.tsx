import type { PropsWithChildren } from 'react';

import InputBase, { type IInputBaseProps } from './InputBase';

export interface IInputWithErrorProps
    extends PropsWithChildren,
        IInputBaseProps {
    errorMessage?: string;
}

function InputWithError({
    label,
    children,
    errorMessage,
}: IInputWithErrorProps) {
    return (
        <div>
            <InputBase label={label}>{children}</InputBase>
            <div className="h-4 mt-2">
                {errorMessage && (
                    <text className="block text-left text-error text-xs">
                        {errorMessage}
                    </text>
                )}
            </div>
        </div>
    );
}

export default InputWithError;
