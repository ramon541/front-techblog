import type { JSX } from 'react';
import Wrapper from '../../components/layout/Wrapper';
import PageTitle from '../../components/texts/PageTitle';

export function Edit(): JSX.Element {
    return (
        <Wrapper>
            <PageTitle title="Editar artigo" />
        </Wrapper>
    );
}
