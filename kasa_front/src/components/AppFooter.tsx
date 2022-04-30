import { Text, VStack } from '@chakra-ui/react';
import React from 'react';
import IconLogo from '../icons/Logo';

interface Props {}

const AppFooter: React.VFC<Props> = () => {
    return (
        <VStack
            id="footer"
            as={'footer'}
            w={'100%'}
            bgColor={'black'}
            pt={['62px', '66px']}
            pb={['62px', '29px']}
            gap={10}
        >
            <IconLogo color={'white'} w={'122px'} h={'40px'} />
            <Text
                fontFamily={'Montserrat'}
                fontSize={[12, 34]}
                color={'white'}
                fontWeight={'500'}
                lineHeight={'142.6%'}
                textAlign="center"
            >
                © 2020 Kasa. All rights reserved
            </Text>
        </VStack>
    );
};

export default AppFooter;
