import React from 'react';
import { MediaQuerySelector } from '../context/DataContext';
import IconChevronRight from '../icons/IconChevronRight';
import './AppCarousel.scss';

interface Props {
    images: string[];
    imageFormat?: { w?: string; h?: string };
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
        <div id="carousel">
            <img
                src={images[currentImage]}
                style={{ width: imageFormat?.w, height: imageFormat?.h }}
                width={imageFormat?.w}
                height={imageFormat?.h}
                onLoad={preload}
            />
            <div className="app_carousel_filter" />
            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        className="app_carousel_arrow_button"
                        style={{ left: '2%' }}
                        aria-label="Previous"
                        onClick={() => changeImage('prev')}
                    >
                        <IconChevronRight
                            style={{
                                width: MediaQuerySelector(['12px', '48px']),
                                height: MediaQuerySelector(['20px', '80px']),
                                transform: 'rotate(180deg)',
                            }}
                            color={'white'}
                        />
                    </button>
                    <button
                        type="button"
                        className="app_carousel_arrow_button"
                        style={{ right: '2%' }}
                        aria-label="Next"
                        onClick={() => changeImage('next')}
                    >
                        <IconChevronRight
                            color={'white'}
                            style={{
                                width: MediaQuerySelector(['12px', '48px']),
                                height: MediaQuerySelector(['20px', '80px']),
                            }}
                        />
                    </button>
                </>
            )}
        </div>
    );
};

export default AppCarousel;
