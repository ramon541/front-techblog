import type { JSX, PropsWithChildren } from 'react';

//= =================================================================================
export default function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return (
        <div className="w-full px-6 lg:px-60 flex flex-col gap-4 mt-20 lg:mt-24">
            {children}
        </div>
    );
}
