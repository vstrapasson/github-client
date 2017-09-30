import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserRepositories } from "../actions/index";

class RepositoriesList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const username = this.props.username;

        this.props.fetchUserRepositories(username);
    }

    renderList(repository) {
        return (
            <li>
                {repository.name}
            </li>
        );
    }

    render() {
        if(!this.props.repositories){
            return (
                <div className="repositories">
                    Loading Repositories
                </div>
            );
        }

        return (
            <div className="repositories">
                {this.props.repositories.map(this.renderList)}
            </div>
        );
    }
}

function mapDispatchToProps({repositories}) {
    return {repositories}
}

export default connect(mapDispatchToProps, {fetchUserRepositories})(RepositoriesList);