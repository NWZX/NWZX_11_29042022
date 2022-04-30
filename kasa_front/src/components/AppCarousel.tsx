import { Box, IconButton, Image as ChakraImage } from '@chakra-ui/react';
import React from 'react';
import IconChevronRight from '../icons/IconChevronRight';

interface Props {
    images: string[];
    imageFormat?: { w?: string | string[]; h?: string | string[] };
}

const AppCarousel: React.VFC<Props> = ({ images, imageFormat }) => {
    const [currentImage, setCurrentImage] = React.useState(0);
    const changeImage = (direction: 'next' | 'prev'): void => {
        if (direction === 'next') {
            setCurrentImage(currentImage + 1 >= images.length ? 0 : currentImage + 1);
        } else {
            setCurrentImage(currentImage - 1 >= 0 ? currentImage - 1 : images.length - 1);
        }
    };
    const preload = (): void => {
        if (images.length > 1) {
            for (let i = 1; i < images.length; i++) {
                let temp: HTMLImageElement | undefined = new Image();
                temp.src = images[i];
                temp = undefined;
            }
        }
    };

    return (
        <Box id="carousel" position={'relative'} borderRadius={25} textAlign={'center'} w={'100%'}>
            <ChakraImage
                src={images[currentImage]}
                borderRadius={[10, 25]}
                w={imageFormat?.w}
                h={imageFormat?.h}
                fit="cover"
                onLoad={preload}
            />
            <Box
                w={'100%'}
                h={'100%'}
                top={'50%'}
                transform={'translate(0%, -50%)'}
                position={'absolute'}
                backgroundColor={'#000000'}
                mixBlendMode="darken"
                opacity={0.3}
                borderRadius={[10, 25]}
            />
            {images.length > 1 && (
                <>
                    {' '}
                    <IconButton
                        variant={'unstyled'}
                        w={['12px', '48px']}
                        h={['20px', '80px']}
                        top={'50%'}
                        left={'2%'}
                        transform={'translate(0%, -50%)'}
                        position={'absolute'}
                        icon={
                            <IconChevronRight
                                transform={'rotate(180deg)'}
                                w={['12px', '48px']}
                                h={['20px', '80px']}
                                color={'white'}
                            />
                        }
                        aria-label="Previous"
                        onClick={() => changeImage('prev')}
                    />
                    <IconButton
                        variant={'unstyled'}
                        w={['12px', '48px']}
                        h={['20px', '80px']}
                        top={'50%'}
                        right={'2%'}
                        transform={'translate(0%, -50%)'}
                        position={'absolute'}
                        icon={<IconChevronRight w={['12px', '48px']} h={['20px', '80px']} color={'white'} />}
                        aria-label="Next"
                        onClick={() => changeImage('next')}
                    />
                </>
            )}
        </Box>
    );
};

export default AppCarousel;
