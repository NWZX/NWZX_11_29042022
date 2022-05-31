import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IHouse } from 'interfaces/IHouse';
import './HouseCard.scss';

interface Props {
    houseData: IHouse;
}

const HouseCard: React.VFC<Props> = ({ houseData }) => {
    const navigate = useNavigate();
    return (
        <div className="house_card_container" onClick={() => navigate(`/houses/${houseData.id}`)}>
            <img src={houseData.pictures[0]} alt={''} />
            <div className="house_card_filter" />
            <span className="house_card_link">{houseData.title}</span>
        </div>
    );
};

export default HouseCard;
