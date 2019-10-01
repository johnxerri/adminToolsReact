// import fakeData from '../../dataBase/datas.json';
import Axios from 'axios';

export function getCentrexData(inputContent : any) {
    let centrexPath = process.env.PUBLIC_URL + '/centrex.json';
    return Axios.get(centrexPath)
    .then((response) => {
        return response.data;
    });
}

export function getMultiCompteData(inputContent : any) {
    let multiComptePath = process.env.PUBLIC_URL + '/multiCompte.json';
    return Axios.get(multiComptePath)
    .then((response) => {
        return response.data;
    });
}