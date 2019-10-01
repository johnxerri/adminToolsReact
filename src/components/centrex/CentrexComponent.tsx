import React from 'react';

import ExtranetTemplate from '../bibliothequeComponents/extranetTemplate/ExtranetTemplate';

// import {getCentrexData} from '../bibliothequeComponents/axiosManager/axiosManager';
import {getCentrexData} from '../bibliothequeComponents/axiosManager/fakeManager';

import SearchBarGlobal from '../bibliothequeComponents/searchBarGlobal/SearchBarGlobal';
import SearchBarShowError from '../bibliothequeComponents/searchBarGlobal/SearchBarShowError';
import SearchBarCountResult from '../bibliothequeComponents/searchBarGlobal/SearchBarCountResult';
import TableGenerator from '../bibliothequeComponents/tableGenerator/TableGenerator';

interface CentrexComponentProps {
    
}

interface CentrexComponentState {
    data: any,
    loader: boolean,
    retourData: any,
    inputRequest: any,
    errorFound: any,
    resultFound: number
}

export default class CentrexComponent extends React.PureComponent<CentrexComponentProps, CentrexComponentState> {

    public constructor(props: CentrexComponentProps) {
        super(props);
        this.state = {
            data: {},
            loader: false,
            retourData: {},
            inputRequest: '',
            resultFound: 0,
            errorFound: {}
        };
    }

    /* FUNCTION TO TAKE HERE ============================= */

    // State needed : 
    // (any)data: {}, (number)resultFound: 0, (any)errorFound: {}
    private getData = async () => {
        this.setState({loader: true});
        await getCentrexData(this.state.inputRequest)
        .then((data) => {
            this.setState({
                data: data,
                resultFound: data.result.length,
                errorFound: {}
            })
        }).catch((error) => {
            this.setState({
                data: {},
                resultFound: 0,
                errorFound: { 'status': error.response.status, 'message': error.response.statusText }
            });
        }).finally(()=>{
            this.setState({loader: false});
        });
    }

    updateData = (datam: any) => {
        if(datam.length !== 0){
            this.setState({ inputRequest: datam });
            this.getData();
        } else {
            this.setState({
                resultFound: 0,
                errorFound: {}
            });
        }
        
    }

    /* FUNCTION TO TAKE HERE ============================= */

    render() {
        
        return (

            <ExtranetTemplate name="centrex" loader={this.state.loader}>
            {/* COMPONENT TO TAKE HERE ============================= */}

                {/* Search bar general : */}
                <SearchBarGlobal inputRequest={(datam) => {this.updateData(datam)} } >
                    <SearchBarShowError errorFound={this.state.errorFound} />
                    <SearchBarCountResult resultFound={this.state.resultFound} />
                </SearchBarGlobal>

                {/* Affichage retour Search : */}
                {/* <TableGenerator data={ this.state.retourData } >
                    jdhdjhb
                </TableGenerator> */}
                    {/* Button delete : */}

                {/* Affichage Sql : */}

            {/* COMPONENT TO TAKE HERE ============================= */}
            </ExtranetTemplate>

        )

    }

}