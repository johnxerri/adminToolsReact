import React from 'react';
import './SearchBarGlobal.css';

interface SearchBarShowErrorProps {
    errorFound: any
}

export default class SearchBarShowError extends React.Component<SearchBarShowErrorProps> {

    render() {
        return (

            (this.props.errorFound !== null) && (
                <div className="errorFound">
                    <sup>{ this.props.errorFound.status } { this.props.errorFound.message }</sup>
                </div>
            )

        )

    }

}
