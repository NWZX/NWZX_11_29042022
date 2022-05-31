import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/Home/Home';
import HousePage from 'pages/House/House';
import NotFoundPage from 'pages/NotFound/NotFound';
import AboutPage from 'pages/About/About';
import { DataContextProvider } from 'contexts/DataContext';
import './App.scss';

export const App = (): JSX.Element => (
    <DataContextProvider apiRoute="/api/logements.json">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="houses/:id" element={<HousePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    </DataContextProvider>
);
