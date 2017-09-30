import React, {Component} from 'react';
import RepositoriesList from "./repositories_list";
import { connect } from 'react-redux';

class Profile extends Component {
    render() {

        if(!this.props.user){
            return '';
        }

        return (
            <div className="profile">
                <div className="card">
                    <img src={this.props.user.avatar_url} alt=""/>
                    <div className="info">
                        <div className="email">{this.props.user.email}</div>
                        <div className="follow">
                            <span>Followers: {this.props.user.followers}</span>
                            <span>Following: {this.props.user.following}</span>
                        </div>
                        <div className="bio">
                            {this.props.user.bio}
                        </div>
                    </div>

                </div>
                <RepositoriesList username={this.props.user.login}/>
                <div className="clear-fix" />
            </div>
        );
    }
}

function mapStateToProps({user}) {
    return {user};
}

export default connect(mapStateToProps)(Profile);