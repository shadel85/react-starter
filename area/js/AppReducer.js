// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { FetchZipCodesReducer } from './ZipCode/duck/Reducer';


// EXPORT App REDUCER

export const AppReducer = combineReducers({
    zipCodes: FetchZipCodesReducer
});