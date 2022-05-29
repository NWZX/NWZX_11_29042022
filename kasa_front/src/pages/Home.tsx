import React from 'react';
import Spinner from '../componentLakra/Spinner/Spinner';
import AppBanner from '../components/AppBanner';
import AppContainer from '../components/AppContainer';
import HouseCard from '../components/HouseCard';
import { Helmet, MediaQuerySelector, useHousesContext } from '../context/DataContext';
import './Home.scss';

interface Props {}

const HomePage: React.VFC<Props> = () => {
    const [houses, isLoading] = useHousesContext();
    return (
        <>
            <AppContainer>
                <Helmet title={'Kasa'} />
                <AppBanner
                    imageSrc="/ressources/banner.png"
                    imageFormat={{ w: '100%', h: MediaQuerySelector(['111px', 'unset']) }}
                    title="Chez vous, partout et ailleurs"
                />
                <main id="cardCollection">
                    {isLoading ? (
                        <div
                            style={{
                                width: '100%',
                                gridColumn: '1 / span 3',
                                textAlign: 'center',
                            }}
                        >
                            <Spinner />
                        </div>
                    ) : (
                        houses?.map((house) => (
                            <div key={house.id} style={{ width: '100%' }}>
                                <HouseCard houseData={house} />
                            </div>
                        ))
                    )}
                </main>
            </AppContainer>
        </>
    );
};

export default HomePage;
