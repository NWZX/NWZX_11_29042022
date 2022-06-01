import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppCarousel from 'components/AppCarousel/AppCarousel';
import AppContainer from 'components/AppContainer/AppContainer';
import AppRating from 'components/AppRating/AppRating';
import { Helmet, MediaQuerySelector, useHouseContext } from 'contexts/DataContext';
import IconStar from 'icons/IconStar';
import {
    CustomCollapsable,
    CustomCollapsableButton,
    CustomCollapsableItem,
    CustomCollapsablePanel,
} from 'components/CustomCollapsable/CustomCollapsable';
import './House.scss';
import Flex from 'components/Flex/Flex';
import Spinner from 'components/Spinner/Spinner';

interface Props {}

const HousePage: React.VFC<Props> = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [house, isLoading, error] = useHouseContext(id as string);

    /*
        To my future self, please don't judge me for this code.
        MediaQuerySelector is a function that returns the correct value for the current screen size
         - Why is it used here?
        Because we want to have different values for different screen sizes.
        But MediaQuerySelector is a function that contains UseEffect logic so it can't be in branch logic code (aka if/else).
        Unless i revamp every compotent to include MediaQuerySelector logic in their render method.
        So i decided to use MediaQuerySelector here because making a UI Framework like ChakraUI is a lot of work.
        And i don't want to do that now.
        Maybe later ¯\_(ツ)_/¯
    */
    const header_height = MediaQuerySelector(['225px', '415px']);
    const grid_gap = MediaQuerySelector(['3px', '20px']);
    const grid_item1 = MediaQuerySelector(['span 12 / span 12', 'span 8 / span 8']);
    const grid_item2 = MediaQuerySelector(['span 12 / span 12', 'span 4 / span 4']);
    const icon_size = MediaQuerySelector(['15px', '30px']);
    const grid2_tColumns = MediaQuerySelector(['repeat(1, 1fr)', 'repeat(2, 1fr)']);
    const grid2_gap = MediaQuerySelector(['0px', '20px']);
    const tagGroup_top = MediaQuerySelector(['3px', '6px']);
    const tag_padding = MediaQuerySelector(['1.25rem', '1.75rem']);
    const tag_fontSize = MediaQuerySelector(['10px', '14px']);

    if (!id || error) {
        navigate('/404');
        return null;
    }

    return house ? (
        <AppContainer>
            <Helmet title={house.title} />
            <AppCarousel images={house.pictures} imageFormat={{ w: '100%', h: header_height }} />

            <div id="house_sub_header_grid_container" style={{ gap: grid_gap }}>
                <div style={{ gridColumn: grid_item1 }}>
                    <Flex direction={'column'}>
                        <p className="sub_header_title">{house.title}</p>
                        <p className="sub_header_location">{house.location}</p>
                    </Flex>
                    <Flex direction={'row'} style={{ marginTop: tagGroup_top, gap: '5px' }}>
                        {house.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="sub_header_tag"
                                style={{
                                    paddingInlineStart: tag_padding,
                                    paddingInlineEnd: tag_padding,
                                    fontSize: tag_fontSize,
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </Flex>
                </div>
                <div style={{ gridColumn: grid_item2 }}>
                    <Flex
                        direction={['row-reverse', 'column']}
                        justifyContent={['space-between', 'unset']}
                        gap={['0px', '5px']}
                        alignItems={['center', 'end']}
                    >
                        <Flex direction={'row'} justifyContent={'end'} alignItems={'center'}>
                            <p className="sub_header_author">
                                {house.host.name.split(' ')[0]} <br /> {house.host.name.split(' ')[1]}
                            </p>
                            <span className="sub_header_avatar">
                                <img src={house.host.picture} alt={house.host.name} />
                            </span>
                        </Flex>
                        <Flex>
                            <AppRating
                                rating={parseInt(house.rating)}
                                icon={
                                    <IconStar
                                        style={{
                                            width: icon_size,
                                            height: icon_size,
                                        }}
                                    />
                                }
                                color={{ default: '#E3E3E3', hover: '#FF6060' }}
                                gap={2}
                            />
                        </Flex>
                    </Flex>
                </div>
            </div>
            <div
                id="house_collapsable"
                style={{ display: 'grid', gridTemplateColumns: grid2_tColumns, width: '100%', gap: grid2_gap }}
            >
                <div>
                    <CustomCollapsable>
                        <CustomCollapsableItem open>
                            <h2 className="collapsable_title">
                                <CustomCollapsableButton>
                                    <span className="collapsable_button_title">Description</span>
                                </CustomCollapsableButton>
                            </h2>
                            <CustomCollapsablePanel>
                                <p className="collapsable_description">{house.description}</p>
                            </CustomCollapsablePanel>
                        </CustomCollapsableItem>
                    </CustomCollapsable>
                </div>
                <div>
                    <CustomCollapsable>
                        <CustomCollapsableItem open>
                            <h2 className="collapsable_title">
                                <CustomCollapsableButton>
                                    <p className="collapsable_button_title">Équipements</p>
                                </CustomCollapsableButton>
                            </h2>
                            <CustomCollapsablePanel>
                                <ul className="custom_collapsable_list">
                                    {house.equipments.map((equipment, i) => (
                                        <li key={i}>{equipment}</li>
                                    ))}
                                </ul>
                            </CustomCollapsablePanel>
                        </CustomCollapsableItem>
                    </CustomCollapsable>
                </div>
            </div>
        </AppContainer>
    ) : (
        <Spinner />
    );
};

export default HousePage;
