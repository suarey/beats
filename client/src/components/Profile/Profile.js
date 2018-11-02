import React, {Component} from 'react'
import UserInfo from '../UserInfo/UserInfo'
import EditUserForm from '../EditUserForm/EditUserForm';
import httpClient from '../../utilities/httpClient';

// in state hold name, email, sequences, editing (defaults to false).

class Profile extends Component {
    state = {
       user: null ,
       editing: false,
    }
    componentDidMount () {
        let { user } = this.state;
        // call user profile and setState({user:res}) to response 
        let res = httpClient.getCurrentUser(user)
        this.setState({ user: res })
        // 
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        let { user } = this.state;
        this.setState({ user: {...user, [name]: value}});
        //     let {  value } = this.state;
        //     // console.log(e.target);
        // this.setState({ ...user, [user]: value});
    }

	handleSubmit = async (e) => {
        e.preventDefault();
        let { _id, email, name } = this.state.user;
        let updatedCredentials = { name, email };
        
        // alert(this.state.value);
    //    let user = await httpClient.updateCredentials(updatedCredentials, _id);
        this.setState({ editing: false });
        this.props.updateProfile(updatedCredentials, _id);
    }

    handleDelete = async (e) => {
        let { user } = this.state;
        let res =  await httpClient.removeUser(user._id);
        if (res) this.props.history.push('/logout');
    }

 
    render() { 
        let { editing, user } = this.state;
        let { handleChange, handleSubmit, handleDelete } = this;
        return(
            <div>
            <h1 className="display: inline">PROFILE</h1>
            { user && 
                <div>  <h3 onClick={() => this.setState({ editing: !editing })}>EDIT</h3>
                { editing 
                    ? <EditUserForm 
                        myChange={handleChange} 
                        user={user} 
                        handleSubmit={handleSubmit}
                        handleDelete={handleDelete}/> 
                    : <UserInfo user={this.state.user}/>
                }    
                </div> } 
              
            </div>
        )
    
       
    }
}

export default Profile;