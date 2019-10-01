import React from 'react';
import '../TableGenerator.css';

interface TrGeneratorProps {
    cle: string
}

interface TrGeneratorState {
    cle: string
}

export default class TrGenerator extends React.Component<TrGeneratorProps, TrGeneratorState> {

    public constructor(props: TrGeneratorProps) {
        super(props);
        this.state = {
            cle: this.props.cle
        };
    }

    render() {
        return (
            <tr key={ this.state.cle }>
                { this.props.children }
            </tr>
        )
    }

}
