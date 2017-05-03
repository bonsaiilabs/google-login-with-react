/* global gapi */
import React from 'react';


class LoginButton extends React.Component {

    constructor(props) {
        super(props);

        this.onSignIn = this.onSignIn.bind(this);
        //this.renderGoogleLoginButton = this.renderGoogleLoginButton.bind(this);
    }


    onSignIn(googleUser) {
        console.log("user signed in"); // plus any other logic here
    }

/*
    renderGoogleLoginButton() {
        console.log('rendering google signin button');
        gapi.signin2.render('my-signin2', {
            'scope': 'https://www.googleapis.com/auth/plus.login',
            'width': 200,
            'height': 50,
            'longtitle': true,
            'theme': 'light',
            'onsuccess': this.onSignIn
        })
    }
*/

    componentDidMount() {
        //window.addEventListener('google-loaded', this.renderGoogleLoginButton);
        gapi.load('auth2', () => {
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            this.auth2 = gapi.auth2.init({
                client_id: '793065510867-j06sr2rufh7ns1kepcdolt9l22ph5pso.apps.googleusercontent.com'
            });

 /*           this.auth2.attachClickHandler(this.refs.googleButton, {},
                (googleUser) => {
                    this.googleLogin(googleUser.getBasicProfile());
                }, (error) => {

                });
*/        });
    }

    render() {
        return (
            <div className="g-signin2" data-onsuccess={this.onSignIn}></div>
        );
    }

}

export default LoginButton;