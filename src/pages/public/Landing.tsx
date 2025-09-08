import { type JSX } from 'react';
import ButtonText from '../../components/buttons/ButtonText';
import { useNavigate } from 'react-router';

export function Landing(): JSX.Element {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/home');
    }

    return (
        <div className="h-dvh flex items-center justify-center flex-col text-center gap-4 px-8">
            <h1 className="font-semibold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-text">
                Insights & Learning
            </h1>
            <p className="text-base mx-6 md:text-lg lg:text-xl xl:text-2xl text-text">
                Explorando tendências Tech, um post por vez
            </p>
            <div className="w-1/2 mx-auto">
                <ButtonText onClick={handleClick} text="Começar a ler" />
            </div>
        </div>
    );
}
