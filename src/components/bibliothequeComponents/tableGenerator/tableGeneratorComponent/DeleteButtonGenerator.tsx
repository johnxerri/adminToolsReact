import React from 'react';
import '../TableGenerator.css';

interface DeleteButtonGeneratorProps {
    
}

interface DeleteButtonGeneratorState {
    
}

export default class DeleteButtonGenerator extends React.Component<DeleteButtonGeneratorProps, DeleteButtonGeneratorState> {

    // public constructor(props: DeleteButtonGeneratorProps) {
    //     super(props);
    //     this.state = {
    //         cle: this.props.cle,
    //         content: this.props.content
    //     };
    // }

    render() {
        return (
            <button type="button" title="Supprimer" className="btn btn-alert waves-effect">
                <i className="fas fa-times"></i>
            </button>
        )
    }

}