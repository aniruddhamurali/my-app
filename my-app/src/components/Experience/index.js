import React, { Component } from 'react';
import './Experience.css';
import ExperienceModal from '../ExperienceModal';

class Experience extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        };
    }

    toggleModal = () => {
        this.setState({showModal: !this.state.showModal})
    }

    render() {
        return (
            <>
                <div className="exp-card" onClick={() => { if (!this.state.showModal) this.toggleModal() }}>
                    <div className="exp-logo-wrap">
                        <img className="exp-logo" src={this.props.image} alt={this.props.name} />
                    </div>
                    <div className="exp-body">
                        <h4 className="exp-company">{this.props.name}</h4>
                        <h6 className="exp-role">{this.props.role}</h6>
                        <span className="exp-location">{this.props.location}</span>
                    </div>
                    <div className="exp-right">
                        <span className="exp-timeframe">{this.props.timeframe}</span>
                    </div>
                </div>
                <ExperienceModal
                    show={this.state.showModal}
                    toggleModal={this.toggleModal}
                    carousel={this.props.carousel}
                    title={this.props.name}
                    about={this.props.about}
                />
            </>
        );
    }
}

export default Experience;
