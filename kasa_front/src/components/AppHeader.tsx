import React from 'react';
import { MediaQuerySelector } from '../context/DataContext';
import IconLogo from '../icons/Logo';
import './AppHeader.scss';

interface Props {}

const AppHeader: React.VFC<Props> = () => {
    return (
        <header id="header">
            <IconLogo
                color={'#FF6060'}
                style={{
                    width: MediaQuerySelector(['145px', '210px']),
                    height: MediaQuerySelector(['47px', '68px']),
                }}
            />
            <div className="hstack">
                <a href={'/'}>Accueil</a>
                <a href={'/about'}>A Propos</a>
            </div>
        </header>
    );
};

export default AppHeader;
