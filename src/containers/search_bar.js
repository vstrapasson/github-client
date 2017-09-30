import React, { Component } from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchUserInfo } from "../actions/index";

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {search: ""};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchUserInfo(this.state.search);
    }

    onInputChange(event) {
        this.setState({search: event.target.value});
    }

    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.onFormSubmit}>
                    <input
                        placeholder="Type a github username"
                        type="text"
                        onChange={this.onInputChange}
                    />
                    <button type="submit">Search</button>
                </form>

            </div>
        );
    };



}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchUserInfo }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);