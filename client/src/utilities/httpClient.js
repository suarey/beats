import axios from 'axios';
import jwtDecode from 'jwt-decode';

const httpClient = axios.create();

// Setting the token in localStorage.
httpClient.setToken = function(token) {
    localStorage.setItem('token', token);
    return token;
};

// Getting the token from localStorage
httpClient.getToken = function(token) {
    return localStorage.getItem('token');
};

// Getting the currentUser
httpClient.getCurrentUser = function() {
    const token = this.getToken();
    // console.log(token);
    if (token) return jwtDecode(token);
    return null
};

httpClient.updateCredentials = async function(credentials, id) {
    // 'this' referes to the instance of axios instantiated above.
    let res = await this({ method: "patch", url: `/api/users/${id}`, data: credentials });
    // Grab the token from the data that's returned in the response.
    const token = res.data.token;

    if (token) {
        this.defaults.headers.common.token = this.setToken(token);
        console.log("TOKEN", jwtDecode(token))
        return jwtDecode(token);
    } else {
        return false;
    }
}

httpClient.authenticate = async function(credentials, url) {
    // 'this' referes to the instance of axios instantiated above.
    let res = await this({ method: "post", url, data: credentials });
    // Grab the token from the data that's returned in the response.
    const token = res.data.token;

    if (token) {
        this.defaults.headers.common.token = this.setToken(token);
        return jwtDecode(token);
    } else {
        return false;
    }
}

httpClient.removeUser = async function(id) {
    // 'this' referes to the instance of axios instantiated above.
    let res = await this({ method: "delete", url: `/api/users/${id}`});
    if (res.data.message === "SUCCESS") {
        return true;
    } else {
        return false;
    }
    // Grab the token from the data that's returned in the response.
}

httpClient.logOut = function () {
    localStorage.removeItem('token')// Delete the token from localStorage.
    delete this.defaults.headers.common.token; // Delete the token from the httpClient Header.
    return true
}

// During the initial app load, attempt to set a localStorage stored token as a default header for all api requests.
httpClient.defaults.headers.common.token = httpClient.getToken();
export default httpClient;