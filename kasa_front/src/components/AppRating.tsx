import { Flex } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import IconStar from '../icons/IconStar';

interface Props {
    maxRating?: number;
    rating: number;
    color?: {
        default?: string;
        hover?: string;
    };
    icon?: JSX.Element;
    gap?: number;
}

const AppRating: React.VFC<Props> = ({ maxRating = 5, rating, color, icon, gap }) => {
    const isIcon = React.isValidElement(icon);
    return (
        <Flex gap={gap}>
            {[...Array(maxRating)].map((_, i) => {
                if (isIcon) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const _icon = React.cloneElement(icon as any, {
                        'aria-hidden': true,
                        focusable: false,
                        color: i < rating ? color?.hover : color?.default,
                    });
                    return <Fragment key={i}>{_icon}</Fragment>;
                } else {
                    return <IconStar key={i} color={i < rating ? 'primary.main' : 'secondary.ghost'} />;
                }
            })}
        </Flex>
    );
};

export default AppRating;
