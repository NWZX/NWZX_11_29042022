import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

const IconStar = (props: IconProps): JSX.Element => {
    return (
        <Icon {...props} viewBox="0 0 30 30" fill={props.color}>
            <path
                d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                fill={props.color as string | undefined}
            />
        </Icon>
    );
};

export default IconStar;
