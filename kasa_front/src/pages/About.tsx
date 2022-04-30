import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import AppBanner from '../components/AppBanner';
import AppContainer from '../components/AppContainer';
import { useAboutContext } from '../context/DataContext';

interface Props {}

const AboutPage: React.VFC<Props> = () => {
    const [data] = useAboutContext();
    const [isNotMobile] = useMediaQuery('(min-width: 30em)');
    return (
        <AppContainer>
            <Helmet>
                <title>A Propos</title>
            </Helmet>
            <AppBanner
                imageSrc={isNotMobile ? '/ressources/banner2.png' : '/ressources/banner2_m.png'}
                imageFormat={{ w: '100%', h: ['223px', 'unset'] }}
            />
            <Accordion allowMultiple px={['0%', '10%']} w={'100%'}>
                {data.map((item, i) => (
                    <AccordionItem key={i} borderRadius={5} mb={8}>
                        <Box as={'h2'} bgColor={'primary.main'} color={'white'} borderRadius={5}>
                            <AccordionButton>
                                <Text
                                    flex="1"
                                    textAlign="left"
                                    fontSize={[13, 24]}
                                    fontWeight={500}
                                    lineHeight={'142.6%'}
                                >
                                    {item.title}
                                </Text>
                                <AccordionIcon w={['32px', '36px']} h={['32px', '36px']} />
                            </AccordionButton>
                        </Box>
                        <AccordionPanel pb={4} bgColor={'secondary.main'} borderRadius={'0 0 5px 5px'}>
                            <Text fontSize={[12, 24]} fontWeight={400} lineHeight={'142.6%'} color={'primary.main'}>
                                {item.description}
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </AppContainer>
    );
};

export default AboutPage;
