import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchRepositoryDetails } from "../actions/index";


class RepositoryDetail extends Component{

    componentDidMount() {
        const { username, repo_name } = this.props.match.params;
        this.props.fetchRepositoryDetails(`${username}/${repo_name}`);
    }

    render() {

        if(! this.props.repository){
            return <div>Loading...</div>
        }

        return (
            <div className="repository-detail">
                <a target="_blank" href={this.props.repository.html_url}><h1>{this.props.repository.name}</h1></a>
                <p>
                    {this.props.repository.description}
                </p>
                <p>
                    {this.props.repository.language}
                </p>
                <p>
                    Starts: {this.props.repository.stargazers_count}
                </p>
            </div>
        );
    }
}

function mapDispatchToProps({repository}) {
    return {repository}
}

export default connect(mapDispatchToProps, {fetchRepositoryDetails})(RepositoryDetail);