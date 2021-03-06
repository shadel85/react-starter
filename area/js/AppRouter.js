// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from './Header/';
import { HomePage } from './Home/';
import { AboutPage } from './About/';
import { ZipCodesPage } from './ZipCode/';


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />            
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/zipcodes" component={ZipCodesPage} />
                <Route path="/about" component={AboutPage} />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);