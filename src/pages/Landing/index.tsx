import { type JSX } from 'react';
import ButtonText from '../../components/ButtonText';
import { useNavigate } from 'react-router';

export function Landing(): JSX.Element {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/home');
    }

    return (
        <div className="min-h-dvh flex items-center justify-center px-8">
            <div className="flex flex-col text-center gap-4">
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
        </div>
    );
}
