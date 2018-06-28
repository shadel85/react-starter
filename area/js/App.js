// IMPORT PACKAGES

import React from 'react';
import { Provider } from 'react-redux';

// IMPORT STORE

import { createAppStore } from './AppStore';

// IMPORT COMPONENTS

import { AppRouter } from './AppRouter';


// COMPONENT

export const App = () => (
    <Provider store={createAppStore()}>
        <div className="container">
            <AppRouter />
        </div>
    </Provider>
);