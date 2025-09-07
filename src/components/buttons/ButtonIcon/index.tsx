import type { JSX } from 'react';

import { Edit, Logout, Trash } from '../../../assets/icons';
import Button, { type IButtonProps } from '../Button';

//= =================================================================================
export interface IButtonIconProps extends IButtonProps {
    icon: 'logout' | 'edit' | 'trash';
}

//= =================================================================================
export default function ButtonIcon({
    icon,
    ...rest
}: IButtonIconProps): JSX.Element {
    const defaultIconColor = 'var(--color-text)';

    const icons = {
        logout: <Logout color={defaultIconColor} />,
        edit: <Edit color={defaultIconColor} />,
        trash: <Trash color={defaultIconColor} />,
    };
    return (
        <Button {...rest} variant="secondary">
            {icons[icon]}
        </Button>
    );
}
