import React from 'react';
import IconLogo from 'icons/Logo';
import './AppFooter.scss';

interface Props {}

const AppFooter: React.VFC<Props> = () => {
    return (
        <footer id="footer">
            <IconLogo color={'white'} style={{ width: '122px', height: '40px' }} />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default AppFooter;
