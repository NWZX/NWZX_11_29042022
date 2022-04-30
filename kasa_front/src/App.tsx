import * as React from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import HousePage from './pages/House';
import NotFoundPage from './pages/errors/NotFound';
import AboutPage from './pages/About';
import { DataContextProvider } from './context/DataContext';
import appTheme from './theme';
import { HelmetProvider } from 'react-helmet-async';

export const App = (): JSX.Element => (
    <DataContextProvider apiRoute="/api/logements.json">
        <ColorModeScript />
        <ChakraProvider theme={appTheme}>
            <HelmetProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="houses/:id" element={<HousePage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </BrowserRouter>
            </HelmetProvider>
        </ChakraProvider>
    </DataContextProvider>
);
