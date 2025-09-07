import type { JSX, PropsWithChildren } from 'react';
import clsx from 'clsx';

//= =================================================================================
export interface IMainContainerProps
    extends PropsWithChildren,
        React.HTMLAttributes<HTMLDivElement> {}

//= =================================================================================
export default function MainContainer({
    children,
    className,
    ...rest
}: IMainContainerProps): JSX.Element {
    return (
        <main className={clsx('bg-white min-h-dvh', className)} {...rest}>
            {children}
        </main>
    );
}
