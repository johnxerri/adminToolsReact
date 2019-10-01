import Axios from 'axios';

export function getCentrexData(inputContent : any) {
    let arrayInput = inputContent.split(' ');
    return Axios.post('adminTools/getCentrexInfos', { "request": arrayInput })
    .then((res) => {
        return res.data
    });
}

export function getMultiCompteData(inputContent : any) {
    let arrayInput = inputContent.split(' ');
    return Axios.post('adminTools/getMultiCompteInfos', { "request": arrayInput })
    .then((res) => {
        return res.data
    });
}