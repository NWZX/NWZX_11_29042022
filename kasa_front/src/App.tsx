import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import HousePage from './pages/House';
import NotFoundPage from './pages/errors/NotFound';
import AboutPage from './pages/About';
import { DataContextProvider } from './context/DataContext';
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
