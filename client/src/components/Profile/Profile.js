import React, {Component} from 'react'

// in state hold name, email, sequences, editing (defaults to false).

class Profile extends Component {
    state = {
       user: Object.assign({this.props.currentUser}) ,
       editing: false
    }

    handleChange = (e) => {

    }

    render() {
        return(
            <div>
                <button onClick={() => this.setState({ editing: !editing })}></button>
                <h1 className="display: inline">PROFILE</h1>
                <h3 className="display: inline">EDIT</h3>
            </div>
        )
    
       
    }
}

export default Profile;