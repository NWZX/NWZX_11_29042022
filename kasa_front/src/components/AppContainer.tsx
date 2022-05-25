import React from 'react';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import './AppContainer.scss';

interface Props {}

const AppContainer: React.FC<Props> = ({ children }) => {
    return (
        <>
            <div id="app_container">
                <AppHeader />
                {children}
            </div>
            <AppFooter />
        </>
    );
};

export default AppContainer;
