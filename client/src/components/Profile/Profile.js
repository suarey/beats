import React, {Component} from 'react'

// in state hold name, email, sequences, editing (defaults to false).

class Profile extends Component {
    state = {
        name: "",
        email: "", 
        password: "",
        recordings: []
    }

    handleChange = (e) => {
        let { name, email, password, recordings } = e.target;
        this.setState({ [name]: "", [email]: "", [password]: "", [recordings]: "" });
    }

    render() {
        return(
            <div>
                <h1 className="display: inline">PROFILE</h1>
                <h3 className="display: inline">EDIT</h3>
            </div>
        )
    
       
    }
}

export default Profile;