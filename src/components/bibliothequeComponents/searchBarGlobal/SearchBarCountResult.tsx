import React from 'react';
import './SearchBarGlobal.css';

interface SearchBarCountResultProps {
    resultFound: number
}

export default class SearchBarCountResult extends React.Component<SearchBarCountResultProps> {

    render() {
        return (

            <div className="resultFound">
                <sup>{ this.props.resultFound } Result found ..</sup>
            </div>

        )

    }

}
