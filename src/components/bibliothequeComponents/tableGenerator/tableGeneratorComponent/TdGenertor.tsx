import React from 'react';
import '../TableGenerator.css';

interface TdGeneratorProps {
    cle: string
    content?: any
}

interface TdGeneratorState {
    cle: string,
    content: any
}

export default class TdGenerator extends React.Component<TdGeneratorProps, TdGeneratorState> {

    public constructor(props: TdGeneratorProps) {
        super(props);
        this.state = {
            cle: this.props.cle,
            content: this.props.content
        };
    }

    render() {
        return (
            <td key={ this.state.cle }>{ this.state.content }</td>
        )
    }

}
