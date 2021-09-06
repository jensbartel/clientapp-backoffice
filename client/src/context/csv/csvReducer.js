import { GENERATE_CSV, CLEAR_CSV, GENERATE_CSV_ONEUSER } from '../types';

const csvReducer = (state, action) => {
    switch (action.type) {
        case GENERATE_CSV:
            return {
                ...state,
                csv: [],
                csvAll: action.payload[0],
                todaysDate: action.payload[1],
            };
        case GENERATE_CSV_ONEUSER:
            return {
                ...state,
                csv: action.payload[0],
                todaysDate: action.payload[1],
            };
        case CLEAR_CSV:
            return {
                ...state,
                csv: [],
                csvAll: [],
                todaysDate: null,
            };
        default:
            return state;
    }
};

export default csvReducer;
