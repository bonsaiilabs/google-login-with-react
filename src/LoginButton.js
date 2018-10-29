/* global gapi */
import React from 'react';


class LoginButton extends React.Component {

    constructor(props) {
        super(props);

        this.onSignIn = this.onSignIn.bind(this);
        this.renderGoogleLoginButton = this.renderGoogleLoginButton.bind(this);
        this.logout = this.logout.bind(this);
    }


    onSignIn(googleUser) {
        console.log("user signed in");
        let user = googleUser.getBasicProfile();
        let id_token = googleUser.getAuthResponse().id_token;
        console.log('google user obj', user);
        console.log('google_id_token', id_token);

        // plus any other logic here
    }


    renderGoogleLoginButton() {
        console.log('rendering google signin button');
        window.gapi.signin2.render('my-signin2', {
            'scope': 'profile email',
            'width': 200,
            'height': 50,
            'longtitle': true,
            'theme': 'light',
            'onsuccess': this.onSignIn
        })
    }

    logout() {
        console.log('in logout');
        let auth2 = window.gapi && window.gapi.auth2.getAuthInstance();
        if(auth2) {
            auth2.signOut()
            .then(() => {console.log('Logged out successfully')})
            .catch(err => {console.log('Error while logging out', err)});
        } else {
            console.log('error while logging out');
        }
    }

    componentDidMount() {
        window.addEventListener('google-loaded', this.renderGoogleLoginButton);
        window.gapi && this.renderGoogleLoginButton();
    }

    render() {
        return (
          <div>
            <div id='my-signin2'></div>
            <br />
            <button style={{width: 200, height: 50, textAlign: 'center'}} onClick={this.logout}>
                Logout
            </button>
          </div>
        );
    }

}

export default LoginButton;