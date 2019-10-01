import React from 'react';
import './SearchBarGlobal.css';

interface SearchBarGlobalProps {
    placeHolder?: string,
    inputRequest(datam: any): any
}

interface SearchBarGlobalState {
    inputContent: string,
    placeHolder: string,
    sqlRequest: string
}

export default class SearchBarGlobal extends React.Component<SearchBarGlobalProps, SearchBarGlobalState> {

    public constructor(props: SearchBarGlobalProps) {
        super(props);
        this.state = {
            inputContent: '',
            placeHolder: (this.props.placeHolder != null)? this.props.placeHolder : 'Search...',
            sqlRequest: ''
        };
    }

    // Gestion du contenu de l input :
    onChangeInputContent(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            inputContent: event.currentTarget.value
        });
    }

    // Gestion de la validation input avec ENTER :
    onKeyPressSearchSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
        if(event.key === "Enter"){
            this.gestionEnvoie();
        }
    }

    // Gestion de la validation input en clickant :
    onClickSearchSubmit(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();
        this.gestionEnvoie();
    }

    gestionEnvoie() {
        
        this.props.inputRequest(this.state.inputContent);
            
    }

    render() {
        
        return (

            <div className="d-flex justify-content-center">
                <div className="searchbar">
                    <input 
                        className="search_input" 
                        value={ this.state.inputContent } 
                        onChange={ this.onChangeInputContent.bind(this) }
                        onKeyPress={ this.onKeyPressSearchSubmit.bind(this) } 
                        type="text" name="" 
                        placeholder={ this.state.placeHolder }
                    />
                    <a href="/" className="search_icon" onClick={ this.onClickSearchSubmit.bind(this) }>
                        <i className="fas fa-search"></i>
                    </a>

                    {this.props.children}
                    
                </div>
            </div>
        )
    }

}
