import { VStack } from '@chakra-ui/react';
import React from 'react';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

interface Props {}

const AppContainer: React.FC<Props> = ({ children }) => {
    return (
        <>
            <VStack px={['5%', '10%']} py={['5%', '2%']} gap={[7, 10]} fontFamily={'Montserrat'}>
                <AppHeader />
                {children}
            </VStack>
            <AppFooter />
        </>
    );
};

export default AppContainer;
