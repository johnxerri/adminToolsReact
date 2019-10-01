import React from 'react';
import './TableGenerator.css';

import TrGenerator from './tableGeneratorComponent/TrGenerator';
import TdGenertor from './tableGeneratorComponent/TdGenertor';

interface TableGeneratorProps {
    data?: any
}

interface TableGeneratorState {
    data: any
}

export default class TableGenerator extends React.Component<TableGeneratorProps, TableGeneratorState> {

    public constructor(props: TableGeneratorProps) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    render() {

        if(Object.keys(this.props.data.content).length !== 0){
            
            let colSpanData = this.state.data.colSpan;
            let thData = this.state.data.header;
            let contentData = this.state.data.content;
            return (
                <div className="tableGenerator">
                    <table className="table">
                        <thead>
                            {/* Generation des pré-entetes si il y a */}
                            {(Object.keys(colSpanData).length !== 0) && (
                                <TrGenerator key={ colSpanData.length + 1 } cle={ colSpanData.length + 1 }>
                                    {Object.keys(colSpanData).map((elem) => {
                                        return <th key={ elem } colSpan={ colSpanData[elem][0] }>{ colSpanData[elem][1] }</th>
                                    })}
                                    {(this.props.children !== undefined) && (
                                        <th key={ colSpanData.length } rowSpan={2}>Action</th>
                                    )}
                                </TrGenerator>
                            )}
                            {/* Denerateur d entete */}
                            <tr>
                                {Object.keys(thData).map((elem) => {
                                    
                                    return <th key={ elem }>{ thData[elem] }</th>

                                })}
                                {(this.props.children !== undefined) && (
                                    (Object.keys(colSpanData).length === 0) && (
                                        <th key={ thData.length }>Action</th>
                                    )
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(contentData).map((elem) => {
                                console.log(this.props.children);
                                return (
                                    <TrGenerator key={ elem } cle={ elem }>
                                        {Object.keys(contentData[elem]).map((ele) => {
                                            console.log(contentData[elem].id);
                                            return <TdGenertor key={ele} cle={ ele } content={ contentData[elem][ele] } />
                                        })}
                                        {(this.props.children !== undefined) && (
                                            <td key={ thData.length }>
                                                {/* {React.cloneElement(this.props.children, { id: contentData[elem].id })} */}
                                                { this.props.children }
                                            </td>
                                        )}
                                    </TrGenerator>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )

        } else {

            return (
                <div className="tableGenerator">
                    {/* <p>Rien à afficher</p> */}
                </div>
            )
            
        }

    }

}
