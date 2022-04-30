import { Flex, HStack, Link } from '@chakra-ui/react';
import React from 'react';
import IconLogo from '../icons/Logo';

interface Props {}

const AppHeader: React.VFC<Props> = () => {
    return (
        <Flex id="header" as={'header'} w={'100%'} justifyContent="space-between">
            <IconLogo color={'primary.main'} w={['145px', '210px']} h={['47px', '68px']} />
            <HStack fontSize={[12, 24]} lineHeight={'142.6%'} gap={[3, 14]} color={'primary.main'}>
                <Link href={'/'}>Accueil</Link>
                <Link href={'/about'}>A Propos</Link>
            </HStack>
        </Flex>
    );
};

export default AppHeader;
