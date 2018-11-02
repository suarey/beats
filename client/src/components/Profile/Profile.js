import React, {Component} from 'react'
import UserInfo from '../UserInfo/UserInfo'
import EditUserForm from '../EditUserForm/EditUserForm';
import httpClient from '../../utilities/httpClient';

// in state hold name, email, sequences, editing (defaults to false).

class Profile extends Component {
    state = {
       user: null ,
       editing: false,
       playing: { 
           id: null,
           active: false
       },
       recordings: []
    }

    async componentDidMount () {
        // call user profile and setState({user:res}) to response 
        let res = await httpClient({ method: 'get', url: `/api/users/${this.props.currentUser._id}` });
        let user = res.data.payload;
        this.setState({ user });
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

    togglePlay = (id) => {
        let playing = !this.state.playing
        this.setState({ playing: { id, active: !this.state.playing.active } })
    }

 
    render() { 
        let { editing, user, playing } = this.state;
        let { handleChange, handleSubmit, handleDelete, togglePlay } = this;
        if (!user) return <div></div>
        return(
            <div>
            <h1 className="display: inline">PROFILE</h1>
                <div>  <h3 onClick={() => this.setState({ editing: !editing })}>EDIT</h3>
                { editing 
                    ? <EditUserForm 
                        myChange={handleChange} 
                        user={user}
                        handleSubmit={handleSubmit}
                        handleDelete={handleDelete}/> 
                    : <UserInfo user={this.state.user}/>
                }    
                </div>  
                <div style={{ marginLeft: 300, marginRight: 300 }}>
                {user.recordings.map(r => {
                    return (
                        <div key={r._id}style={{ margin: "20px", padding: "10px", border: "1px solid black", display: "flex", justifyContent: "space-between" }}>
                            {(playing.active && r._id === playing.id )
                                ? <i onClick={() => togglePlay(r._id)} className="fas fa-pause"></i> 
                                : <i onClick={() => togglePlay(r._id)} className="fas fa-play"></i>}
                            <i class="fas fa-trash-alt"></i>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    
       
    }
}

export default Profile;