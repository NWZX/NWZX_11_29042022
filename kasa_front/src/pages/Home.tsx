import { Grid, GridItem, Spinner } from '@chakra-ui/react';
import React from 'react';
import AppBanner from '../components/AppBanner';
import AppContainer from '../components/AppContainer';
import HouseCard from '../components/HouseCard';
import { useHousesContext } from '../context/DataContext';

interface Props {}

const HomePage: React.VFC<Props> = () => {
    const [houses, isLoading] = useHousesContext();
    return (
        <>
            <AppContainer>
                <AppBanner
                    imageSrc="/ressources/banner.png"
                    imageFormat={{ w: '100%', h: ['111px', 'unset'] }}
                    title="Chez vous, partout et ailleurs"
                />
                <Grid
                    id="cardCollection"
                    as={'main'}
                    bg={['unset', 'secondary.main']}
                    templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
                    gap={['7', '14']}
                    w={'100%'}
                    borderRadius={25}
                    p={[0, 12]}
                >
                    {isLoading ? (
                        <GridItem colSpan={3} w="100%" textAlign={'center'}>
                            <Spinner />
                        </GridItem>
                    ) : (
                        houses?.map((house) => (
                            <GridItem key={house.id} w="100%">
                                <HouseCard houseData={house} />
                            </GridItem>
                        ))
                    )}
                </Grid>
            </AppContainer>
        </>
    );
};

export default HomePage;
