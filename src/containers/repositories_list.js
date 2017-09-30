import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUserRepositories } from "../actions/index";
import { Link } from 'react-router-dom';

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
                <li key={repository.name}>
                    <Link key={repository.name} to={`/repository/${repository.full_name}`}>
                        {repository.name}
                    </Link>
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