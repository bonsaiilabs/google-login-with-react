/* global gapi */
import React from 'react';


class LoginButton extends React.Component {

    constructor(props) {
        super(props);

        this.onSignIn = this.onSignIn.bind(this);
        this.renderGoogleLoginButton = this.renderGoogleLoginButton.bind(this);
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

    componentDidMount() {
        window.addEventListener('google-loaded', this.renderGoogleLoginButton);
    }

    render() {
        return (
            <div id='my-signin2'></div>
        );
    }

}

export default LoginButton;