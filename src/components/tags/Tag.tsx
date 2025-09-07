import { type JSX } from 'react';
import { type IButtonProps } from '../buttons/Button';
import Card from '../cards/Card';

//= =================================================================================
export interface ITagProps extends Omit<IButtonProps, 'onClick'> {
    name: string;
    size?: 'small' | 'medium';
    isSelected?: boolean;
    onClick?: (tagId: string) => void;
    tagId: string;
}

//= =================================================================================
export default function Tag({
    name,
    size = 'medium',
    isSelected = false,
    onClick,
    tagId,
    ...rest
}: ITagProps): JSX.Element {
    function handleClick() {
        onClick?.(tagId);
    }

    //= =================================================================================
    const isInteractive = size === 'medium';
    const Component = isInteractive ? 'button' : 'span';

    return (
        <Component
            onClick={isInteractive ? handleClick : undefined}
            {...(isInteractive ? rest : {})}>
            <Card
                className={`
                    transition-all duration-200
                    ${
                        size === 'medium'
                            ? 'px-4 py-1'
                            : 'px-3 py-0.5 max-h-3.5 flex items-center'
                    }
                    ${
                        isInteractive
                            ? 'hover:shadow-sm cursor-pointer'
                            : 'cursor-default'
                    }
                `}
                variant={isSelected && isInteractive ? 'primary' : 'secondary'}>
                <span
                    className={`
                        ${
                            isSelected && isInteractive
                                ? 'text-white'
                                : 'text-text'
                        } 
                        font-medium 
                        ${size === 'medium' ? 'text-sm' : 'text-[10px]'}
                    `}>
                    {name}
                </span>
            </Card>
        </Component>
    );
}
