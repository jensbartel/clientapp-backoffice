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

    const greetingCode = value => {
        switch (value) {
            case '2':
                return '6';
            case '3':
                return '7';
            case '4':
                return '9';
            case '5':
                return '12';
            default:
                return value;
        }
    };

    const countryCode = value => {
        const val = value.toLowerCase();
        if (Object.keys(codes).includes(val) === false) {
            return value;
        }
        return codes[val];
    };

    const matchUser = (inCharge, users) => {
        const inChargeEdit = inCharge.substring(5); // remove "user-..."
        const filtered = users.filter(user => user._id === inChargeEdit);
        let value = 'undefined';
        if (filtered[0].name) {
            value = eigyoTanto[filtered[0].name];
        }

        return value;
    };

    const nameWithoutKana = name => {
        let returnName = name;
        if (name.includes('（')) {
            const nameArray = name.split('（');
            returnName = nameArray[0];
        } else returnName = name;

        return returnName;
    };

    const kanaName = name => {
        let returnName = '';
        if (name.includes('（')) {
            const kana = name.split('（');
            returnName = kana[1].substring(0, kana[1].length - 1);
        }
        return returnName;
    };

    const generate = (clients, users) => {
        const today = new Date();
        const date = today.getFullYear() + ('0' + (today.getMonth() + 1)).slice(-2) + today.getDate();

        let gyomuArray = [
            [
                '支店名(コード指定、未入力時は「本社」)',
                '海外フラグ(1=海外、0もしくは未入力時は海外ではない)',
                '★顧客名(必須)',
                '★顧客名かな',
                '★敬称(コード指定、未入力時は「様」)',
                '★生年月日(YYYY/MM/DD)',
                '★地区名(コード指定)',
                '★キーワード',
                '登録日(YYYY/MM/DD)',
                '★自宅郵便番号(ハイフン有り無し、どちらでも可)',
                '★自宅住所１',
                '★自宅住所２',
                '★自宅電話番号１(ハイフン有り無し、どちらでも可)',
                '★自宅電話番号２(ハイフン有り無し、どちらでも可)',
                '★自宅FAX(ハイフン有り無し、どちらでも可)',
                '★勤務先名',
                '★勤務先内容',
                '★役職名',
                '★勤務先郵便番号(ハイフン有り無し、どちらでも可)',
                '★勤務先住所１',
                '★勤務先住所２',
                '★勤務先電話番号１(ハイフン有り無し、どちらでも可)',
                '★勤務先電話番号２(ハイフン有り無し、どちらでも可)',
                '★勤務先FAX(ハイフン有り無し、どちらでも可)',
                '状況区分(コード指定、未入力時は「本人」)',
                '本人状況内容',
                '★紹介状況内容',
                '其他状況内容',
                '★ＤM発行（目録）(する=1 しない=0)',
                '★自宅送付(する=1 しない=0)',
                '★勤務先送付(する=1 しない=0)',
                '★営業担当(コード指定)',
                '新規NT(コード指定)',
                '★送付ランク(コード指定)',
                '★目録種類(コード指定)',
                '★備考',
                '★メールアドレス',
            ],
        ];

        let arrayToPush = [];

        clients.forEach(client => {
            arrayToPush = repeat(30, '');
            arrayToPush[1] = '1';
            arrayToPush[2] = nameWithoutKana(client.clientName);
            arrayToPush[3] = kanaName(client.clientName);
            arrayToPush[15] = client.company;
            arrayToPush[6] = countryCode(client.country);
            arrayToPush[8] = client.date.slice(0, 10).replaceAll('-', '/');
            arrayToPush[36] = client.email;
            arrayToPush[4] = greetingCode(client.greeting);
            arrayToPush[31] = matchUser(client._partition, users);
            arrayToPush[16] = client.industry;
            arrayToPush[13] = client.mobile;
            arrayToPush[35] = client.notes;
            arrayToPush[17] = client.position;
            arrayToPush[10] = addressFieldChecks(client.reviewAddressLine1);
            arrayToPush[11] = addressFieldChecks(client.reviewAddressLine2);
            arrayToPush[12] = client.tel;
            arrayToPush[28] = '0';
            arrayToPush[29] = '1';
            arrayToPush[30] = '0';
            arrayToPush[33] = '1';
            if (client.wanobi === '1') {
                arrayToPush[34] = '2';
            } else {
                arrayToPush[34] = '6';
            }

            gyomuArray.push(arrayToPush);
        });

        return [gyomuArray, date];
    };

    // generate CSV
    const generateCsv = (clients, users) => {
        const data = generate(clients, users);

        dispatch({ type: GENERATE_CSV, payload: data });
    };

    // clear CSV
    const clearCsv = () => {
        dispatch({ type: CLEAR_CSV });
    };

    // generate CSV for one user
    const generateCsvForOne = (clients, user, id) => {
        const userName = [{ name: user, _id: id }];
        const data = generate(clients, userName);

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

// ****
const eigyoTanto = {
    'yamauchi@shibunkaku.co.jp': '359',
    'ymaruyama@shibunkaku.co.jp': '388 Yoko',
    'ryo@shibunkaku.co.jp': '403',
    'he@shibunkaku.co.jp': '424',
    'bartel@shibunkaku.co.jp': '425',
    'ku@shibunkaku.co.jp': '426',
};
