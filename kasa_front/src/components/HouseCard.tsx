import React from 'react';
import { IHouse } from '../interfaces/IHouse';
import './HouseCard.scss';

interface Props {
    houseData: IHouse;
}

const HouseCard: React.VFC<Props> = ({ houseData }) => {
    return (
        <div className="house_card_container">
            <img src={houseData.pictures[0]} alt={''} />
            <div className="house_card_filter" />
            <a className="house_card_link" href={`/houses/${houseData.id}`}>
                {houseData.title}
            </a>
        </div>
    );
};

export default HouseCard;
