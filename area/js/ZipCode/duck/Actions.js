import { fetchZipCodes } from './Operations';
import { FETCH_ZIPCODES } from './ActionTypes';


// ACTION GENERATORS

const fetchZipCodesAction = () => ({
    type: FETCH_ZIPCODES,
    payload: fetchZipCodes()
});


// EXPORT ACTIONS

export { fetchZipCodesAction as fetchZipCodes };