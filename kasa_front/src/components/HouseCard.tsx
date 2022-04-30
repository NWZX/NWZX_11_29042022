import { Box, Image, Link } from '@chakra-ui/react';
import React from 'react';
import { IHouse } from '../interfaces/IHouse';

interface Props {
    houseData: IHouse;
}

const HouseCard: React.VFC<Props> = ({ houseData }) => {
    return (
        <Box w={'340'} h={'340'} borderWidth="1px" borderRadius="lg" overflow="hidden" position={'relative'}>
            <Image src={houseData.pictures[0]} alt={''} w={'100%'} h={340} fit="cover" />
            <Box
                w={'100%'}
                h={'100%'}
                top={'50%'}
                transform={'translate(0%, -50%)'}
                position={'absolute'}
                background={'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%)'}
                opacity={0.3}
                borderRadius={10}
            />
            <Link
                position={'absolute'}
                bottom={8}
                left={8}
                isTruncated
                fontSize={18}
                fontWeight={'500'}
                color={'white'}
                lineHeight={'142.6%'}
                href={`/houses/${houseData.id}`}
            >
                {houseData.title}
            </Link>
        </Box>
    );
};

export default HouseCard;
