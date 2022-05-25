import React from 'react';
import AppBanner from '../components/AppBanner';
import AppContainer from '../components/AppContainer';
import {
    CustomCollapsableItem,
    CustomCollapsable,
    CustomCollapsableButton,
    CustomCollapsablePanel,
} from '../components/CustomCollapsable';
import { Helmet, MediaQuerySelector, useAboutContext } from '../context/DataContext';
import './About.scss';

interface Props {}

const AboutPage: React.VFC<Props> = () => {
    const [data] = useAboutContext();
    return (
        <AppContainer>
            <Helmet title={'A Propos'} />
            <AppBanner
                imageSrc={MediaQuerySelector(['/ressources/banner2_m.png', '/ressources/banner2.png'])}
                imageFormat={{ w: '100%', h: MediaQuerySelector(['223px', 'unset']) }}
            />
            <CustomCollapsable className="custom_collapsable">
                {data.map((item, i) => (
                    <CustomCollapsableItem key={i}>
                        <h2 className="collapsable_title">
                            <CustomCollapsableButton>
                                <p className="collapsable_button_title">{item.title}</p>
                            </CustomCollapsableButton>
                        </h2>
                        <CustomCollapsablePanel>
                            <p className="collapsable_description">{item.description}</p>
                        </CustomCollapsablePanel>
                    </CustomCollapsableItem>
                ))}
            </CustomCollapsable>
        </AppContainer>
    );
};

export default AboutPage;
