import { Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import AppContainer from '../../components/AppContainer';

interface Props {}

const NotFoundPage: React.VFC<Props> = () => {
    return (
        <AppContainer>
            <VStack color={'primary.main'}>
                <Text fontSize={[96, 288]} fontWeight={700} lineHeight={'142.6%'} pb={[11, 66]}>
                    404
                </Text>
                <Text fontSize={[18, 36]} fontWeight={500} lineHeight={'142.6%'} pb={[133, 182]} textAlign="center">
                    {"Oups! La page que vous demandez n'existe pas."}
                </Text>
                <Link href={'/'} fontSize={[14, 18]} fontWeight={500} lineHeight={'142.6%'}>
                    Retourner sur la page d’accueil
                </Link>
            </VStack>
        </AppContainer>
    );
};

export default NotFoundPage;
