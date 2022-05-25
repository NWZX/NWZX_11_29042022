import React from 'react';
import './AppBanner.scss';

interface Props {
    imageSrc?: string;
    imageFormat?: { w?: string; h?: string };
    title?: string;
}

const AppBanner: React.VFC<Props> = ({ imageSrc, title, imageFormat }) => {
    return (
        <div id="banner">
            <img
                src={imageSrc}
                style={{ width: imageFormat?.w, height: imageFormat?.h }}
                width={imageFormat?.w}
                height={imageFormat?.h}
            />
            <div className="banner-spacer" />
            {title && <p>{title}</p>}
        </div>
    );
};

export default AppBanner;
