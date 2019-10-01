import React from 'react';

import ExtranetTemplate from '../bibliothequeComponents/extranetTemplate/ExtranetTemplate';

// import {getMultiCompteData} from '../bibliothequeComponents/axiosManager/axiosManager';
import {getMultiCompteData} from '../bibliothequeComponents/axiosManager/fakeManager';

import SearchBarGlobal from '../bibliothequeComponents/searchBarGlobal/SearchBarGlobal';
import SearchBarShowError from '../bibliothequeComponents/searchBarGlobal/SearchBarShowError';
import SearchBarCountResult from '../bibliothequeComponents/searchBarGlobal/SearchBarCountResult';

import TableGenerator from '../bibliothequeComponents/tableGenerator/TableGenerator';
import DeleteButtonGenerator from '../bibliothequeComponents/tableGenerator/tableGeneratorComponent/DeleteButtonGenerator';

interface MultiCompteComponentProps {
    
}

interface MultiCompteComponentState {
    data: any,
    loader: boolean,
    inputRequest: any,
    errorFound: any,
    resultFound: number
}

export default class MultiCompteComponent extends React.Component<MultiCompteComponentProps, MultiCompteComponentState> {

    public constructor(props: MultiCompteComponentProps) {
        super(props);
        this.state = {
            // Datatable params
            data: {
                'content': {},
                'header': ['id', 'compte actif', 'email', 'prenom', 'nom', 'id', 'description', 'id client'],
                'colSpan': {
                    0: ['5','Utilisateur'], 
                    1: ['3','Role']
                }
            },
            loader: false,
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
        await getMultiCompteData(this.state.inputRequest)
        .then((response) => {
            let newData = this.state.data;
            newData.content = response.result;
            this.setState({
                data: newData,
                resultFound: response.result.length,
                errorFound: {}
            });
        }).catch((error) => {
            let newData = this.state.data;
            newData.content = {};
            this.setState({
                data: newData,
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
            let newData = this.state.data;
            newData.content = {};
            this.setState({
                data: newData,
                resultFound: 0,
                errorFound: {}
            });
        }
        
    }

    /* FUNCTION TO TAKE HERE ============================= */

    render() {

        return (

            <ExtranetTemplate name="multi-acount" loader={this.state.loader}>
            {/* COMPONENT TO TAKE HERE ============================= */}

                {/* Search bar general : */}
                <SearchBarGlobal inputRequest={(datam) => {this.updateData(datam)} } >
                    <SearchBarShowError errorFound={this.state.errorFound} />
                    <SearchBarCountResult resultFound={this.state.resultFound} />
                </SearchBarGlobal>

                {/* Affichage retour Search : */}
                <TableGenerator data={ this.state.data }>
                    {/* Button delete : */}
                    <DeleteButtonGenerator />
                </TableGenerator>

                {/* Affichage Sql : */}
                

            {/* COMPONENT TO TAKE HERE ============================= */}
            </ExtranetTemplate>

        )

    }

}