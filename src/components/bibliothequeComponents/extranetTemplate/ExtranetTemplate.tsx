import React from 'react';
import './ExtranetTemplate.css';
import Loader from '../loader/Loader';

interface ExtranetTemplateProps { 
    name: string,
    loader?: boolean
}

export default class ExtranetTemplate extends React.Component<ExtranetTemplateProps> {

    render() {
        
        return (
            
            <section className="content">
                <div className="container-fluid container-full-extranet">
                    <div>
                        {(this.props.loader) && (
                            <Loader />
                        )}
                        <div className="row clearfix">
                            <div className="col-12">
                                <div className="card">
                                    <div className={ this.props.name + ' header pageTitleBloc' }>
                                        <h2><i className="fab fa-react"></i> { this.props.name } Manager</h2>
                                    </div>
                                    <div className="body">
                                        <div className="row">
                                            <div className="col-12">

                                                {this.props.children}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )

    }

}
