import React from 'react';
import AppContainer from 'components/AppContainer/AppContainer';
import './NotFound.scss';

interface Props {}

const NotFoundPage: React.VFC<Props> = () => {
    return (
        <AppContainer>
            <div className="notFound_vstack">
                <p className="notFound_text_1">404</p>
                <p className="notFound_text_2">{"Oups! La page que vous demandez n'existe pas."}</p>
                <a href={'/'} className="notFound_link">
                    Retourner sur la page d’accueil
                </a>
            </div>
        </AppContainer>
    );
};

export default NotFoundPage;
