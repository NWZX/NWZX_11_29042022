import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Avatar,
    Box,
    Flex,
    Grid,
    GridItem,
    HStack,
    List,
    ListItem,
    Spinner,
    Tag,
    Text,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppCarousel from '../components/AppCarousel';
import AppContainer from '../components/AppContainer';
import AppRating from '../components/AppRating';
import { useHouseContext } from '../context/DataContext';
import IconStar from '../icons/IconStar';
import { Helmet } from 'react-helmet-async';

interface Props {}

const HousePage: React.VFC<Props> = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [house] = useHouseContext(id || null);
    if (!id) {
        navigate('/404');
        return null;
    }

    return house ? (
        <AppContainer>
            <Helmet>
                <title>{house.title}</title>
            </Helmet>
            <AppCarousel images={house.pictures} imageFormat={{ w: '100%', h: ['255px', '415px'] }} />
            <Grid templateColumns={'repeat(12, 1fr)'} w={'100%'} gap={[3, 20]}>
                <GridItem colSpan={[12, 8]}>
                    <Flex flexDir={'column'}>
                        <Text fontSize={[18, 36]} lineHeight={'142.6%'} color={'primary.main'} textAlign={'left'}>
                            {house.title}
                        </Text>
                        <Text fontSize={[14, 18]} lineHeight={'142.6%'} color={'primary.main'} textAlign={'left'}>
                            {house.location}
                        </Text>
                    </Flex>
                    <HStack mt={[3, 6]}>
                        {house.tags.map((tag, i) => (
                            <Tag
                                key={i}
                                bgColor={'primary.main'}
                                px={[5, 7]}
                                borderRadius={10}
                                fontSize={[10, 14]}
                                lineHeight={'142.6%'}
                                color={'white'}
                                textAlign={'center'}
                            >
                                {tag}
                            </Tag>
                        ))}
                    </HStack>
                </GridItem>
                <GridItem colSpan={[12, 4]}>
                    <Flex
                        direction={['row-reverse', 'column']}
                        justifyContent={['space-between', 'unset']}
                        gap={[0, 5]}
                    >
                        <HStack justifyContent={['end']}>
                            <Text
                                fontSize={[12, 18]}
                                lineHeight={'142.6%'}
                                color={'primary.main'}
                                alignSelf={'center'}
                                textAlign={'right'}
                            >
                                {house.host.name.split(' ')[0]} <br /> {house.host.name.split(' ')[1]}
                            </Text>
                            <Avatar name={house.host.name} src={house.host.picture} />
                        </HStack>
                        <Flex justifyContent={['start', 'end']} alignItems="center">
                            <AppRating
                                rating={parseInt(house.rating)}
                                icon={<IconStar w={[15, 30]} h={[15, 30]} />}
                                color={{ default: 'secondary.ghost', hover: 'primary.main' }}
                                gap={2}
                            />
                        </Flex>
                    </Flex>
                </GridItem>
            </Grid>
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} w={'100%'} gap={[0, 20]}>
                <GridItem>
                    <Accordion defaultIndex={[0]} allowMultiple w={'100%'}>
                        <AccordionItem borderRadius={5} mb={8}>
                            <Box as={'h2'} bgColor={'primary.main'} color={'white'} borderRadius={5}>
                                <AccordionButton>
                                    <Text
                                        flex="1"
                                        textAlign="left"
                                        fontSize={[13, 24]}
                                        fontWeight={500}
                                        lineHeight={'142.6%'}
                                    >
                                        Description
                                    </Text>
                                    <AccordionIcon w={['32px', '36px']} h={['32px', '36px']} />
                                </AccordionButton>
                            </Box>
                            <AccordionPanel pb={4} bgColor={'secondary.main'} borderRadius={'0 0 5px 5px'}>
                                <Text fontSize={[12, 18]} fontWeight={400} lineHeight={'142.6%'} color={'primary.main'}>
                                    {house.description}
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </GridItem>
                <GridItem>
                    <Accordion defaultIndex={[0]} allowMultiple w={'100%'}>
                        <AccordionItem borderRadius={5} mb={8}>
                            <Box as={'h2'} bgColor={'primary.main'} color={'white'} borderRadius={5}>
                                <AccordionButton>
                                    <Text
                                        flex="1"
                                        textAlign="left"
                                        fontSize={[13, 24]}
                                        fontWeight={500}
                                        lineHeight={'142.6%'}
                                    >
                                        Équipements
                                    </Text>
                                    <AccordionIcon w={['32px', '36px']} h={['32px', '36px']} />
                                </AccordionButton>
                            </Box>
                            <AccordionPanel pb={4} bgColor={'secondary.main'} borderRadius={'0 0 5px 5px'}>
                                <List spacing={1}>
                                    {house.equipments.map((equipment, i) => (
                                        <ListItem
                                            key={i}
                                            fontSize={[12, 18]}
                                            fontWeight={400}
                                            lineHeight={'142.6%'}
                                            color={'primary.main'}
                                        >
                                            {equipment}
                                        </ListItem>
                                    ))}
                                </List>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </GridItem>
            </Grid>
        </AppContainer>
    ) : (
        <Spinner />
    );
};

export default HousePage;
