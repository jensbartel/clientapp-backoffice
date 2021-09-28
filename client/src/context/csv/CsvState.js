import { useReducer } from 'react';
import CsvContext from './csvContext';
import csvReducer from './csvReducer';
import codes from '../../utils/country_codes.json';

import { GENERATE_CSV, CLEAR_CSV, GENERATE_CSV_ONEUSER } from '../types';

const CsvState = props => {
    const initialState = {
        csv: [],
        csvAll: [],
        todaysDate: null,
    };

    const [state, dispatch] = useReducer(csvReducer, initialState);

    // CSV helper functions
    const repeat = (num, whatTo) => {
        var arr = [];
        for (var i = 0; i < num; i++) {
            arr.push(whatTo);
        }
        return arr;
    };

    const addressFieldChecks = item => {
        let returnValue;
        if (item === ', ') {
            returnValue = '';
        } else if (item.slice(-2) === ', ') {
            returnValue = item.slice(0, -2);
        } else if (item.substring(0, 2) === ', ') {
            returnValue = item.slice(2);
        } else return item;
        return returnValue;
    };

    const countryCode = value => {
        const val = value.toLowerCase();
        if (Object.keys(codes).includes(val) === false) {
            return value;
        }
        return codes[val];
    };

    const generate = clients => {
        const today = new Date();
        const date = today.getFullYear() + ('0' + (today.getMonth() + 1)).slice(-2) + today.getDate();

        let gyomuArray = [
            [
                'No',
                '日付',
                '顧客＃',
                '担当',
                '敬称',
                '顧客名',
                '業界',
                'メールアドレス',
                '国（在）',
                '住所 line 1',
                '住所 line 2',
                '住所 ZIP code',
                '勤務先 line 1',
                '勤務先 line 2',
                '勤務先 ZIP code',
                '役職',
                'Tel.',
                'Mobile',
                'FAX',
                'Tel. (Work)',
                'Mobile (Work)',
                'FAX (Work)',
                '備考',
                'Wanobi catalog',
                'Catalog Home',
                'Catalog Office',
                '会社名 Company',
                'キーワード Keyword',
            ],
        ];

        let arrayToPush = [];

        let counter = 0;
        clients.forEach(client => {
            counter += 1;
            arrayToPush = repeat(28, '');
            arrayToPush[0] = counter.toString();
            arrayToPush[5] = client.clientName;
            arrayToPush[26] = client.company;
            arrayToPush[8] = countryCode(client.country);
            arrayToPush[1] = client.date.slice(0, 10).replaceAll('-', '/');
            arrayToPush[7] = client.email;
            arrayToPush[4] = client.greeting;
            arrayToPush[3] = client.incharge;
            arrayToPush[6] = client.industry;
            arrayToPush[17] = client.mobile;
            arrayToPush[22] = client.notes;
            arrayToPush[15] = client.position;
            arrayToPush[9] = addressFieldChecks(client.reviewAddressLine1);
            arrayToPush[10] = addressFieldChecks(client.reviewAddressLine2);
            arrayToPush[16] = client.tel;
            if (client.wanobi === '1') {
                arrayToPush[23] = 'TRUE';
            } else {
                arrayToPush[23] = 'FALSE';
            }

            gyomuArray.push(arrayToPush);
        });

        return [gyomuArray, date];
    };

    // generate CSV
    const generateCsv = clients => {
        const data = generate(clients);

        dispatch({ type: GENERATE_CSV, payload: data });
    };

    // clear CSV
    const clearCsv = () => {
        dispatch({ type: CLEAR_CSV });
    };

    // generate CSV for one user
    const generateCsvForOne = (clients, user) => {
        const data = generate(clients);

        dispatch({ type: GENERATE_CSV_ONEUSER, payload: data });
    };

    return (
        <CsvContext.Provider
            value={{
                csv: state.csv,
                csvAll: state.csvAll,
                todaysDate: state.todaysDate,
                generateCsv,
                generateCsvForOne,
                clearCsv,
            }}
        >
            {props.children}
        </CsvContext.Provider>
    );
};

export default CsvState;
