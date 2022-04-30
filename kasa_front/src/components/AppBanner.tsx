import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
    imageSrc: string;
    imageFormat?: { w?: string | string[]; h?: string | string[] };
    title?: string;
}

const AppBanner: React.VFC<Props> = ({ imageSrc, title, imageFormat }) => {
    return (
        <Box id="banner" position={'relative'} borderRadius={25} textAlign={'center'} w={'100%'}>
            <Image src={imageSrc} borderRadius={[10, 25]} w={imageFormat?.w} h={imageFormat?.h} fit="cover" />
            <Box
                w={'100%'}
                h={'100%'}
                top={'50%'}
                transform={'translate(0%, -50%)'}
                position={'absolute'}
                backgroundColor={'#000000'}
                mixBlendMode="darken"
                opacity={0.3}
                borderRadius={[10, 25]}
            />
            {title && (
                <Text
                    position={'absolute'}
                    top={'50%'}
                    left={'50%'}
                    transform={'translate(-50%, -50%)'}
                    color={'white'}
                    fontWeight={'500'}
                    fontSize={['24px', '48px']}
                    lineHeight={['100%', '142.6%']}
                    w={['90%', 'unset']}
                    textAlign={['left', 'center']}
                >
                    {title}
                </Text>
            )}
        </Box>
    );
};

export default AppBanner;
