import type { JSX } from 'react';

//= =================================================================================
export interface IPageTitleProps {
    title: string;
}

//= =================================================================================
export default function PageTitle({ title }: IPageTitleProps): JSX.Element {
    return <h2 className="text-3xl font-bold text-text">{title}</h2>;
}
