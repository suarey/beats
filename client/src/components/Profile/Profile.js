import React, {Component} from 'react'
import UserInfo from '../UserInfo/UserInfo'
import EditUserForm from '../EditUserForm/EditUserForm'

// in state hold name, email, sequences, editing (defaults to false).

class Profile extends Component {
    state = {
       user: Object.assign({}, this.props.currentUser) ,
       editing: false
    }

    handleChange = (e) => {

    }

    render() {
        let { editing, user } = this.state;
        return(
            <div>
            <h1 className="display: inline">PROFILE</h1>
                <h3 onClick={() => this.setState({ editing: !editing })}>EDIT</h3>
                {editing ? <EditUserForm user={user} /> : <UserInfo user={this.props.currentUser}/>}                
            </div>
        )
    
       
    }
}

export default Profile;