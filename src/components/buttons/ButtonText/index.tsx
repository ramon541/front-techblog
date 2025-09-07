import Button, { type IButtonProps } from '../Button';

export interface IButtonTextProps extends IButtonProps {
    text: string;
}

export default function ButtonText({ text, ...rest }: IButtonTextProps) {
    return (
        <Button {...rest}>
            <span className="text-white text-sm font-semibold">{text}</span>
        </Button>
    );
}
